jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            name:{
                required:true,
            },
            sortNo:{
                required:true,
            },
        },
        messages:{
            name:{
                required:"专业领域不能为空"
            },
            sortNo:{
                required:"排序不能为空"
            }
        }
    });


    //渲染
    _init();
    //绑定
    _bind();

    function _init(){
        //初始化列表
        var parameter = $.getParameters();
        var id = parameter.dataId;
        if(id){
            _initData(id);
        }
    }

    function _bind () {
        //保存
        $('#btnSave').on('click', function () {
            var parameter = $.getParameters();
            var id = parameter.dataId;
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/activitys/'+id);
        });

        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });

        //置顶
        $('#btnIsTop').on('click', function () {
            var parameter = $.getParameters();
            var id = parameter.dataId;
            var ajaxdata = {};
            var user = $.getuuuAuth();
            ajaxdata.username = user._d;
            ajaxdata.password = user._p;
            ajaxdata.userType = 2;
            ajaxdata.type = 0;
            ajaxdata.istop = 1;
            jQuery.ajax({
                dataType: "json",
                url: webBasePath+'/activitys/'+id,
                data: ajaxdata,
                type: "POST",
                success: function (result) {
                    if (result.success) {
                        FOXKEEPER_UTILS.alert('success',result.message);
                        var strStatus= ["未置顶","置顶"];
                        $("#isTop").val(1)
                        $("#isTop").text(strStatus[1]);
                    }else{
                        FOXKEEPER_UTILS.alert('warning',result.message);
                        $this.html(buttonText).attr("disabled", false);
                    }
                }
            });
        });

        //通过
        $('#passBtn').on('click', function () {
            var parameter = $.getParameters();
            var id = parameter.dataId;
            var ajaxdata = {};
            var user = $.getuuuAuth();
            ajaxdata.username = user._d;
            ajaxdata.password = user._p;
            ajaxdata.userType = 2;
            ajaxdata.type =0;
            ajaxdata.status =1;//审核状态1-审核通过
            jQuery.ajax({
                dataType: "json",
                url: webBasePath+'/activitys/'+id,
                data: ajaxdata,
                type: "POST",
                success: function (result) {
                    if (result.success) {
                        FOXKEEPER_UTILS.alert('success',result.message);
                        $("#isNotPass").hide();
                        var strStatus= ["未审核","审核通过","审核不通过"];
                        $("#status").val(1)
                        $("#status").text(strStatus[1]);
                    }else
                    {
                        FOXKEEPER_UTILS.alert('warning',result.message);
                        $this.html(buttonText).attr("disabled", false);
                    }
                }
            });
        });
        //不通过
        $('#notPassBtn').on('click', function () {
            var parameter = $.getParameters();
            var id = parameter.dataId;
            var ajaxdata = {};
            var user = $.getuuuAuth();
            ajaxdata.username = user._d;
            ajaxdata.password = user._p;
            ajaxdata.userType = 2;
            ajaxdata.type =0;
            ajaxdata.status =2;//审核状态-审核未通过
            jQuery.ajax({
                dataType: "json",
                url: webBasePath+'/activitys/'+id,
                data: ajaxdata,
                type: "POST",
                success: function (result) {
                    if (result.success) {
                        FOXKEEPER_UTILS.alert('success',result.message);
                        $("#isNotPass").hide();
                        var strStatus= ["未审核","审核通过","审核未通过"];
                        $("#status").val(2)
                        $("#status").text(strStatus[2]);
                        // setTimeout(function(){
                        //     location.replace("/view/contentmanager/activity/activity/activityList.jsp");
                        // }, 1000);
                    }else
                    {
                        FOXKEEPER_UTILS.alert('warning',result.message);
                        $this.html(buttonText).attr("disabled", false);
                    }
                }
            });
        });



        //图片上传
        $('body').on('change', 'input[name$="_upload"]', function(e) {
            var _this = $(this);
            var fileName = $(this).val();
            if (!fileName.match('\\.(gif|png|jpe?g)$')) {
                FOXKEEPER_UTILS.alert('warning', '只能上传图片格式，如：gif,png,jpg,jpeg!');
                _this.val("");
                $('#' + _this.attr("mid")).attr("src", "/images/nopica.png");
                $('#' + _this.attr("uid")).val("");
                $("#imgBox").show();
                return false;
            }
            //图片大小判断
            var imgSize = document.getElementById("lcimage_upload").files[0].size;
            if(imgSize>1024*1000){
                FOXKEEPER_UTILS.alert('warning', '图片尺寸请小于1M');
                $("#lcimage_upload").val("");
                $("#imgBox").show();
                return false;
            }
            if (fileName != "") {
                return ajaxFileUpload(_this, _this.attr("id"), null);
            }
        });
    }
    function ajaxFileUpload($file, fileId, $processBar) {
        var user = $.getuuuAuth();
        var fileName = $file.val();
        var fileSuffix = fileName.substring(fileName.indexOf(".") + 1, fileName.length);
        var data = new FormData($("#formTimeLine")[0]);
        var formData = new FormData($form_edit[0]);
        formData.append("username", user._d);
        formData.append("password", user._p);
        formData.append("userType", "2");
        formData.append("fileext", fileSuffix);
        formData.append("filetype", "1");
        $.ajax({
            type: 'POST',
            url: webBasePath+'/uploadFileMultipart',
            dataType: 'json',
            cache: false,
            processData: false,    //需要正确设置此项
            contentType: false,
            enctype: 'multipart/form-data',    //需要正确设置此项
            data: formData,
            success: function (data) {
                if (data.success) {
                    var url = data.url;
                    $('#' + $file.attr("mid")).attr("src", url);
                    $('#' + $file.attr("uid")).val(url);
                    $("#imgBox").show();
                } else {
                    FOXKEEPER_UTILS.alert('warning', data.message);
                }
            },
            error: function (xhr, status, e) {
                FOXKEEPER_UTILS.alert('warning', '上传出错，请重试');
            }
        });
        return false;
    }

    //初始化加载
    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/activitys/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var activitys = result.activity ;
                    if(activitys){
                        var strStatus= ["未审核","审核通过","审核不通过"];
                        var statusInt = parseInt(activitys.status);
                        if(statusInt !=0){
                            $("#isNotPass").hide();
                        }
                        $("#dataId").val(activitys.id);
                        $("#title").val(activitys.title);
                        $("#content").text(activitys.content);
                        $("#name").text(activitys.name);
                        if(activitys.userType==1){
                            $("#announceUser").text(activitys.lawyer.name);
                        } if(activitys.userType==2){
                            $("#announceUser").text(activitys.manager.name);
                        }  if(activitys.userType==0){
                            $("#announceUser").text(activitys.member.name);
                        }

                        // $("#participantNumber").text(activitys.participantNumber);
                        $("#createdTime").text(activitys.createdTime);
                        $("#coverImage").attr("src",homePath+activitys.picture);
                        $("#praiseNumber").text(activitys.praiseNumber);
                        $("#replyNumber").text(activitys.replyNumber );
                        $("#summary").text(activitys.summary);
                        $("#updatedTime").text(activitys.updatedTime);
                        $("#isTop").val(activitys.isTop);
                        $("#isTop").text(activitys.isTop==false? "不置顶":"置顶");
                        $("#status").val(statusInt);
                        $("#status").text(strStatus[statusInt]);
                        $("#imgBox").show();
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    //封装ajax提交数据
    function _setQueryAjaxData () {
        var activitys = $.getuuuAuth();
        queryParam.username = activitys._d;
        queryParam.password = activitys._p;
        queryParam.userType = 2;
    }

    //保存
    function _ajax($this, buttonText, reUrl) {
        var formValid = $form_edit.validate().form();
        if (formValid) {
            _setAjaxData();
            jQuery.ajax({
                dataType: "json",
                url: reUrl,
                data: ajaxdata,
                type: "POST",
                success: function (result) {
                    if (result.success) {
                        FOXKEEPER_UTILS.alert('success',result.message);
                        setTimeout(function(){
                            location.replace("/view/contentmanager/activity/topic/topicList.jsp");
                        }, 1000);
                    }else
                    {
                        FOXKEEPER_UTILS.alert('warning',result.message);
                        $this.html(buttonText).attr("disabled", false);
                    }
                },
                beforeSend: function () {// 设置表单提交前方法    
                    $this.html('<i class=\"fa fa-spinner\"></i>&nbsp;正在' + buttonText).attr("disabled", "disabled");
                }
            });
        }

        return false;
    }

    function _setAjaxData () {
        var activitys = $.reqHomeUrl();
        ajaxdata.username = activitys._d;
        ajaxdata.password = activitys._p;
        ajaxdata.userType = 2;
        ajaxdata.type = 0;
        ajaxdata.title = $("#title").val();
        ajaxdata.content =$("#content").val();
        ajaxdata.announceUser =$("#announceUser").val();
        // ajaxdata.participantNumber =$("#participantNumber").val();
        ajaxdata.createdTime =$("#createdTime").val();
        // ajaxdata.praiseNumber =$("#praiseNumber").val();
        ajaxdata.replyNumber =$("#replyNumber").val();
        ajaxdata.updatedTime =$("#updatedTime").val();
        ajaxdata.isTop =$("#isTop").val();
        ajaxdata.status =$("#status").val();
        ajaxdata.picture = $("#coverUrl").val();
    }
});

jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            userName:{
                required:true,
            },
            userPassword:{
                required:true,
            },
            name:{
                required:true,
            },
            nickname:{
                required:true,
            },
            mobile:{
                required:true,
            },
            email:{
                required:true,
            },
            idcard:{
                required:true,
            }
        },
        messages:{
            commisionName:{
                required:"手机号或账户名不能为空"
            },
            userPassword:{
                required:"密码不能为空"
            },
            name:{
                required:"真实姓名不能为空"
            },
            nickname:{
                required:"昵称不能为空"
            },
            mobile:{
                required:"备用手机号码不能为空"
            },
            email:{
                required:"电子邮箱不能为空"
            },
            idcard:{
                required:"身份证号不能为空"
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
        _initProvince();
    }

    function _bind () {
        //保存
        $('#btnSave').on('click', function () {
            var id = $("#dataId").val();
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/lawyers/'+id);
        });
        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });
        $('#province').change('click', function () {
            _initProvinces($(this));
        });
        //图片上传
        $('body').on('change', 'input[name$="_upload"]', function(e) {
            var _this = $(this);
            var fileName = $(this).val();
            /*var $processBar = _this.parent().parent().prev('div');*/
            /*$processBar.removeClass('hide');*/
            if (!fileName.match('\\.(gif|png|jpe?g)$')) {
                FOXKEEPER_UTILS.alert('warning', '只能上传图片格式，如：gif,png,jpg,jpeg!');
                _this.val("");
                $('#' + _this.attr("mid")).attr("src", "/images/nopica.png");
                $('#' + _this.attr("uid")).val("");
                $("#imgBox").hide();
                /*$processBar.addClass('hide');*/
                return false;
            }
            //图片大小判断
            var imgSize = document.getElementById("lcimage_upload").files[0].size;
            if(imgSize>1024*1000){
                FOXKEEPER_UTILS.alert('warning', '图片尺寸请小于1M');
                $("#lcimage_upload").val("");
                $("#imgBox").hide();
                return false;
            }
            if (fileName != "") {
                return ajaxFileUpload(_this, _this.attr("id"), null);
            }
        });
    }
    //文件上传
    function ajaxFileUpload($file, fileId, $processBar) {
        var user = $.getuuuAuth();
        var fileName = $file.val();
        var fileSuffix = fileName.substring(fileName.indexOf(".") + 1, fileName.length);
        var data = new FormData($("#formTimeLine")[0]);
        var formData = new FormData($form_add[0]);
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
                FOXKEEPER_UTILS.alert('warning', '上传出错，请重试');l
            }
        });
        return false;
    }

    //加载编辑数据
    function _initData (id) {
        _initProvince();
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/lawyers/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var lawyer = result.lawyer;
                    if(lawyer){
                        $("#dataId").val(lawyer.id);
                        $("#userName").text(lawyer.userName);
                        $("#account").text(lawyer.account);
                        $("#userPassword").val(lawyer.password);
                        $("#name").val(lawyer.name);
                        $("#nickname").val(lawyer.nickname);
                        $("#idcard").val(lawyer.idcard);
                        $("#mobile").val(lawyer.mobile);
                        $("#email").val(lawyer.email);
                        $("#employmentTime").val(lawyer.employmentTime);
                        $("#lastLoginIp").val(lawyer.loginIP);
                        $("#registerTime").val(lawyer.createdTime);
                        $("#score").val(lawyer.score);

                        $("input[name='status'][value='"+lawyer.status+"']").attr("checked",true);
                        /*$("input[name='status']").val(user.status);*/
                        $("#coverImage").attr("src",homePath+lawyer.picture);
                        $("#coverUrl").val(homePath+lawyer.picture);
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    //封装ajax提交数据
    function _setQueryAjaxData () {
        var user = $.getuuuAuth();
        queryParam.username = user._d;
        queryParam.password = user._p;
        queryParam.userType = 2;
    }

    function _ajax($this, buttonText, reUrl) {
        var formValid = $form_edit.validate().form();
        if (formValid) {
            _setAjaxData();
            if (_verifyAjaxData()) {
                jQuery.ajax({
                    dataType: "json",
                    url: reUrl,
                    data: ajaxdata,
                    type: "POST",
                    success: function (result) {
                        if (result.success) {
                            FOXKEEPER_UTILS.alert('success',result.message);
                            setTimeout(function(){

                                location.replace("/view/custome/lawyer/lawyer/lawyerManagementList.jsp");
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

            }  else {
                return false;
            }
        }
        return false;
    }

    function _setAjaxData () {
        var user = $.reqHomeUrl();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.userName = $("#userName").val();
        ajaxdata.userPassword = $("#userPassword").val();
        ajaxdata.name = $("#name").val();
        ajaxdata.licenseid = $("#licenseid").val();
        ajaxdata.idcard = $("#idcard").val();
        ajaxdata.picture = $("#coverUrl").val();
        ajaxdata.mobile = $("#mobile").val();
        ajaxdata.email = $("#email").val();
        ajaxdata.status = $("input[name='status']:checked").val();
        ajaxdata.company = $("#company").val();
        ajaxdata.province = $("#province").val();
        ajaxdata.city = $("#city").val();
        ajaxdata.employmentTime = $("#employmentTime").val();
        ajaxdata.account = $("#account").val();
        ajaxdata.level = $("#level").val();

    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        if (!ajaxdata.picture) {
            FOXKEEPER_UTILS.alert('warning', '请上传律师头像');
            return false;
        }
        return true;
    }
    /** 加载省份信息*/
    function _initProvince(){
        var queryInfoData = {};
        var user = $.getuuuAuth();
        queryInfoData.username = user._d;
        queryInfoData.password = user._p;
        queryInfoData.userType = 2;
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/provinces',
            data: queryInfoData,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    if (result.provinces != null && result.provinces.length > 0) {
                        var data = result.provinces;
                        $("#province").find("option:not(:first)").remove();
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            $("#province").append('<option value="'+dataId+'">'+obj.name+'</option>');
                        }
                    }

                }
            }
        });
    }
    /** 加载省份对应的市信息*/
    function _initProvinces(ele){
        var queryInfoData = {};
        var user = $.getuuuAuth();
        queryInfoData.username = user._d;
        queryInfoData.password = user._p;
        queryInfoData.userType = 2;
        queryInfoData.provinceId  = ele.val();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/citys',
            data: queryInfoData,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    if (result.citys != null && result.citys.length > 0) {
                        var data = result.citys;
                        $("#city").find("option:not(:first)").remove();
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            /* $("#province").append('<option value="'+dataId+'">'+obj.name+'</option>');*/
                            $("#city").append('<option value="'+dataId+'">'+obj.name+'</option>');
                        }
                    }

                }
            }
        });
    }

});

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

    //富文本
    var ue = new baidu.editor.ui.Editor({ initialFrameHeight:260 });

    function _init(){
        _initInfoTypes();
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
            _ajax($this, '保存',webBasePath+'/discoverys/'+id);
        });

        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });

        $(document).ready(function(){
            $("#isDocument_1,#isDocument_0").click(function(){
                var val=$('input:radio[name="isDocument"]:checked').val();
                if(val==false){
                    $("#documentDiv").hide();
                    $("#addressDiv").hide();
                }else{
                    $("#documentDiv").show();
                    $("#addressDiv").show();
                }
            });
            $("#yes,#no").click(function(){
                var val=$('input:radio[name="toPage"]:checked').val();
                if(val==false){
                    $("#urlDiv").hide();
                }else{
                    $("#urlDiv").show();
                }
            });

        });

        //图片上传
        $('body').on('change', 'input[name$="_upload"]', function() {
            var _this = $(this);
            var fileName = $(this).val();
            if (!fileName.match('\\.(doc|docx|xls|xlsx、pdf)$')) {
                FOXKEEPER_UTILS.alert('warning', '只能上传图片格式，如：doc、docx、xls、xlsx、pdf!');
                _this.val("");
                $('#' + _this.attr("mid")).attr("src", "/images/nopica.png");
                $('#' + _this.attr("uid")).val("");
                $("#imgBox").hide();

                return false;
            }

            //文件大小判断
            var imgSize = document.getElementById("lcimage_upload").files[0].size;
            if(imgSize>1024*20000){
                FOXKEEPER_UTILS.alert('warning', '图片尺寸请小于2M');
                $("#lcimage_upload").val("");
                $("#imgBox").show();
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
        var formData = new FormData($form_edit[0]);
        formData.append("username", user._d);
        formData.append("password", user._p);
        formData.append("userType", "2");
        formData.append("fileext", fileSuffix);
        formData.append("filetype", "3");
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

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/discoverys/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var discoverys = result.discovery;
                    if(discoverys){
                        $("#dataId").val(discoverys.id);
                        $("#title").val(discoverys.title);
                        $("#summary").val(discoverys.summary);
                        // $("#type").val(discoverys.type);
                        $("#infoType").val(discoverys.id).attr("checked",true);
                        // $("isDocument").val(discoverys.isDocument).attr("checked",true);
                        $("input[name='isDocument'][value='"+discoverys.isDocument+"']").attr("checked",true);
                        if(discoverys.isDocument==false){
                            $("#documentDiv").hide();
                            $("#addressDiv").hide();
                        }else{
                            $("#documentDiv").show();
                            $("#addressDiv").show();
                        }
                        $("#documentType").val(discoverys.documentType);
                        $("input[name='toPage'][value='"+discoverys.toPage+"']").attr("checked",true);
                        if(discoverys.toPage==false){
                            $("#urlDiv").hide();
                        }else{
                            $("#urlDiv").show();
                        }
                        $("#documentUrl").val(discoverys.documentUrl);
                        $("#fileName").text(discoverys.documentUrl);
                        $("#pageUrl").val(discoverys.pageUrl);
                        $("#content").val(discoverys.content);

                        ue.render("editor");
                        var ueContentHtml = discoverys.content;
                        ue.addListener("ready", function () {
                            ue.setContent(ueContentHtml, false);
                        });
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    //封装ajax提交数据
    function _setQueryAjaxData () {
        var professionalField = $.getuuuAuth();
        queryParam.username = professionalField._d;
        queryParam.password = professionalField._p;
        queryParam.userType = 2;
    }

    //保存
    function _ajax($this, buttonText, reUrl) {
        var formValid = $form_edit.validate().form();
        if (formValid) {
            if (_verifyAjaxData()) {
                _setAjaxData();
                jQuery.ajax({
                    dataType: "json",
                    url: reUrl,
                    data: ajaxdata,
                    type: "POST",
                    success: function (result) {
                        if (result.success) {
                            FOXKEEPER_UTILS.alert('success', result.message);
                            setTimeout(function () {
                                location.replace("/view/contentmanager/repository/discovery/discoveryList.jsp");
                            }, 1000);
                        } else {
                            FOXKEEPER_UTILS.alert('warning', result.message);
                            $this.html(buttonText).attr("disabled", false);
                        }
                    },
                    beforeSend: function () {// 设置表单提交前方法    
                        $this.html('<i class=\"fa fa-spinner\"></i>&nbsp;正在' + buttonText).attr("disabled", "disabled");
                    }
                });
            }
        }
        return false;
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        var type = $("#infoType").val();
        if (!type) {
            FOXKEEPER_UTILS.alert('warning', '请选择分类');
            return false;
        }
        return true;
    }
    //分类ID
    function _initInfoTypes(){
        var queryInfoData = {};
        var user = $.getuuuAuth();
        queryInfoData.username = user._d;
        queryInfoData.password = user._p;
        queryInfoData.userType = 2;
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/discoveryTypes',
            data: queryInfoData,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    if (result.discoveryTypes != null && result.discoveryTypes.length > 0) {
                        var data = result.discoveryTypes;
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            $("#infoType").append('<option value="'+dataId+'">'+obj.name+'</option>');
                        }
                    }
                }
            }
        });
    }
    function _setAjaxData () {
        var user = $.reqHomeUrl();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.id = $("#dataId").val();
        ajaxdata.title = $("#title").val();
        ajaxdata.type = $("#infoType").val();
        ajaxdata.documentUrl = $("#coverUrl").val();
        ajaxdata.pageUrl =$("#pageUrl").val();
        ajaxdata.summary = $("#summary").val();
        ajaxdata.content = ue.getContent();
        ajaxdata.documentType = $("#documentType").val();
        ajaxdata.isDocument = $("input[name='isDocument']:checked").val();
        ajaxdata.toPage = $("input[name='status']:checked").val();

    }
});

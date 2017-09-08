jQuery(function(){
    'use strict';
    var $form_add = $('#form_add');
    var ajaxdata = {};
    $form_add.validate({
        rules:{
            commisionName:{
                required:true,
            },
            commisionClient:{
                required:true,
            },
            contactPhone:{
                required:true,
            },
            caseAmount:{
                required:true,
            },
            agencyFee:{
                required:true,
            }
        },
        messages:{
            commisionName:{
                required:"委托名称不能为空"
            },
            commisionClient:{
                required:"联系人不能为空"
            },
            contactPhone:{
                required:"联系方式不能为空"
            },
            caseAmount:{
                required:"案件标的不能为空"
            },
            agencyFee:{
                required:"代理费用不能为空"
            }
        }
    });

    //富文本
    var ue = new baidu.editor.ui.Editor({ initialFrameHeight:260 });
    ue.render("editor");

    _init();

    _bind();

    _render();

    /** 渲染 **/
    function _render() {

    }

    /** 初始化 **/
    function _init(){

    }

    /** 绑定事件 **/
    function _bind() {
        //保存
        $('#btnSave').on('click', function () {
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/entrusts',0);
        });
        //保存
        $('#btnSaveAndPub').on('click', function () {
            var $this = $(this);
            _ajax($this, '发布',webBasePath+'/entrusts',1);
        });
        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });
        function _ajax($this, buttonText, reUrl,s) {
            var formValid = $form_add.validate().form();
            if (formValid) {
                _setAjaxData(s);
                if (_verifyAjaxData()) {
                    jQuery.ajax({
                        dataType: "json",
                        url: reUrl,
                        data: ajaxdata,
                        type: "POST",
                        success: function (result) {
                            var recUrl,data = result.entrust;
                            if (result.success) {
                                FOXKEEPER_UTILS.alert('success',result.message);
                                if(data.type == 0){
                                    recUrl = "/view/legalcase/publish/caseEntrustList.jsp";
                                }else if(data.type == 1){
                                    recUrl = "/view/legalcase/publish/docEntrustList.jsp";
                                }
                                setTimeout(function(){
                                    location.replace(recUrl);
                                }, 1000);
                            }
                            else
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
            if(imgSize>1024*100){
                FOXKEEPER_UTILS.alert('warning', '图片尺寸请小于100k');
                $("#lcimage_upload").val("");
                $("#imgBox").hide();
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

    function _setAjaxData (s) {
        var user = $.reqHomeUrl();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.commisionName = $("#commisionName").val();
        ajaxdata.commisionClient = $("#commisionClient").val();
        ajaxdata.contactPhone = $("#contactPhone").val();
        ajaxdata.caseAmount = $("#caseAmount").val();
        ajaxdata.agencyFee = $("#agencyFee").val();
        ajaxdata.casePicture = $("#coverUrl").val();
        ajaxdata.type = $("#type").val();
        ajaxdata.isPlatform = true;
        ajaxdata.status = s;
        ajaxdata.caseDetail = ue.getContent();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        if (!ajaxdata.casePicture) {
            FOXKEEPER_UTILS.alert('warning', '请上传图片');
            return false;
        }
        if (!ajaxdata.caseDetail) {
            FOXKEEPER_UTILS.alert('warning', '请填写需求详情');
            return false;
        }
        return true;
    }
});

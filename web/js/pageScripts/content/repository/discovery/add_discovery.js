jQuery(function(){
    'use strict';
    var $form_add = $('#form_add');
    var ajaxdata = {};
    $form_add.validate({
        rules:{
          title:{
                required:true,
            },
            content:{
                required:true,
            },
            summary:{
                required:true,
            },
            isDisplay:{
                required:true,
            }
        },
        messages:{
            title:{
                required:"标题不能为空"
            },
            content:{
                required:"内容不能为空"
            },
            summary:{
                required:"摘要不能为空"
            }
        }
    });

    _init();

    _bind();

    _render();

    //富文本
    var ue = new baidu.editor.ui.Editor({ initialFrameHeight:260 });
    ue.render("editor");
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
            _ajax($this, '保存',webBasePath+'/discoverys');
        });
        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });
        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
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

    function _ajax($this, buttonText, reUrl) {
        var formValid = $form_add.validate().form();
        if (formValid) {
            _setAjaxData();
                jQuery.ajax({
                    dataType: "json",
                    url: reUrl,
                    data: ajaxdata,
                    type: "POST",
                    success: function (result) {
                        var recUrl,data = result.discoverys;
                        if (result.success) {
                            FOXKEEPER_UTILS.alert('success',result.message);
                            setTimeout(function(){
                                location.replace("/view/contentmanager/repository/discovery/discoveryList.jsp");
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
        }
    }

    function _setAjaxData () {
        var user = $.reqHomeUrl();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;

        ajaxdata.title = $("#title").val();
        ajaxdata.type = $("#type").val();
        ajaxdata.documentUrl = $("#coverUrl").val();
        ajaxdata.pageUrl =$("#pageUrl").val();
        ajaxdata.summary = $("#summary").val();
        ajaxdata.content = ue.getContent();
        ajaxdata.documentType = $("#documentType").val();
        ajaxdata.isDocument = $("input[name='isDocument']:checked").val();
        ajaxdata.toPage = $("input[name='status']:checked").val();

    }
});

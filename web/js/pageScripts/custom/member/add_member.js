jQuery(function(){
    'use strict';
    var $form_add = $('#form_add');
    var ajaxdata = {};
    $form_add.validate({
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
            _ajax($this, '保存',webBasePath+'/users');
        });
        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
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

    function _ajax($this, buttonText, reUrl) {
        var formValid = $form_add.validate().form();
        if (formValid) {
            _setAjaxData();
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
                            setTimeout(function(){

                                location.replace("/view/customercenter/membermanagement/member/memberList.jsp");
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

    function _setAjaxData (s) {
        var user = $.reqHomeUrl();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.userName = $("#userName").val();
        ajaxdata.userPassword = hex_md5($("#userPassword").val());
        ajaxdata.name = $("#name").val();
        ajaxdata.nickname = $("#nickname").val();
        ajaxdata.idcard = $("#idcard").val();
        ajaxdata.picture = $("#coverUrl").val();
        ajaxdata.mobile = $("#mobile").val();
        ajaxdata.email = $("#email").val();
        ajaxdata.status = $("input[name='status']:checked").val();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        if (!ajaxdata.picture) {
            FOXKEEPER_UTILS.alert('warning', '请上传会员头像');
            return false;
        }
        return true;
    }
});

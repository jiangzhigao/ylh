jQuery(function(){
'use strict';
  var $form_users_signin = $('#form_users_signin');
    var ajaxdata = {};
    $form_users_signin.validate({
        debug:false, //调试模式，即使验证成功也不会跳转到目标页面
        onkeyup:null, //当丢失焦点时才触发验证请求
        rules:{     //配置验证规则，key就是被验证的dom对象，value就是调用验证的方法(也是json格式)
            username:{
                required:true,  //必填。如果验证方法不需要参数，则配置为true
                rangelength:[4,12]
            },
            password:{
                required:true,
                rangelength:[3,12]
            },
            captcha:{
                required:true,
                inputCaptcha:true
            }
        },
        messages:{
            username:{
                required:"请输入用户名",
                rangelength:$.validator.format("用户名长度在必须为：{0}-{1}之间")
            },
            password:{
                required:"请输入密码",
                rangelength:$.validator.format("密码必须为：{0}-{1}之间")
            },
            captcha:{
                required:"验证码错误"
            }
        }
    });

    $form_users_signin.submit(function () {
        var _this = $(this);
        var formValid = _this.validate().form();
        if (formValid) {
            _setAjaxData();
            /*window.location.href="/main.jsp";
        	return;*/
            jQuery.ajax({
                dataType: "json",
                url: webBasePath + "/login",
                data: ajaxdata,
                type: "POST",
                success: function (data) {
                    if (data.success) {
                        $.setUuuAuth(ajaxdata.username,ajaxdata.password);
                        /*var user = $.getuuuAuth();
                        alert(user._d);
                        alert(user._p);
                        alert(user.time);*/
                    	FOXKEEPER_UTILS.alert('success',data.message);
                    	setTimeout(function(){
                            location.replace('/main.jsp');
                        }, 1000);
                    }
                    else
                    {
                    	FOXKEEPER_UTILS.alert('warning',data.message);
                    }
                },
                beforeSend: function () {// 设置表单提交前方法    
                    _this.find(".form_submit_handle").html('<i class=\"fa fa-spinner\"></i>&nbsp;正在登录').attr("disabled", "disabled");
                },
                complete: function () { // 设置表单提交后方法   
                    _this.find(".form_submit_handle").html('登录').removeAttr("disabled");
                }
            });
            return false;
        }
        return false;
    });

    function _setAjaxData () {
        ajaxdata.username = $("#username").val().trim();
        ajaxdata.password = $("#password").val().trim();
        ajaxdata.loginIP = clientIp;
        ajaxdata.userType = 2;
    }

});

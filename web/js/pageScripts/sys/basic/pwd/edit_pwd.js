jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            loginName:{
                required:true,
            },
            oldPwd:{

                required:true,
            },
            newPwd:{
                required:true,
            },
            confirmAgainPwd:{
                required:true,
            }
        },
        messages:{
            loginName:{
                required:"登陆名不能为空"
            },
            oldPwd:{
                required:"原密码不能为空"
            },
            newPwd:{
                required:"新密码不能为空"
            },
            confirmAgainPwd:{
                required:"再次输入新密码不能为空"
            }
        }
    });

    //渲染
    _init();
    //绑定
    _bind();
    //初始化
    function _init(){
        //初始化列表
        var managers = $.getuuuAuth();
        $("#loginName").val(managers._d);
        // queryParam.username = managers._d;
        // _initData();
    }

    //绑定事件
    function _bind () {
        //保存
        $('#btnSave').on('click', function () {
            // var parameter = $.getParameters();
            // var id = parameter.dataId;
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/managers/updatePassword');
        });

        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });
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
                            // setTimeout(function(){
                            //     location.replace("/view/contentmanager/help/helpList.jsp ");
                            // }, 1000);
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
        var managers = $.reqHomeUrl();
        ajaxdata.username = managers._d;
        ajaxdata.password = managers._p;
        ajaxdata.userType = 2;
        ajaxdata.oldPassword = $("#oldPwd").val();
        ajaxdata.newPassword = $("#newPwd").val();
    }
});

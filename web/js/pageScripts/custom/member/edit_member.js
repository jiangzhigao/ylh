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
    }

    function _bind () {
        //保存
        $('#btnSave').on('click', function () {
            var id = $("#dataId").val();
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/users/'+id);
        });

        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });
    }

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/users/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var user = result.user;
                    if(user){
                        $("#dataId").val(user.id);
                        $("#userName").text(user.userName);
                        $("#userPassword").val(user.userPassword);
                        $("#name").text(user.name);
                        $("#nickname").val(user.nickname);
                        $("#idcard").val(user.idcard);
                        $("#mobile").val(user.mobile);
                        $("#email").val(user.email);
                        $("#lastLoginTime").text(user.lastLoginTime);
                        $("#lastLoginIp").text(user.loginIP);
                        $("#registerTime").text(user.createdTime);
                        $("#score").val(user.score);
                        $("#lawUserName").val(user.userName);
                        /*$("#lawPwd").val(user.password);*/
                        $("input[name='status'][value='"+user.status+"']").attr("checked",true);
                        /*$("input[name='status']").val(user.status);*/
                        $("#coverImage").attr("src",homePath+user.picture);
                        $("#coverUrl").val(homePath+user.picture);
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

    function _setAjaxData () {
        var user = $.reqHomeUrl();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.id = $("#dataId").val();
        ajaxdata.userName = $("#userName").val();
        var newPWd = $("#loadNewPwd").val();
        if(newPWd){
            ajaxdata.userPassword = hex_md5(newPWd);
        }else{
            ajaxdata.userPassword = '';
        }
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

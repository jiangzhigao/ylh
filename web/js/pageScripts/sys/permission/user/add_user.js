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
            reuserPassword:{
                required:true,
            },
            name:{
                required:true,
            }
        },
        messages:{
            userName:{
                required:"请输入用户名"
            },
            userPassword:{
                required:"请输入密码"
            },
            reuserPassword:{
                required:"请确认密码"
            },
            name:{
                required:"请输入用户真实姓名"
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
        _getUserGroups();
    }

    /** 绑定事件 **/
    function _bind() {
        //保存
        $('#btnSave').on('click', function () {
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/managers');
        });

    }

    function _getUserGroups(){
        var queryData = {};
        var user = $.reqHomeUrl();
        queryData.username = user._d;
        queryData.password = user._p;
        queryData.userType = 2;
        jQuery.ajax({
            dataType: "json",
            url: webBasePath+'/userGroups',
            data: queryData,
            type: "GET",
            success: function (result) {
                var recUrl,data = result.userGroups;
                if (result.success) {
                    for (var i = 0; i < data.length; i++) {
                        var obj = data[i];
                        $("#userGroupId").append('<option value="'+obj.id+'">'+obj.name+'</option>');
                    }
                }
            }
        });
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
                        if (result.success) {
                            FOXKEEPER_UTILS.alert('success',result.message);
                            setTimeout(function(){
                                location.replace("/view/sys/permission/user/userList.jsp");
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
    }

    function _setAjaxData () {
        var user = $.reqHomeUrl();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.userName = $("#userName").val();
        ajaxdata.userPassword = hex_md5($("#userPassword").val());
        ajaxdata.name = $("#name").val();
        ajaxdata.userGroupId = $("#userGroupId").val();
        ajaxdata.status = $("input[name='status']:checked").val();
        ajaxdata.memo = $("#memo").val();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        var reInputPwd = $("#reuserPassword").val();
        var userPwd = $("#userPassword").val()
        if (userPwd != reInputPwd) {
            FOXKEEPER_UTILS.alert('warning', '输入确认密码不一致');
            return false;
        }
        return true;
    }

});

jQuery(function(){
    'use strict';
    var $form_add = $('#form_edit');
    var ajaxdata = {},queryParam = {};
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
        //初始化列表
        var parameter = $.getParameters();
        var id = parameter.dataId;
        if(id){
            _initData(id);
        }
    }

    /** 绑定事件 **/
    function _bind() {
        //保存
        $('#btnSave').on('click', function () {
            var $this = $(this);
            var id = $("#dataId").val();
            _ajax($this, '保存',webBasePath+'/managers/'+id);
        });

    }

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/managers/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var user = result.manager;
                    if(user){
                        $("#dataId").val(user.id);
                        $("#userName1").val(user.userName);
                        $("#userPassword1").val(user.password);
                        $("#reuserPassword1").val("");
                        $("#name").val(user.name);
                        $("#userGroupId").val(user.userGroupId);
                        $("#memo").val(user.memo);
                        $("input[name='status'][value='"+user.status+"']").attr("checked",true);
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
                $("#userGroupId").find('option').remove();
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
        ajaxdata.userName = $("#userName1").val();
        ajaxdata.userPassword = $("#userPassword1").val();
        ajaxdata.name = $("#name").val();
        ajaxdata.userGroupId = $("#userGroupId").val();
        ajaxdata.status = $("input[name='status']:checked").val();
        ajaxdata.memo = $("#memo").val();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        var reInputPwd = $("#reuserPassword1").val();
        if (ajaxdata.userPassword != reInputPwd) {
            FOXKEEPER_UTILS.alert('warning', '输入确认密码不一致');
            return false;
        }
        return true;
    }

});

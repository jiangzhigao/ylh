jQuery(function(){
    'use strict';
    var $form_add = $('#form_edit');
    var ajaxdata = {},queryParam = {};
    $form_add.validate({
        rules:{
            name:{
                required:true,
            },
            sortNo:{
                required:true,
            }
        },
        messages:{
            name:{
                required:"请输入用户组"
            },
            sortNo:{
                required:"请输入排序号"
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
            _ajax($this, '保存',webBasePath+'/userGroups/'+id);
        });

    }

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/userGroups/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var userGroup = result.userGroup;
                    if(userGroup){
                        $("#dataId").val(userGroup.id);
                        $("#name").val(userGroup.name);
                        $("#sortNo").val(userGroup.sortNo);
                        $("#description").val(userGroup.description);
                        var menus = userGroup.menus
                        if(menus){
                            $._initFirstMenu(menus);
                        }
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
                                location.replace("/view/sys/permission/role/roleList.jsp");
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
        ajaxdata.name = $("#name").val();
        ajaxdata.description = $("#description").val();
        ajaxdata.privilege = $.getCheckedMenuNodes();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        return true;
    }

});

jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            type:{
                required:true,
            },
            duration:{
                required:true,
            },
            fee:{
                required:true,
            },
            sortNo:{
                required:true,
            }
        },
        messages:{
            type:{
                required:"请选择服务类型"
            },
            duration:{
                required:"服务时长不能为空"
            },
            fee:{
                required:"费用不能为空"
            },
            sortNo:{
                required:"排序号不能为空"
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
            _ajax($this, '保存',webBasePath+'/serviceTypes/'+id);
        });

        //返回
        /*$('#btnBack').on('click', function () {
            window.history.back();
        });*/
        /** 删除 */
        $('#btnDel').on('click', function () {
            var id = $("#dataId").val();
            _delete(id);
        });
    }

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/serviceTypes/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var serviceType = result.serviceType;
                    if(serviceType){
                        $("#dataId").val(serviceType.id);
                        $("#type").val(serviceType.type);
                        $("#duration").val(serviceType.duration);
                        $("#fee").val(serviceType.fee);
                        $("#sortNo").val(serviceType.sortNo);
                        $("#publishTime").text(serviceType.createdTime);
                        $("#updateTime").text(serviceType.updatedTime);
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
                                location.replace("/view/business/product/serviceClzList_.jsp");
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
        ajaxdata.type = $("#type").val();
        ajaxdata.duration = $("#duration").val();
        ajaxdata.sortNo = $("#sortNo").val();
        ajaxdata.fee = $("#fee").val();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        return true;
    }


    function _delete(id) {
        var delData = {};
        var user = $.reqHomeUrl();
        delData.username = user._d;
        delData.password = user._p;
        delData.userType = 2;
        delData.id = id;
        delData.status = 0;
        bootbox.dialog({
            title: "",
            message: '<div class="row">  ' +
            '<div class="col-xs-12"> ' +
            '请确认是否删除该服务分类？' +
            '</div></div>',
            buttons: {
                cancel: {
                    label: "取消操作",
                    className: "btn-cancel",
                    callback: $.noop
                },
                confirm: {
                    label: "确定删除",
                    className: "btn-info",
                    callback: function () {
                        jQuery.ajax({
                            dataType: "json",
                            url: webBasePath+'/serviceTypes/'+id,
                            data: delData,
                            type: "POST",
                            success: function (result) {
                                if (result.success) {
                                    FOXKEEPER_UTILS.alert('success', result.message);
                                    setTimeout(function(){
                                        location.replace("/view/business/product/serviceClzList_.jsp");
                                    }, 500);
                                }
                                else
                                {
                                    FOXKEEPER_UTILS.alert('warning', result.message);
                                }
                            }
                        });
                        return true;
                    }
                }
            }
        })
    }

});

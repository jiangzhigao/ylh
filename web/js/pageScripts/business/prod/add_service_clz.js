jQuery(function(){
    'use strict';
    var $form_add = $('#form_add');
    var ajaxdata = {};
    $form_add.validate({
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
            _ajax($this, '保存',webBasePath+'/serviceTypes');
        });
        //返回
        /*$('#btnBack').on('click', function () {
            window.history.back();
        });*/
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
        ajaxdata.type = $("#type").val();
        ajaxdata.sortNo = $("#sortNo").val();
        ajaxdata.fee = $("#fee").val();
        ajaxdata.duration = $("#duration").val();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        return true;
    }
});

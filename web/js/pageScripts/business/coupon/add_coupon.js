jQuery(function(){
    'use strict';
    var $form_add = $('#form_add');
    var ajaxdata = {};
    $form_add.validate({
        rules:{
            title:{
                required:true,
            },
            amount:{
                required:true,
            },
            startTime:{
                required:true,
            },
            endTime:{
                required:true,
            }
        },
        messages:{
            title:{
                required:"请输入抵用券标题"
            },
            amount:{
                required:"请输入抵用券面额"
            },
            startTime:{
                required:"请输入抵用券有效开始时间"
            },
            endTime:{
                required:"请输入抵用券有效截止时间"
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
            _ajax($this, '保存',webBasePath+'/vouchers');
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
                                location.replace("/view/business/coupon/couponList_.jsp");
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
        ajaxdata.title = $("#title").val();
        ajaxdata.amount = $("#amount").val();
        ajaxdata.startTime = $("#startTime").val();
        ajaxdata.endTime = $("#endTime").val();
        ajaxdata.status = $("input[name='status']:checked").val();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        return true;
    }
});

jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
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
            _ajax($this, '保存',webBasePath+'/vouchers/'+id);
        });

        //返回
        /*$('#btnBack').on('click', function () {
            window.history.back();
        });*/
    }

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/vouchers/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var voucher = result.voucher;
                    if(voucher){
                        $("#dataId").val(voucher.id);
                        $("#title").val(voucher.title);
                        $("#amount").val(voucher.amount);
                        $("#startTime").val(voucher.startTime);
                        $("#endTime").val(voucher.endTime);
                        $("input[name='status'][value='"+voucher.status+"']").attr("checked",true);
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

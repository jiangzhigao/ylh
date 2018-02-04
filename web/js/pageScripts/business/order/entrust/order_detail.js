jQuery(function(){
    'use strict';

    var queryParam = {},ajaxdata = {};

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
        /** 2.5:7.5分红  */
        $('#btn25').click(function () {
            var $this = $(this);
            var parameter = $.getParameters();
            var id = parameter.dataId;
            if(id){
                _bonus(id,$this,"2.5 : 7.5分红?",25);
            }
        });
        /** 3.5:6.5分红  */
        $('#btn35').click(function () {
            var $this = $(this);
            var parameter = $.getParameters();
            var id = parameter.dataId;
            if(id){
                _bonus(id,$this,"3.5 : 6.5分红?",35);
            }
        });
        /** 10:0分红  */
        $('#btn100').click(function () {
            var $this = $(this);
            var parameter = $.getParameters();
            var id = parameter.dataId;
            if(id){
                _bonus(id,$this,"10 : 0分红?",100);
            }
        });
    }

    function _initData (id) {
        _setQueryData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/orders/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var order = result.order;
                    var orderArray = ['未支付','已支付','已分红','已退款','已取消'];
                    var payArray = ['支付宝', '微信', '现金'];
                    var reserveArray = ['未沟通', '已沟通', '已完成'];
                    if(order){
                        var payType = parseInt(order.payType);
                        var statusInt = parseInt(order.orderStatus);
                        var typeInt = parseInt(order.type);
                        var reserveStatus = parseInt(order.reserveStatus);
                        var ff = 0 == typeInt?"月":"小时";
                        $("#dataId").text(order.id);
                        $("#orderNo").text(order.orderNo);
                        $("#clientPhone").text((order.user==null?"":order.user.userName));
                        $("#entrustLawyerName").text(order.lawyerName);
                        $("#duration").text(order.duration+ff);
                        $("#reservLawName").text(order.lawyer.name);
                        $("#orderAmount").text($.moneyToDecimal(order.totalAmount));
                        $("#payType").text(payArray[payType]);
                        $("#discountAmount").text(order.discountAmount);
                        $("#payAmount").text($.moneyToDecimal(order.payAmount));
                        $("#payTime").text(order.payTime);
                        $("#orderTime").text(order.orderTime);
                        $("#orderStatus").text(orderArray[statusInt]);

                        $("#orderTime").text(order.orderTime);

                        if(statusInt == 1){
                            $("#optionsBtn").show();
                        }
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    /**
     * 分红操作
     * @param id
     * @private
     */
    function _bonus(id,$this,eleTxt,percentage) {
        var delData = {};
        var user = $.reqHomeUrl();
        delData.username = user._d;
        delData.password = user._p;
        delData.userType = 2;
        delData.id = id;
        delData.bonus = percentage;
        bootbox.dialog({
            title: "",
            message: '<div class="row">  ' +
            '<div class="col-xs-12"> ' +
            '请确认是否按'+ eleTxt +
            '</div></div>',
            buttons: {
                cancel: {
                    label: "取消操作",
                    className: "btn-cancel",
                    callback: $.noop
                },
                confirm: {
                    label: "确定分红",
                    className: "btn-success",
                    callback: function () {
                        jQuery.ajax({
                            dataType: "json",
                            url: webBasePath+'/orders/'+id,
                            data: delData,
                            type: "POST",
                            success: function (result) {
                                if (result.success) {
                                    FOXKEEPER_UTILS.alert('success', result.message);
                                    setTimeout(function(){
                                        location.replace("/view/business/order/entrust/entrustOrderList.jsp");
                                    }, 1000);
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

    //封装ajax提交数据
    function _setQueryData () {
        var user = $.getuuuAuth();
        queryParam.username = user._d;
        queryParam.password = user._p;
        queryParam.userType = 2;
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {return true;}

});

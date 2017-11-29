jQuery(function(){
    'use strict';

    var ajaxdata = {},queryParams = {};;

    _init();

    _bind();

    _render();

    /** 渲染 **/
    function _render() {}

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
    function _bind() {}

    function _initData (id) {
        _setQueryData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/withdrawals/'+id,
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var data = result.withdrawal;
                    if(data){
                        var statusInt = parseInt(data.status);
                        var auditStatusInt = parseInt(data.auditStatus);
                        $("#withdrawalsNo").text(data.withdrawalsNo);
                        $("#lawyerName").text(data.lawyerName);
                        $("#lawyerMobile").text(data.lawyerMobile);
                        $("#withdrawalsTime").text(data.withdrawalsTime);
                        $("#amount").text(data.amount);
                        $("#cardholder").text(data.cardholder);
                        $("#bankAccount").text(data.bankAccount);
                        $("#bankAddress").text(data.bankAddress);
                        statusInt = statusInt == 0?"未提现":"已提现";
                        auditStatusInt = auditStatusInt == 0?"未通过":"通过";
                        $("#status").text(statusInt);
                        $("#auditStatus").text(auditStatusInt);
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', "系统出错");
                }
            }
        });
    }

    //封装查询条件
    function _setQueryData () {
        var user = $.getuuuAuth();
        queryParams.username = user._d;
        queryParams.password = user._p;
        queryParams.userType = 2;
    }
});

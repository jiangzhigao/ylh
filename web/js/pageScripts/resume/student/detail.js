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
        /** 退款  */
        $('#btnRefund').click(function () {
            var $this = $(this);
            var parameter = $.getParameters();
            var id = parameter.dataId;
            if(id){
                _excRefund(id,$this,"退款?");
            }
        });
    }

    function _initData (id) {
        _setQueryData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/resume/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var resume = result.resume;
                    var statusArray = ['未审核','审核通过','审核驳回'];
                    if(resume){
                        var statusInt = parseInt(resume.status);
                        $("#dataId").text(resume.id);
                        $("#school").text(resume.school);
                        $("#major").text(resume.major);
                        $("#contact").text(resume.contact);
                        $("#graduateTime").text(resume.graduateTime);
                        $("#birthday").text(resume.birthday);
                        $("#speciality").val(resume.speciality);
                        $("#status").text(statusArray[statusInt]);
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }


    function _buildOrderUrl(id,type){
        var bizUrl;
        type = parseInt(type);
        if(type == 0){
            bizUrl = "/view/business/order/service/serviceOrderDetail.jsp?dataId="+id;
        }else if(type == 1){
            bizUrl = "/view/business/order/reservation/orderDetail.jsp?dataId="+id;
        }else if(type == 2){
            bizUrl = "/view/business/order/entrust/entrustOrderDetail.jsp?dataId="+id;
        }
        return bizUrl;
    }

    /**
     * 退款
     * @param id
     * @private
     */
    function _excRefund(id,$this,eleTxt) {
        var delData = {};
        var user = $.reqHomeUrl();
        delData.username = user._d;
        delData.password = user._p;
        delData.userType = 2;
        delData.id = id;
        delData.status = 3;
        bootbox.dialog({
            title: "",
            message: '<div class="row">  ' +
            '<div class="col-xs-12"> ' +
            '请确认是否'+ eleTxt +
            '</div></div>',
            buttons: {
                cancel: {
                    label: "取消操作",
                    className: "btn-cancel",
                    callback: $.noop
                },
                confirm: {
                    label: "确定退款",
                    className: "btn-info",
                    callback: function () {
                        jQuery.ajax({
                            dataType: "json",
                            url: webBasePath+'/refunds/'+id,
                            data: delData,
                            type: "POST",
                            success: function (result) {
                                if (result.success) {
                                    FOXKEEPER_UTILS.alert('success', result.message);
                                    setTimeout(function(){
                                        location.replace("/view/business/refund/apply/refundApplyList.jsp");
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

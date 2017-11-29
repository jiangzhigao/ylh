jQuery(function(){
    'use strict';

    var queryParam = {},ajaxdata = {};

    //渲染
    _init();
    //绑定
    _bind();

    /*var ue = new baidu.editor.ui.Editor({ initialFrameHeight:260});
    ue.render('editor');*/

    function _init(){
        //初始化列表
        var parameter = $.getParameters();
        var id = parameter.dataId;
        if(id){
            _initData(id);
        }
    }

    function _bind () {
        //审核通过
        $('#btnApprove').on('click', function () {
            var $this = $(this);
            var parameter = $.getParameters();
            var id = parameter.dataId;
            if(id){
                _updateStatus(id,1,"审核通过");
            }
        });
        //审核通过
        $('#btnPass').on('click', function () {
            var $this = $(this);
            var parameter = $.getParameters();
            var id = parameter.dataId;
            if(id){
                _updateStatus(id,5,"审核驳回");
            }
        });

    }

    function _initData (id) {
        _setQueryData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/entrusts/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var entrust = result.entrust;
                    var statusArray = ['审核中', '审核通过','已受理','进行中','已结案','审核驳回'];
                    if(entrust){
                        var statusInt = parseInt(entrust.status);
                        $("#dataId").text(entrust.id);
                        $("#status-tag").text(statusInt);
                        $("#commisionName").text(entrust.commisionName);
                        $("#commisionClient").text(entrust.commisionClient);
                        $("#contactPhone").text(entrust.contactPhone);
                        $("#createdTime").text(entrust.createdTime);
                        $("#caseAmount").text(entrust.caseAmount);
                        $("#agencyFee").text(entrust.agencyFee);
                        $("#statusTxt").text(statusArray[statusInt]);
                        $("#coverImage").attr("src",entrust.casePicture);
                        $("#agentLawyer").text((null != (entrust.lawyer)?(entrust.lawyer.name):''));
                        $("#orderNo").text(entrust.orderNo);

                        var ueContentHtml = entrust.caseDetail;
                        $("#editor").html(ueContentHtml);
                        /*ue.addListener("ready", function () {
                            ue.setContent(ueContentHtml, false)
                            /!*if(statusInt == 0 || statusInt == 1){
                                ue.setEnabled();
                            }else{
                                ue.setDisabled();
                            }*!/
                            ue.setDisabled();//禁用所有功能
                            //ue.setEnabled();
                        });*/
                        var lawyers = entrust.lawyers;
                        if(null != lawyers && lawyers.length > 0){
                            //已发布的可以选择
                            if(statusInt == 1){
                                $("#lawyerList").show();
                                $("#lawyerNum").text(lawyers.length);
                                sltLawyerMap.put("lawyerList",lawyers);
                            }
                        }
                        if(statusInt == 0){
                            $("#divRevoke").show();
                        }
                        if(statusInt == 2 || statusInt == 3){
                            $("#agentLawyerRow").show();
                        }
                        if(statusInt == 4 || statusInt == 5){
                            $("#agentLawyerRow").show();
                        }
                        if(entrust.orderId){
                            $("#orderCode").show();
                            $("#orderDtl").attr("href","/view/business/order/entrust/entrustOrderDetail.jsp?dataId="+entrust.orderId);
                        }
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    /**
     * 表单可编辑
     * @private
     */
    function _eleEditable(){
        $("#form_query").find("input").attr("disabled",false);
        $("#picDtl").text("");
        $("#editPic").show();
    }

    /**
     * 委托通过/驳回
     * @param id
     * @private
     */
    function _updateStatus(id,s,eleText) {
        var delData = {};
        var user = $.reqHomeUrl();
        delData.username = user._d;
        delData.password = user._p;
        delData.userType = 2;
        delData.id = id;
        delData.status = s;
        bootbox.dialog({
            title: "",
            message: '<div class="row">  ' +
            '<div class="col-xs-12"> ' +
            '请确认是否'+eleText+'该委托？' +
            '</div></div>',
            buttons: {
                cancel: {
                    label: "取消操作",
                    className: "btn-cancel",
                    callback: $.noop
                },
                confirm: {
                    label: "确定"+eleText,
                    className: "btn-info",
                    callback: function () {
                        jQuery.ajax({
                            dataType: "json",
                            url: webBasePath+'/entrusts/'+id,
                            data: delData,
                            type: "POST",
                            success: function (result) {
                                if (result.success) {
                                    FOXKEEPER_UTILS.alert('success', result.message);
                                    setTimeout(function(){
                                        location.replace("/view/legalcase/entrust/caseEntrustList.jsp");
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

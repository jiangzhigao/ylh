jQuery(function(){
    'use strict';
    var queryParam={},ajaxdata={};

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
        /** 处理按钮  */
        $('#btnExc').click(function () {
            var $this = $(this);
            var parameter = $.getParameters();
            var id = parameter.dataId;
            if(id){
                _exc(id,$this,"处理此投诉建议?");
            }
        });
    }

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/advices/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var advice = result.advice;
                    if(advice){
                        $("#dataId").val(advice.id);
                        $("#userName").text(advice.userName);
                        $("#nickname").text(advice.nickname);
                        $("#content").text(advice.content);
                        $("#createdTime").text(advice.createdTime);
                        var ss = parseInt(advice.status)==0?'未处理':'已处理';
                        $("#status").text(ss);
                        if(parseInt(advice.status)==0){//未处理
                            $("#excRow").show();
                        }
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    /**
     * 退款
     * @param id
     * @private
     */
    function _exc(id,$this,eleTxt) {
        var delData = {};
        var user = $.reqHomeUrl();
        delData.username = user._d;
        delData.password = user._p;
        delData.userType = 2;
        delData.id = id;
        delData.status = 1;
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
                    label: "确定处理",
                    className: "btn-info",
                    callback: function () {
                        jQuery.ajax({
                            dataType: "json",
                            url: webBasePath+'/advices/'+id,
                            data: delData,
                            type: "POST",
                            success: function (result) {
                                if (result.success) {
                                    var advice = result.advice;
                                    var ss = parseInt(advice.status)==0?'未处理':'已处理';
                                    $("#status").text(ss);
                                    var bizUrl = "/view/customercenter/membermanagement/feedback/feedbackList_.jsp";
                                    if(parseInt(advice.userType)==1){
                                        bizUrl = "/view/customercenter/lawyermanagement/complaint/complaintAndAdviceList_.jsp";
                                    }
                                    FOXKEEPER_UTILS.alert('success', result.message);
                                    setTimeout(function(){
                                        location.replace(bizUrl);
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
    function _setQueryAjaxData () {
        var u = $.getuuuAuth();
        queryParam.username = u._d;
        queryParam.password = u._p;
        queryParam.userType = 2;
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        return true;
    }

});

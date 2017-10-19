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
        //作废操作
        $('#btnRevoke').on('click', function () {
            var $this = $(this);
            var parameter = $.getParameters();
            var id = parameter.dataId;
            if(id){
                _ajax($this, '作废',webBasePath+'/entrusts/'+id);
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
                    var statusArray = ['未发布', '已发布','已结案','已作废'];
                    if(entrust){
                        var statusInt = parseInt(entrust.status);
                        $("#commisionName").text(entrust.commisionName);
                        $("#commisionClient").text(entrust.commisionClient);
                        $("#contactPhone").text(entrust.contactPhone);
                        $("#createdTime").text(entrust.createdTime);
                        $("#caseAmount").text(entrust.caseAmount);
                        $("#agencyFee").text(entrust.agencyFee);
                        $("#statusTxt").text(statusArray[statusInt]);
                        $("#coverImage").attr("src",homePath+entrust.casePicture)

                         var ue = new baidu.editor.ui.Editor({ initialFrameHeight:260,readonly:true });
                         ue.render('editor');
                         var ueContentHtml = entrust.caseDetail;
                         ue.addListener("ready", function () {
                         ue.setContent(ueContentHtml, false);
                         });

                        if(statusInt == 3){
                            $("#divRevoke").hide();
                        }
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    function _ajax($this, buttonText, reUrl) {
        _setAjaxData();
        if (_verifyAjaxData()) {
            jQuery.ajax({
                dataType: "json",
                url: reUrl,
                data: ajaxdata,
                type: "POST",
                success: function (result) {
                    var recUrl,data = result.entrust;
                    if (result.success) {
                        FOXKEEPER_UTILS.alert('success',result.message);
                        setTimeout(function(){
                            location.replace("/view/legalcase/publish/docEntrustList.jsp");
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
        return false;
    }

    //封装ajax提交数据
    function _setQueryData () {
        var user = $.getuuuAuth();
        queryParam.username = user._d;
        queryParam.password = user._p;
        queryParam.userType = 2;
    }

    //封装ajax提交数据
    function _setAjaxData () {
        var user = $.getuuuAuth();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.status = 3;
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {return true;}

});

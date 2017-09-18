jQuery(function(){
    'use strict';

    var ajaxdata = {
    };


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

    function _bind () {}

    function _initData (id) {
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/entrusts/'+id,
            data: ajaxdata,
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

                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    //封装ajax提交数据
    function _setAjaxData () {
        var user = $.getuuuAuth();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
    }

});

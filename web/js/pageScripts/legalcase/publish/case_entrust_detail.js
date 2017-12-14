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
        //作废操作
        $('#btnRevoke').on('click', function () {
            var $this = $(this);
            var parameter = $.getParameters();
            var id = parameter.dataId;
            if(id){
                /*_ajax($this, '作废',webBasePath+'/entrusts/'+id);*/
                _delete(id);
            }
        });

        //图片上传
        $('body').on('change', 'input[name$="_upload"]', function(e) {
            var _this = $(this);
            var fileName = $(this).val();
            /*var $processBar = _this.parent().parent().prev('div');*/
            /*$processBar.removeClass('hide');*/
            if (!fileName.match('\\.(gif|png|jpe?g)$')) {
                FOXKEEPER_UTILS.alert('warning', '只能上传图片格式，如：gif,png,jpg,jpeg!');
                _this.val("");
                $('#' + _this.attr("mid")).attr("src", "/images/nopica.png");
                $('#' + _this.attr("uid")).val("");
                $("#imgBox").hide();
                /*$processBar.addClass('hide');*/
                return false;
            }

            //图片大小判断
            var imgSize = document.getElementById("lcimage_upload").files[0].size;
            if(imgSize>1024*100){
                FOXKEEPER_UTILS.alert('warning', '图片尺寸请小于100k');
                $("#lcimage_upload").val("");
                $("#imgBox").hide();
                return false;
            }

            if (fileName != "") {
                return ajaxFileUpload(_this, _this.attr("id"), null);
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
                    var statusArray = ['未发布', '已发布','已接案','进行中','已结案','已作废'];
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
                        if(statusInt == 0 || statusInt == 1){
                            $("#btnSave").show();
                            $("#btnSaveAndPub").show();
                            $("#btnRevoke").show();
                            _eleEditable();
                        }
                        if(statusInt == 2 || statusInt == 3){
                            $("#agentLawyerRow").show();
                            $("#btnRevoke").show();
                        }
                        if(statusInt == 4 || statusInt == 5){
                            $("#agentLawyerRow").show();
                        }
                        if(entrust.orderId){
                            $("#orderCode").show();
                            $("#orderDtl").attr("href","/view/business/order/entrust/entrustOrderDetail_.jsp?dataId="+entrust.orderId);
                            $("#orderDtl").attr("target","ylxmain");
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
        $("#picDtl").text("图片");
        $("#editPic").show();
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
                            location.replace("/view/legalcase/publish/caseEntrustList.jsp");
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

    function ajaxFileUpload($file, fileId, $processBar) {
        var user = $.getuuuAuth();
        var fileName = $file.val();
        var fileSuffix = fileName.substring(fileName.indexOf(".") + 1, fileName.length);
        var data = new FormData($("#formTimeLine")[0]);
        var formData = new FormData($form_add[0]);
        formData.append("username", user._d);
        formData.append("password", user._p);
        formData.append("userType", "2");
        formData.append("fileext", fileSuffix);
        formData.append("filetype", "1");
        $.ajax({
            type: 'POST',
            url: webBasePath+'/uploadFileMultipart',
            dataType: 'json',
            cache: false,
            processData: false,    //需要正确设置此项
            contentType: false,
            enctype: 'multipart/form-data',    //需要正确设置此项
            data: formData,
            success: function (data) {
                if (data.success) {
                    var url = data.url;
                    $('#' + $file.attr("mid")).attr("src", url);
                    $('#' + $file.attr("uid")).val(url);
                    $("#imgBox").show();
                } else {
                    FOXKEEPER_UTILS.alert('warning', data.message);
                }
            },
            error: function (xhr, status, e) {
                FOXKEEPER_UTILS.alert('warning', '上传出错，请重试');
            }
        });
        return false;
    }

    /**
     * 委托作废
     * @param id
     * @private
     */
    function _delete(id) {
        var delData = {};
        var user = $.reqHomeUrl();
        delData.username = user._d;
        delData.password = user._p;
        delData.userType = 2;
        delData.id = id;
        delData.status = 5;
        bootbox.dialog({
            title: "",
            message: '<div class="row">  ' +
            '<div class="col-xs-12"> ' +
            '请确认是否作废该委托？' +
            '</div></div>',
            buttons: {
                cancel: {
                    label: "取消操作",
                    className: "btn-cancel",
                    callback: $.noop
                },
                confirm: {
                    label: "确定作废",
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
                                        location.replace("/view/legalcase/publish/caseEntrustList_.jsp");
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

jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            paymentId:{
                required:true,
            },
            payType:{
                required:true,
            },
            logoPic:{
                required:true,
            },
            mchId:{
                required:true,
            },
            partnerId:{
                required:true,
            },
            key:{
                required:true,
            },
            softNo:{
                required:true,
            },
            status:{
                required:true,
            }
        },
        messages:{
            paymentId:{
                required:"PaymentID不能为空",
            },
            payType:{
                required:"支付方式不能为空",
            },
            logoPic:{
                required:"LOGO不能为空",
            },
            mchId:{
                required:"mchId不能为空",
            },
            partnerId:{
                required:"PaymentID不能为空",
            },
            key:{
                required:"key不能为空",
            },
            softNo:{
                required:"排序不能为空",
            },
            status:{
                required:"状态不能为空",
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
            var parameter = $.getParameters();
            var id = parameter.dataId;
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/payments/'+id);
        });

        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
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
                $("#imgBox").show();
                /*$processBar.addClass('hide');*/
                return false;
            }

            //图片大小判断
            var imgSize = document.getElementById("lcimage_upload").files[0].size;
            if(imgSize>1024*1000){
                FOXKEEPER_UTILS.alert('warning', '图片尺寸请小于1M');
                $("#lcimage_upload").val("");
                $("#imgBox").show();
                return false;
            }

            if (fileName != "") {
                return ajaxFileUpload(_this, _this.attr("id"), null);
            }
        });
    }

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/payments/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var payments = result.payment;
                    if(payments){
                        var strType =["支付宝","微信"]
                        $("#paymentId").text(payments.id);
                        $("#payType").text(strType[payments.payType]);
                        $("#payType").val(payments.payType);
                        $("#mchId").val(payments.mchId);
                        $("#partnerId").val(payments.partnerId);
                        $("#key").val(payments.payKey);
                        $("#sortNo").val(payments.sortNo);
                        $("option[name='status'][value='"+payments.status+"']").attr("selected","selected");
                        $("#coverImage").attr("src",homePath+payments.logoPic);
                        $("#coverUrl").val(homePath+payments.logoPic);
                        $("#imgBox").show();
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    //封装ajax提交数据
    function _setQueryAjaxData () {
        var agreementHelps = $.getuuuAuth();
        queryParam.username = agreementHelps._d;
        queryParam.password = agreementHelps._p;
        queryParam.userType = 2;
    }

    function _ajax($this, buttonText, reUrl) {
        var formValid = $form_edit.validate().form();
        if (formValid) {
            _setAjaxData();
                jQuery.ajax({
                    dataType: "json",
                    url: reUrl,
                    data: ajaxdata,
                    type: "POST",
                    success: function (result) {
                        if (result.success) {
                            FOXKEEPER_UTILS.alert('success',result.message);
                            setTimeout(function(){
                                location.replace("/view/sys/settings/pay/payTypeList.jsp");
                            }, 1000);
                        }else
                        {
                            FOXKEEPER_UTILS.alert('warning',result.message);
                            $this.html(buttonText).attr("disabled", false);
                        }
                    },
                    beforeSend: function () {// 设置表单提交前方法    
                        $this.html('<i class=\"fa fa-spinner\"></i>&nbsp;正在' + buttonText).attr("disabled", "disabled");
                    }
                });
            }

        return false;
    }

    function _setAjaxData () {
        var payments = $.reqHomeUrl();
        ajaxdata.username = payments._d;
        ajaxdata.password = payments._p;
        ajaxdata.userType = 2;
        ajaxdata.id = $("#paymentId").text();
        ajaxdata.payType = $("#payType").val();
        ajaxdata.logoPic = $("#coverUrl").val();
        ajaxdata.mchId = $("#mchId").val();
        ajaxdata.partnerId = $("#partnerId").val();
        ajaxdata.payKey = $("#key").val();
        ajaxdata.sortNo = $("#sortNo").val();
        ajaxdata.status = $("#status").val();
    }
});

jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            androidVersion:{
                required:true,
            },
            androidUpdatedTime:{
                required:true,
            },
            androidUrl:{
                required:true,
            },
            iosVersion:{
                required:true,
            },
            iosUpdatedTime:{
                required:true,
            },
            iosUrl:{
                required:true,
            }
        },
        messages:{
            androidVersion:{
                required:"请输入安卓最新版本号"
            },
            androidUpdatedTime:{
                required:"请输入安卓版本更新时间"
            },
            androidUrl:{
                required:"请输入安卓更细地址"
            },
            iosVersion:{
                required:"请输入IOS最新版本号"
            },
            iosUpdatedTime:{
                required:"请输入IOS版本更新时间"
            },
            iosUrl:{
                required:"请输入IOS苹果商店更细地址"
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
            _ajax($this, '保存',webBasePath+'/serviceTypes/'+id);
        });

        //返回
        /*$('#btnBack').on('click', function () {
            window.history.back();
        });*/
        /** 删除 */
        $('#btnDel').on('click', function () {
            var id = $("#dataId").val();
            _delete(id);
        });
    }

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/versions/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var version = result.version;
                    if(version){
                        $("#dataId").val(version.id);
                        $("#type").val(version.type);
                        $("#androidVersion").val(version.androidVersion);
                        $("#androidUpdatedTime").val(version.androidUpdatedTime);
                        $("#androidUrl").val(version.androidUrl);
                        $("#iosVersion").val(version.androidVersion);
                        $("#iosUpdatedTime").val(version.androidUpdatedTime);
                        $("#iosUrl").val(version.androidUrl);
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
                                location.replace("/view/mobile/version/appVersionList.jsp");
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
        ajaxdata.id = $("#dataId").val();
        ajaxdata.type = $("#type").val();
        ajaxdata.androidVersion = ("#androidVersion").val();
        ajaxdata.androidUpdatedTime = $("#androidUpdatedTime").val();
        ajaxdata.androidUrl = $("#androidUrl").val();
        ajaxdata.iosVersion = $("#iosVersion").val();
        ajaxdata.iosUpdatedTime = $("#iosUpdatedTime").val();
        ajaxdata.iosUrl = $("#iosUrl").val();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        return true;
    }

});

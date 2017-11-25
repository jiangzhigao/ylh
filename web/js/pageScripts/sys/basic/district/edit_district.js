jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            name:{
                required:true,
            },
            provinceName:{
                required:true,
            },
            sortNo:{
                required:true,
            },
            status:{
                required:true,
            }
        },
        messages:{
            name:{
                required:"城市名称不能为空"
            },
            provinceName:{
                required:"省份名称不能为空"
            },
            sortNo:{
                required:"排序不能为空"
            },
            status:{
                required:"状态不能为空"
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
            _ajax($this, '保存',webBasePath+'/citys/'+id);
        });

        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });
    }

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/citys/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var citys = result.city;
                    if(citys){
                        $("#dataId").val(citys.id);
                        $("#provinceName").text(citys.provinceName);
                        $("#name").val(citys.name);
                        $("#sortNo").val(citys.sortNo);
                        $("option[name='status'][value='"+citys.status+"']").attr("selected","selected");

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
                                location.replace("/view/sys/settings/district/districtList.jsp");
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
        var professionalField = $.reqHomeUrl();
        ajaxdata.username = professionalField._d;
        ajaxdata.password = professionalField._p;
        ajaxdata.userType = 2;
        ajaxdata.id = $("#dataId").val();
        ajaxdata.name = $("#name").val();
        ajaxdata.provinceName = $("#provinceName").val();
        ajaxdata.status = $("#status").val();
        ajaxdata.sortNo = $("#sortNo").val();
        // ajaxdata.provinceName = $("#provinceName").val();
        // ajaxdata.name = $("#name").val();
        // ajaxdata.provinceName = $("#provinceName").val();

    }
});

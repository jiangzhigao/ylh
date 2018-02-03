jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            name:{
                required:true,
            },
            sortNo:{
                required:true,
            },
        },
        messages:{
            name:{
                required:"专业领域不能为空"
            },
            sortNo:{
                required:"排序不能为空"
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
            _ajax($this, '保存',webBasePath+'/professionalFields/'+id);
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
            url: webBasePath + '/professionalFields/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var professionalFields = result.professionalField;
                    if(professionalFields){
                        $("#dataId").val(professionalFields.id);
                        $("#name").val(professionalFields.name);
                        $("#sortNo").val(professionalFields.sortNo);
                    }
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    //封装ajax提交数据
    function _setQueryAjaxData () {
        var professionalField = $.getuuuAuth();
        queryParam.username = professionalField._d;
        queryParam.password = professionalField._p;
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
                                location.replace("/view/customercenter/lawyermanagement/speciality/specialityList.jsp");
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
        ajaxdata.sortNo = $("#sortNo").val();
    }
});

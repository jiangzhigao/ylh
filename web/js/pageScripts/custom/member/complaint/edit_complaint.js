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
            _ajax($this, '保存',webBasePath+'/advices/'+id);
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
            url: webBasePath + '/advices/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var advices = result.advices;
                    if(advices){
                        $("#dataId").val(advices.id);
                        $("#userName").text(advices.userName);
                        $("#nickname").text(advices.nickname);
                        $("#content").text(advices.content);
                        $("#createdTime").text(advices.createdTime);
                        $("#status").text(advices.status);
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
            }  else {
                return false;
            }
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

    /** 请求参数验证 */
    function _verifyAjaxData () {
        if (!ajaxdata.picture) {
            FOXKEEPER_UTILS.alert('warning', '请上传会员头像');
            return false;
        }
        return true;
    }

});

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
            }
        },
        messages:{
            name:{
                required:"分类名称不能为空"
            },
            sortNo:{
                required:"排序号不能为空"
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
            _ajax($this, '保存',webBasePath+'/caseTypes/'+id);
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
            url: webBasePath + '/caseTypes/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var caseType = result.caseType;
                    if(caseType){
                        $("#id-txt").text(caseType.id);
                        $("#dataId").val(caseType.id);
                        $("#name").val(caseType.name);
                        $("#sortNo").val(caseType.sortNo);
                        $("#status").val(caseType.status);
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
                                location.replace("/view/legalcase/clz/caseClzList.jsp");
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
        ajaxdata.name = $("#name").val();
        ajaxdata.sortNo = $("#sortNo").val();
        ajaxdata.status = $("#status").val();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        return true;
    }

});

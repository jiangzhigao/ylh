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
                    var advices = result.advice;
                    var statusArray = ['未处理', '已处理'];
                    if(advices){
                        var statusInt = parseInt(advices.status);
                        $("#dataId").val(advices.id);
                        $("#userName").text(advices.userName);
                        $("#nickName").val(advices.nickname);
                        $("#content").val(advices.content);
                        $("#createdTime").text(advices.createdTime);
                        $("#status").val(statusArray[statusInt]);
                        // $("#status").val(advices.status);
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

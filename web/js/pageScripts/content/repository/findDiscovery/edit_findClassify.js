jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            title:{
                required:true,
            },
            hotline:{
                required:true,
            },
        },
        messages:{
            title:{
                required:"标题不能为空"
            },
            hotline:{
                required:"热线电话不能为空"
            }
        }
    });


    //渲染
    _init();
    //绑定
    _bind();
    //富文本
    var ue = new baidu.editor.ui.Editor({ initialFrameHeight:260 });
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
            _ajax($this, '保存',webBasePath+'/discoveryTypes/'+id);
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
            url: webBasePath + '/discoveryTypes/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var discoveryTypes = result.discoveryType;
                    if(discoveryTypes){
                        $("#dataId").val(discoveryTypes.id);
                        $("#title").val(discoveryTypes.name);
                        $("#hotline").val(discoveryTypes.hotline);
                        ue.render("editor");
                        var ueContentHtml = discoveryTypes.content;
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
                                location.replace("/view/contentmanager/repository/foundclassity/foundClassityList.jsp");
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

        ajaxdata.title = $("#title").val();
        ajaxdata.hotline = $("#hotline").val();
        ajaxdata.content = ue.getContent();
    }
});

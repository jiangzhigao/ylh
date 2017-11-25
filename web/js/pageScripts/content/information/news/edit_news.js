jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            title:{
                required:true,
            },
            content:{
                required:true,
            },
            summary:{
                required:true,
            },
            isDisplay:{
                required:true,
            }
        },
        messages:{
            title:{
                required:"标题不能为空"
            },
            content:{
                required:"内容不能为空"
            },
            summary:{
                required:"摘要不能为空"
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
        _initInfoTypes();
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
            _ajax($this, '保存',webBasePath+'/informations/'+id);
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
            url: webBasePath + '/informations/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var informations = result.information;
                    if(informations){
                        $("#dataId").val(informations.id);
                        $("#title").val(informations.title);
                        $("#summary").val(informations.summary);
                        $("#infoType").val(informations.infoType.id);
                        $("#coverImage").attr("src",homePath+informations.picture);
                        $("#coverUrl").val(homePath+informations.picture);
                        // $("#infoType option[value='"+informations.infoType.id()+"']").attr("selected", true);
                        $("input[name='status'][value='"+informations.isDisplay+"']").attr("checked","checked");

                        ue.render("editor");
                        var ueContentHtml = informations.content;
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
                                location.replace("/view/contentmanager/news/newsList.jsp");
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
        ajaxdata.type = 0;
        ajaxdata.title = $("#title").val();
        ajaxdata.infoType = $("#infoType").val();
        ajaxdata.picture = $("#coverUrl").val();
        ajaxdata.summary = $("#summary").val();
        ajaxdata.content = ue.getContent();
        ajaxdata.isDisplay = $("input[name='status']:checked").val();

    }

    //分类ID
    function _initInfoTypes(){
        var queryInfoData = {};
        var user = $.getuuuAuth();
        queryInfoData.username = user._d;
        queryInfoData.password = user._p;
        queryInfoData.userType = 2;
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/infoTypes',
            data: queryInfoData,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    if (result.infoTypes != null && result.infoTypes.length > 0) {
                        var data = result.infoTypes;
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            $("#infoType").append('<option value="'+dataId+'">'+obj.name+'</option>');
                        }
                    }

                }
            }
        });
    }

});

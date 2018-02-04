jQuery(function(){
    'use strict';
    var $form_edit = $('#form_edit');
    var queryParam = {},ajaxdata = {};
    //$form_edit.validate();

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
            var id = $("#dataId").val();
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/lawQuestions/'+id);
        });
    }

    function _initData (id) {
        _setQueryAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/lawQuestions/'+id,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var lawQuestion = result.lawQuestion;
                    if(lawQuestion){
                        $("#dataId").val(lawQuestion.id);
                        $("#name").text(lawQuestion.name);
                        $("#telephone").text(lawQuestion.telephone);
                        $("#email").text(lawQuestion.email);
                        $("input[name='status'][value='"+lawQuestion.isDealed+"']").attr("checked","checked");
                        $("#typeName").text(lawQuestion.typeName);
                        $("#createdTime").text(lawQuestion.createdTime);
                        $("#content").val(lawQuestion.content);
                        $("#device").text(lawQuestion.device);
                        $("#memo").val(lawQuestion.memo);
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
        /*var formValid = $form_edit.validate().form();*/
        if (true) {
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
                                location.replace("/view/internet/legaladvice/adviceList.jsp");
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
        ajaxdata.userType = 2
        ajaxdata.memo = $("#memo").val();
        ajaxdata.isDealed = $("input[name='isDealed']:checked").val();
    }
});

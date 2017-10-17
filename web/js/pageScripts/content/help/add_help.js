jQuery(function(){
    'use strict';
    var $form_add = $('#form_add');
    var ajaxdata = {};
    $form_add.validate({
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

    _init();

    _bind();

    _render();

    /** 渲染 **/
    function _render() {

    }
    //富文本
    var ue = new baidu.editor.ui.Editor({ initialFrameHeight:260 });
    ue.render("editor");

    /** 初始化 **/
    function _init(){

    }

    /** 绑定事件 **/
    function _bind() {
        //保存
        $('#btnSave').on('click', function () {
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/agreementHelps');
        });
        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });

    }

    function _ajax($this, buttonText, reUrl) {
        var formValid = $form_add.validate().form();
        if (formValid) {
            _setAjaxData();
                jQuery.ajax({
                    dataType: "json",
                    url: reUrl,
                    data: ajaxdata,
                    type: "POST",
                    success: function (result) {
                        var recUrl,data = result.agreementHelps;
                        if (result.success) {
                            FOXKEEPER_UTILS.alert('success',result.message);
                            setTimeout(function(){
                                location.replace("/view/contentmanager/help/helpList.jsp");
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
        }
    }

    function _setAjaxData () {
        var user = $.reqHomeUrl();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.title = $("#title").val();
        ajaxdata.summary = $("#summary").val();
        ajaxdata.content = ue.getContent();
        ajaxdata.isDisplay = $("#isDisplay").val();



    }
});

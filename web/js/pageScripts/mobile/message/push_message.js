jQuery(function(){
    'use strict';
    var $form_edit = $('#form_add');
    var queryParam = {},ajaxdata = {};
    $form_edit.validate({
        rules:{
            title:{
                required:true,
            },
            content:{
                required:true,
            }
        },
        messages:{
            title:{
                required:"消息标题不能为空"
            },
            content:{
                required:"消息内容不能为空"
            }
        }
    });


    //渲染
    _init();
    //绑定
    _bind();

    function _init(){}

    function _bind () {
        //保存
        $('#btnSave').on('click', function () {
            var id = $("#dataId").val();
            var $this = $(this);
            _ajax($this, '保存',webBasePath+'/messages');
        });

        //返回
        /*$('#btnBack').on('click', function () {
            window.history.back();
        });*/
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
                                location.replace("/view/mobile/message/appPushList.jsp");
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
        ajaxdata.title = $("#title").val();
        ajaxdata.content = $("#content").val();
    }

    /** 请求参数验证 */
    function _verifyAjaxData () {
        return true;
    }

});

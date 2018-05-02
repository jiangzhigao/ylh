jQuery(function(){
    'use strict';
    var $form_add_reply= $('#form_add_reply');
    var ajaxdata = {};
    $form_add_reply.validate({
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
                required:"标题不能为空"
            },
            content:{
                required:"内容不能为空"
            }
        }
    });

    _init();

    _bind();

    _render();

    /** 渲染 **/
    function _render() {

    }

    /** 初始化 **/
    function _init(){
        //初始化列表
        var parameter = $.getParameters();
        var id = parameter.dataId;
        if(id){
            $("#activityId").text(id);
            $("#activityId").val(id);
        }
    }

    /** 绑定事件 **/
    function _bind() {
        //保存
        $('#btnSaveReply').on('click', function () {
            var parameter = $.getParameters();
            var id = parameter.dataId;
            var $this = $(this);
            _ajax($this, '保存', webBasePath + '/comments');
        });
        //返回
        $('#btnBack').on('click', function () {
            window.history.back();
        });

        function _ajax($this, buttonText, reUrl) {
            var formValid = $form_add_reply.validate().form();
            if (formValid) {
                _setAjaxData();
                jQuery.ajax({
                    dataType: "json",
                    url: reUrl,
                    data: ajaxdata,
                    type: "POST",
                    success: function (result) {
                        //var recUrl, data = result.comments;
                        if (result.success) {
                            $("#addReplyModal").modal('hide');
                            FOXKEEPER_UTILS.alert('success', result.message);
                            setTimeout(function () {
                                location.replace("/view/contentmanager/activity/topic/replyList.jsp");
                            }, 1000);
                        } else {
                            FOXKEEPER_UTILS.alert('warning', result.message);
                            $this.html(buttonText).attr("disabled", false);
                        }
                    },
                    beforeSend: function () {// 设置表单提交前方法    
                        $this.html('<i class=\"fa fa-spinner\"></i>&nbsp;正在' + buttonText).attr("disabled", "disabled");
                    }
                });
            }
        }

        //初始化加载
        // function _initData (id) {
        //     _setQueryAjaxData();
        //     jQuery.ajax({
        //         dataType: "json",
        //         url: webBasePath + '/comments/'+id,
        //         data: queryParam,
        //         type: "GET",
        //         success: function (result) {
        //             if (result.success) {
        //                 var comments = result.comments ;
        //                 if(comments){
        //                     $("#title").val(comments.title);
        //                     $("#content").text(comments.content);
        //                     $("#activityId").text(comments.activityId);
        //                     $("#activityId").val(comments.activityId);
        //                 }
        //             }else{
        //                 FOXKEEPER_UTILS.alert('warning', result.message);
        //             }
        //         }
        //     });
        // }


        function _setQueryAjaxData () {
            var comments = $.getuuuAuth();
            queryParam.username = comments._d;
            queryParam.password = comments._p;
            queryParam.userType = 2;
        }

        function _setAjaxData() {
            var user = $.reqHomeUrl();
            ajaxdata.username = user._d;
            ajaxdata.password = user._p;
            ajaxdata.userType = 2;
            ajaxdata.content = $("#content").val();
            ajaxdata.activityId = $("#activityId").val();
        }
    }
});

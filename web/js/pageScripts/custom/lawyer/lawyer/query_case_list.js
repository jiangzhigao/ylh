jQuery(function(){
    'use strict';

    var queryParam = {},addCaseParam={};
    var $form_add_case = $('#form_add_case');
    $form_add_case.validate({
        rules:{
            caseName:{
                required:true,
            }
        },
        messages:{
            caseName:{
                required:"案例名称不能为空"
            }
        }
    });

    //渲染
    _init();
    //绑定
    _bind();

    function _init(){
        //初始化列表
        /*_initData();*/
    }

    function _bind () {
        $('body').on('click', ".case", function() {
            var $this = $(this);
            /*if($this.parent().hasClass("case")){*/
                _initLawyerCases();
            /*}*/
        });
        //保存
        $('#btnSaveCase').on('click', function () {
            var lawyerId = $("#dataId").val();
            var lawyerBizId  = $("#lawyerBizId").val();
            var $this = $(this);
            if(lawyerId){
                if(lawyerBizId){//编辑
                    _eidtCase($this,webBasePath+'/lawyerCases/'+lawyerBizId);
                }else{//添加
                    _addCase($this,webBasePath+'/lawyerCases');
                }
            }
        });

        /** 操作列表 */
        $('body').on('click', ".opt-case li a", function() {
            var $this = $(this);
            var id = $this.attr('bid');
            var index = $this.parent().index();
            if(index==0){//编辑
                var reqUrl = webBasePath+'/lawyerCases/'+id;
                _intCaseInfo($this,reqUrl);
            }else if(index==1){//删除操作
                var $this = $(this);
                var id = $this.attr('bid');
                _delete(id,$this);
            }
        });
    }

    function _optionsHtml(id){
        var _operHtml = [];
        _operHtml.push('<div class="btn-group">');
        _operHtml.push('<a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;" aria-expanded="false">编辑<span class="caret"></span></a>');
        _operHtml.push('<ul class="dropdown-menu opt-case" role="menu" style="min-width: 45px;width: 100%;">');
        _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a bid="'+id+'">编辑</a></li>');
        _operHtml.push('<li><a href="javascript:;" bid="'+id+'">删除</a></li>');
        _operHtml.push('</ul></div>');

        return  _operHtml.join('');
    }

    function _initLawyerCases() {
        _setAjaxDataForCase();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/lawyerCases',
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#caseDataList');
                    if (result.lawyerCases != null && result.lawyerCases.length > 0) {
                        var data = result.lawyerCases,clz;
                        var _html = new Array();
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            _html.push('<tr>');
                            _html.push('<td style="width: 80px;">' + dataId + '</td>');
                            _html.push('<td>' + obj.name + '</td>');

                            _html.push('<td style="text-align: right;width: 80px;">' +  _optionsHtml(dataId,clz) + '</td>');
                            _html.push('</tr>');
                        }

                        $dataList.find('tbody').html(_html.join(''));

                    } else {
                        $dataList.find('tbody').html('');
                        $("#caseLable").html('<div class="dataTables_info" role="status" aria-live="polite">无查询记录</div>');
                    }

                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    //封装ajax提交数据
    function _setAjaxDataForCase () {
        var user = $.getuuuAuth();
        queryParam.username = user._d;
        queryParam.password = user._p;
        queryParam.userType = 2;
        var lawyerId = $("#dataId").val();
        queryParam.lawyerId = lawyerId;
    }

    function _setAjaxDataForAddCase () {
        var user = $.getuuuAuth();
        addCaseParam.username = user._d;
        addCaseParam.password = user._p;
        addCaseParam.userType = 2;
        var lawyerId = $("#dataId").val();
        addCaseParam.lawyerId = lawyerId;
        addCaseParam.name = $("#caseName").val();
    }

    function _addCase($this,reUrl) {
        var formValid = $form_add_case.validate().form();
        if (formValid) {
            _setAjaxDataForAddCase();
            jQuery.ajax({
                dataType: "json",
                url: reUrl,
                data: addCaseParam,
                type: "POST",
                success: function (result) {
                    if (result.success) {
                        $("#caseName").val("");
                        $("#addCaseModal").modal('hide');
                        $('#caseDataList').find('tbody').html('');
                        $("#caseLable").html('');
                        _initLawyerCases();
                    }else
                    {
                        FOXKEEPER_UTILS.alert('warning',result.message);
                        $this.html(buttonText).attr("disabled", false);
                    }
                }
            });
        }
        return false;
    }

    function _eidtCase($this,reUrl) {
        var formValid = $form_add_case.validate().form();
        if (formValid) {
            _setAjaxDataForAddCase();
            jQuery.ajax({
                dataType: "json",
                url: reUrl,
                data: addCaseParam,
                type: "POST",
                success: function (result) {
                    if (result.success) {
                        $("#lawyerBizId").val('');
                        $("#caseTitle").text('添加案例');
                        $("#caseName").val("");
                        $("#addCaseModal").modal('hide');
                        $('#caseDataList').find('tbody').html('');
                        $("#caseLable").html('');
                        _initLawyerCases();
                    }else
                    {
                        FOXKEEPER_UTILS.alert('warning',result.message);
                        $this.html(buttonText).attr("disabled", false);
                    }
                }
            });
        }
        return false;
    }


    function _intCaseInfo($this, reUrl) {
        var user = $.getuuuAuth();
        queryParam.username = user._d;
        queryParam.password = user._p;
        queryParam.userType = 2;
        jQuery.ajax({
            dataType: "json",
            url: reUrl,
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var lawyerCase = result.lawyerCase;
                    $("#caseTitle").text('修改案例');
                    $("#addCaseModal").modal('show');
                    $("#lawyerBizId").val(lawyerCase.id);
                    $("#caseName").val(lawyerCase.name);
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    /**
     * 删除
     * @param id
     * @private
     */
    function _delete(id,$ele) {
        var delData = {};
        var user = $.reqHomeUrl();
        delData.username = user._d;
        delData.password = user._p;
        delData.userType = 2;
        delData._method = 'delete';
        bootbox.dialog({
            title: "",
            message: '<div class="row">  ' +
            '<div class="col-xs-12"> ' +
            '请确认是否删除该案例？' +
            '</div></div>',
            buttons: {
                cancel: {
                    label: "取消操作",
                    className: "btn-cancel",
                    callback: $.noop
                },
                confirm: {
                    label: "确定删除",
                    className: "btn-info",
                    callback: function () {
                        jQuery.ajax({
                            dataType: "json",
                            url: webBasePath+'/lawyerCases/'+id,
                            data: delData,
                            type: "POST",
                            success: function (result) {
                                if (result.success) {
                                    $ele.parent().parent().parent().parent().parent().remove();//删除当前行
                                }
                                else
                                {
                                    FOXKEEPER_UTILS.alert('warning', result.message);
                                }
                            }
                        });
                        return true;
                    }
                }
            }
        })
    }

});

jQuery(function(){
    'use strict';

    var queryParam = {},addCaseParam={};
    var $form_add_honor = $('#form_add_honor');
    $form_add_honor.validate({
        rules:{
            caseName:{
                honorName:true,
            }
        },
        messages:{
            honorName:{
                required:"荣誉名称不能为空"
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
        $('body').on('click', ".honor", function() {
            var $this = $(this);
           /* if($this.parent().hasClass("honor")){*/
                _initLawyerHonors();
            /*}*/
        });
        //保存
        $('#btnSaveHonor').on('click', function () {
            var lawyerId = $("#dataId").val();
            var lawyerBizId  = $("#lawyerBizId").val();
            var $this = $(this);
            if(lawyerId){
                if(lawyerBizId){//编辑
                    _eidt($this,webBasePath+'/lawyerHonors/'+lawyerBizId);
                }else{//添加
                    _add($this,webBasePath+'/lawyerHonors');
                }
            }
        });

        /** 操作列表 */
        $('body').on('click', ".opt-honor li a", function() {
            var $this = $(this);
            var id = $this.attr('bid');
            var index = $this.parent().index();
            if(index==0){//编辑
                var reqUrl = webBasePath+'/lawyerHonors/'+id;
                _intInfo($this,reqUrl);
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
        _operHtml.push('<ul class="dropdown-menu opt-honor" role="menu" style="min-width: 45px;width: 100%;">');
        _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a bid="'+id+'">编辑</a></li>');
        _operHtml.push('<li><a href="javascript:;" bid="'+id+'">删除</a></li>');
        _operHtml.push('</ul></div>');

        return  _operHtml.join('');
    }

    function _initLawyerHonors() {
        _setAjaxDataForCase();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/lawyerHonors',
            data: queryParam,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#honorDataList');
                    if (result.lawyerHonors != null && result.lawyerHonors.length > 0) {
                        var data = result.lawyerHonors,clz;
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
                        $("#honorLable").html('<div class="dataTables_info" role="status" aria-live="polite">无查询记录</div>');
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
        addCaseParam.name = $("#honorName").val();
    }

    function _add($this,reUrl) {
        var formValid = $form_add_honor.validate().form();
        if (formValid) {
            _setAjaxDataForAddCase();
            jQuery.ajax({
                dataType: "json",
                url: reUrl,
                data: addCaseParam,
                type: "POST",
                success: function (result) {
                    if (result.success) {
                        $("#honorName").val("");
                        $("#addHonorModal").modal('hide');
                        $('#honorDataList').find('tbody').html('');
                        $("#honorLable").html('');
                        _initLawyerHonors();
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

    function _eidt($this,reUrl) {
        var formValid = $form_add_honor.validate().form();
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
                        $("#honorTitle").text('添加案例');
                        $("#honorName").val("");
                        $("#addHonorModal").modal('hide');
                        $('#honorDataList').find('tbody').html('');
                        $("#honorLable").html('');
                        _initLawyerHonors();
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


    function _intInfo($this, reUrl) {
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
                    var lawyerHonor = result.lawyerHonor;
                    $("#honorTitle").text('修改荣誉');
                    $("#addHonorModal").modal('show');
                    $("#lawyerBizId").val(lawyerHonor.id);
                    $("#honorName").val(lawyerHonor.name);
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
                            url: webBasePath+'/lawyerHonors/'+id,
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

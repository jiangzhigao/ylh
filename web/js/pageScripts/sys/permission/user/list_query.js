jQuery(function(){
    'use strict';

    var $paginationContainer = $('#paginationContainer');
    //分页功能
    var options = {
        //bootstrapMajorVersion:3,
        containerClass:'dataTables_paginate paging_bootstrap',
        listContainerClass:'pagination pull-right',
        currentPage: 1,
        totalPages: 10,
        numberOfPages: 5,
        pageUrl: function (type, page, current) {
            return "javascript:;";
        },
        onPageClicked: function (e, originalEvent, type, page) {
            options.currentPage = page;
            _initData();
        }
    }

    var queryParams = {
        page : 1,
        pageSize : 10
    };


    //渲染
    _init();
    //绑定
    _bind();

    function _init(){
        //初始化列表
        _initData();
    }

    function _bind () {
        /**  检索 */
        $('#btnSearch').click(function () {
            _initData();
        });

        /** 操作列表 */
        $('body').on('click', ".opt li a", function() {
            var $this = $(this);
            var id = $this.attr('bid');
            var index = $this.parent().index();
            if(index==0){//编辑操作
                var bizUrl = $this.attr('bz-url');
                bizUrl = bizUrl+'?dataId='+id;
                /*$this.attr("href",bizUrl);*/
            }else if(index == 1){//删除
                _delete(id,$this);
            }else if(index==2){
                var txt = $this.attr("us");
                _resetPwd(id,$this,txt);
            }
        });
    }
    function _reset() {
        $('#batchDelete').removeClass('btn-primary').addClass('btn-default');
        $("input:checkbox").prop('checked', false);
    }

    function _sumTotalPages(count){
        var totalPages = 0;
        count = parseInt(count);
        var pageSize = 10;
        if(count != 'NaN'){
            if(count%pageSize != 0){
                totalPages = count/pageSize+1;
            }else{
                totalPages = count/pageSize;
            }
        }
        return totalPages;
    }

    function _optionsHtml(id,clz,u){
        var _operHtml = [];
        _operHtml.push('<div class="btn-group">');
        _operHtml.push('<a class="dropdown-toggle" data-toggle="dropdown"  style="color: #337AB7;" >编辑<span class="caret"></span></a>');
        _operHtml.push('<ul class="dropdown-menu opt" role="menu">');
        _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="editSysUser.jsp?dataId='+id+'" target="ylxmain">编辑</a></li>');
        _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a bz-url="javascript:;" bid="'+id+'">删除</a></li>');
        _operHtml.push('<li><a href="javascript:;" bid="'+id+'" us="'+u+'">重置密码</a></li>');
        _operHtml.push('</ul></div>');

        return  _operHtml.join('');
    }

    function _notEditor(){
        var _operHtml = [];
        _operHtml.push('<a href="javascript:;" style="color: #676A6C;" >编辑<span class="caret"></span></a>');
        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/managers',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    if (result.managers != null && result.managers.length > 0) {
                        var data = result.managers,clz;
                        var _html = new Array();
                        var statusArray = ['冻结', '正常'];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            var statusInt = parseInt(obj.status);
                            clz = statusInt == 0?"no-editable":"";
                            _html.push('<tr>');
                            _html.push('<td>' + obj.userName + '</td>');
                            _html.push('<td>' + obj.name + '</td>');
                            _html.push('<td>' + obj.userGroup.name + '</td>');
                            _html.push('<td>' + obj.loginIP + '</td>');
                            _html.push('<td>' + obj.lastLoginTime + '</td>');
                            _html.push('<td>' + obj.loginCount + '</td>');
                            _html.push('<td>' + statusArray[statusInt] + '</td>');

                            if(parseInt(dataId)==1){//管理员
                                _html.push('<td style="text-align: right">' +  _notEditor() + '</td>');
                            }else{
                                _html.push('<td style="text-align: right">' +  _optionsHtml(dataId,clz,obj.userName) + '</td>');
                            }
                            _html.push('</tr>');
                        }
                        var len = null != result.managers?result.managers.length:0;
                        $dataList.find('tbody').html(_html.join(''));

                        options.totalPages = _sumTotalPages(len);
                        $paginationContainer.bootstrapPaginator(options);

                        $('#batchDeleteDiv').show();

                        $pageTotalRecord.html('<div class="dataTables_info" role="status" aria-live="polite"> 共'
                             + len + '条记录，当前为第 ' + options.currentPage + ' 页');
                    } else {
                        $('#batchDeleteDiv').hide();
                        $dataList.find('tbody').html('');
                        $pageTotalRecord.html('<div class="dataTables_info" role="status" aria-live="polite">无查询记录</div>');
                        $paginationContainer.html('');
                    }

                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    function _userBlocked($this,reUrl){
        var ajaxdata = {};
        var user = $.getuuuAuth();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.status = 0;
        jQuery.ajax({
            dataType: "json",
            url: reUrl,
            data: ajaxdata,
            type: "POST",
            success: function (result) {
                if (result.success) {
                    $this.addClass("no-editable");
                    $this.parent().parent().parent().parent().prev().text("冻结")
                    FOXKEEPER_UTILS.alert('success',result.message);
                }
            }
        });
    }

    //封装ajax提交数据
    function _setAjaxData () {
        queryParams.pageNo = options.currentPage;
        var user = $.getuuuAuth();
        queryParams.username = user._d;
        queryParams.password = user._p;
        queryParams.userType = 2;
    }


    function _delete(id,$this) {
        var delData = {};
        var user = $.reqHomeUrl();
        delData.username = user._d;
        delData.password = user._p;
        delData.userType = 2;
        delData._method = "delete";
        bootbox.dialog({
            title: "",
            message: '<div class="row">  ' +
            '<div class="col-xs-12"> ' +
            '请确认是否删除该管理员？' +
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
                            url: webBasePath+'/managers/'+id,
                            data: delData,
                            type: "POST",
                            success: function (result) {
                                if (result.success) {
                                    FOXKEEPER_UTILS.alert('success', result.message);
                                    $this.parent().parent().parent().parent().parent().remove();
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

    function _resetPwd(id,$this,txt) {
        var delData = {};
        var user = $.reqHomeUrl();
        delData.username = user._d;
        delData.password = user._p;
        delData.userType = 2;
        bootbox.dialog({
            title: "信息",
            message: '<div class="row">  ' +
            '<div class="col-xs-12"> ' +
            '确认重置用户【'+txt+'】的密码吗？' +
            '</div></div>',
            buttons: {
                cancel: {
                    label: "否",
                    className: "btn-cancel but",
                    callback: $.noop
                },
                confirm: {
                    label: "是",
                    className: "btn-info but",
                    callback: function () {
                        jQuery.ajax({
                            dataType: "json",
                            url: webBasePath+'/managers/'+id+'/resetPassword',
                            data: delData,
                            type: "POST",
                            success: function (result) {
                                if (result.success) {
                                    FOXKEEPER_UTILS.alert('success', result.message);
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

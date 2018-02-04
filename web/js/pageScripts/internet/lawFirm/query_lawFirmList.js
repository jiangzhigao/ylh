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
            if($this.parent().index()==0){
                var bizUrl = $this.attr('bz-url');
                bizUrl = bizUrl+'?dataId='+id;
                $this.attr("href",bizUrl);
            }else{//删除操作
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/lawFirms/'+id;
                    _userBlocked($this,reqUrl);
                }
            }
        });

        /** 单选 */
        $('body').on('click', 'input[name^="subcheck_"]', function () {
            var $this = $(this);
            var status = $this.attr('s');
            if (status == 0) {
                var chkFlg = $this.prop("checked");
                var downLen = $('input[name^="subcheck_"]').length;

                if (chkFlg) {
                    var selectLen = $('input[name^="subcheck_"]:checked').length;
                    if (downLen == selectLen) {
                        $('#allSelected').prop('checked', chkFlg);
                    }
                } else {
                    var notSelectLen = $('input[name^="subcheck_"]').not("input:checked").length;
                    if (downLen == notSelectLen) {
                        _reset();
                    } else {
                        $('#allSelected').prop('checked', chkFlg);
                    }
                }
            } else {
                $this.prop("checked", false);
                return false;
            }
        });

        /** 批量删除 */
        $('#batchDelete').on('click', function () {
            var len = $('input:checkbox:checked').length;
            if (len > 0) {
                var ids = _getDataIds();
                if (ids) {
                    _batchDelete(ids);
                    return false;
                }
            } else {
                return false;
            }
        });

        /** 全选、全不选 */
        /** 全选、全不选 */
        $('#allSelected').click(function () {
            var $this = $(this);
            var checkFlg = $this.prop('checked');
            $('input[name^="subcheck_"]').prop('checked', checkFlg);
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
                    $this.parent().parent().parent().parent().prev().text("删除")
                    FOXKEEPER_UTILS.alert('success',result.message);
                }
            }
        });
    }
    function _reset() {
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

    function _optionsHtml(id){
        var _operHtml = [];
        _operHtml.push('<div class="btn-group">');
        _operHtml.push('<a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;">编辑<span class="caret"></span></a>');
        _operHtml.push('<ul class="dropdown-menu opt" role="menu">');
        _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a bz-url="/view/internet/lawfirm/editLawFirm.jsp" bid="'+id+'" target="ylxmain">编辑</a></li>');
        _operHtml.push('<li><a href="javascript;" bid="'+id+'">删除</a></li>');
        _operHtml.push('</ul></div>');

        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/lawFirms',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    if (result.lawFirms != null && result.lawFirms.length > 0) {
                        var _html = new Array();
                        var data = result.lawFirms;
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            _html.push('<tr>');
                            _html.push('<td>' + '<input type="checkbox" name="subcheck_' +  (i+1) +'" value="' + dataId + '" s="0"/>' + '</td>');
                            _html.push('<td>' + obj.id + '</td>');
                            _html.push('<td>' + obj.name + '</td>');
                            _html.push('<td>' + obj.sortNo + '</td>');
                            _html.push('<td>' + (obj.isDisplay==1?"显示":"不显示") + '</td>');
                            _html.push('<td>' +  _optionsHtml(dataId) + '</td>');
                            _html.push('</tr>');
                        }
                        $dataList.find('tbody').html(_html.join(''));
                        options.totalPages = _sumTotalPages(result.lawFirms.length);
                        $paginationContainer.bootstrapPaginator(options);
                        $pageTotalRecord.html('<div class="dataTables_info" role="status" aria-live="polite"> 共'
                             + result.lawFirms.length + '条记录，当前为第 ' + options.currentPage + ' 页');
                    } else {
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

    //封装ajax提交数据
    function _setAjaxData () {
        queryParams.pageNo = options.currentPage;
        var user = $.getuuuAuth();
        queryParams.username = user._d;
        queryParams.password = user._p;
        queryParams.userType = 2;
        queryParams.name=$("#name").val();
    }

    function _batchDelete(ids) {
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
            '请确认是否该律所信息？' +
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
                            url: webBasePath+'/lawFirms/'+ids,
                            data: delData,
                            type: "POST",
                            success: function (result) {
                                if (result.success) {
                                    FOXKEEPER_UTILS.alert('success', result.msg);
                                    _initData();
                                }
                                else
                                {
                                    FOXKEEPER_UTILS.alert('warning', result.msg);
                                }
                            }
                        });
                        return true;
                    }
                }
            }
        })
    }

    function _getDataIds() {
        var selects = $("input:checkbox:checked");
        var ids = [];
        selects.each(function(){
            var $this = $(this);
            var id = $this.val();
            if (id) {
                /*var status = $this.attr("s");
                 if (status == 0) {*/
                ids.push(id);
                /*}*/
            }
        });
        return ids.join(',');
    }
});

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
                window.location.href = bizUrl+'?dataId='+id;
            }else{//删除操作
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/activitys/'+id;
                    _userBlocked($this,reqUrl);
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
        // ajaxdata.status = 0;
        ajaxdata._method = 'delete';
        jQuery.ajax({
            dataType: "json",
            url: reUrl,
            data: ajaxdata,
            type: "POST",
            success: function (result) {
                if (result.success) {
                    $this.addClass("no-editable");
                    $this.parent().parent().parent().parent().parent().remove();
                    FOXKEEPER_UTILS.alert('success',result.message);
                }
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

    function _optionsHtml(id){
        var _operHtml = [];
        _operHtml.push('<div class="btn-group">');
        _operHtml.push('<a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;">编辑<span class="caret"></span></a>');
        _operHtml.push('<ul class="dropdown-menu opt" role="menu">');
        _operHtml.push('<li><a bz-url="/view/contentmanager/activity/activity/editActivity.jsp" bid="'+id+'">编辑</a></li>');
        _operHtml.push('<li><a href="javascript:" bid="'+id+'">置顶</a></li>');
        _operHtml.push('<li><a href="javascript:" bid="'+id+'">删除</a></li>');
        _operHtml.push('</ul></div>');

        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/activitys',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    if (result.activitys != null && result.activitys.length > 0) {
                        var _html = new Array();
                        var data = result.activitys;
                        var  statusArray = ["未审核","审核通过","审核未通过"]
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var statusInt = parseInt(obj.status);
                            var dataId = obj.id;
                            _html.push('<tr>');
                            _html.push('<td>' + obj.id + '</td>');
                            _html.push('<td>' + obj.title + '</td>');
                            _html.push('<td>' + obj.replyNumber + '</td>');
                            _html.push('<td>' + obj.announceUser + '</td>');
                            _html.push('<td>' + obj.createdTime + '</td>');
                            _html.push('<td>' + obj.updatedTime + '</td>');
                            _html.push('<td>' + obj.userId + '</td>');
                            _html.push('<td>' + (obj.isTop==1?"置顶":"不置顶") + '</td>');
                            _html.push('<td>' + (statusArray[statusInt]) + '</td>');
                            _html.push('<td>' +  _optionsHtml(dataId) + '</td>');
                            _html.push('</tr>');
                        }

                        $dataList.find('tbody').html(_html.join(''));

                        options.totalPages = _sumTotalPages(result.activitys.length);
                        $paginationContainer.bootstrapPaginator(options);

                        $('#batchDeleteDiv').show();

                        $pageTotalRecord.html('<div class="dataTables_info" role="status" aria-live="polite"> 共'
                             + result.activitys.length + '条记录，当前为第 ' + options.currentPage + ' 页');
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

    //封装ajax提交数据
    function _setAjaxData () {
        queryParams.pageNo = options.currentPage;
        var user = $.getuuuAuth();
        queryParams.username = user._d;
        queryParams.password = user._p;
        queryParams.userType = 2;
        queryParams.type = 0;
    }

});
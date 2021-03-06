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

    function _optionsHtml(id,clz){
        var _operHtml = [];
        _operHtml.push('<a href="editRecommendPage.jsp?dataId='+id+'" style="color: #337AB7;" target="ylxmain">编辑</a>');
        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/banners',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    var count = 0;
                    if (result.banners != null && result.banners.length > 0) {
                        var data = result.banners;
                        var _html = new Array();
                        var typeArray = ['用户端', '律师端'];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            var typeInt = parseInt(obj.type);
                            var linkType = parseInt(obj.linkType);
                            var isDis = parseInt(obj.isDisplay);
                            _html.push('<tr>');
                            _html.push('<td>' + obj.title+ '</td>');
                            var _imageHtml = [];
                            _imageHtml.push('<div class="profile-image" style="max-width: 70px;">');
                            _imageHtml.push('<img src="' + obj.pic + '" class="" style="width: 100%;height: 45px;" />');
                            _imageHtml.push('</div>');
                            _html.push('<td>' + _imageHtml.join('') + '</td>');
                            _html.push('<td>' + (linkType == 0?'站内':'站外') + '</td>');
                            _html.push('<td>' + obj.createdTime + '</td>');
                            _html.push('<td>' + obj.updatedTime + '</td>');
                            _html.push('<td>' + obj.sortNo+ '</td>');
                            _html.push('<td>' + (isDis == 0?'隐藏':'显示') + '</td>');

                            _html.push('<td>' +  _optionsHtml(dataId) + '</td>');
                            _html.push('</tr>');
                        }
                        count = result.banners.length;
                        $dataList.find('tbody').html(_html.join(''));

                        options.totalPages = _sumTotalPages(result.banners.length);
                        $paginationContainer.bootstrapPaginator(options);

                        $('#batchDeleteDiv').show();

                        $pageTotalRecord.html('<div class="dataTables_info" role="status" aria-live="polite"> 共'
                             + count + '条记录，当前为第 ' + options.currentPage + ' 页');
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
        queryParams.type=0;
    }
});

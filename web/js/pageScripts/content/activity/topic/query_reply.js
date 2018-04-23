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
        var parameter = $.getParameters();
        var id = parameter.dataId;
        //初始化列表
        _initData(id);
    }

    function _bind () {
        /**  检索 */
        $('#btnSearch').click(function () {
            //初始化列表
            var parameter = $.getParameters();
            var id = parameter.dataId;
            _initData(id);
        });
        /** 操作列表 */
        $('body').on('click', ".opt li a", function() {
            var $this = $(this);
            var id = $this.attr('bid');
            var index = $this.parent().index();
            if(index==0){
                var bizUrl = $this.attr('bz-url');
                window.location.href = bizUrl+'?dataId='+id;
            }else if(index==1){//置顶
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    isTop($this,id);
                }
            }else if(index==3){//删除操作
                _delete(id,$this);
            }
        });
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
        _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a bz-url="/view/contentmanager/activity/topic/editTopic.jsp" bid="'+id+'">编辑</a></li>');
        _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a bz-url href="javascript:" bid="'+id+'">删除</a></li>');
        _operHtml.push('</ul></div>');
        return  _operHtml.join('');
    }

    function _initData (id) {
        _setAjaxData();
        queryParams.activityId =id;
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/comments',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    if (result.comments != null && result.comments.length > 0) {
                        var _html = new Array();
                        var data = result.comments;
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            _html.push('<tr>');
                            _html.push('<td>' + obj.activityId + '</td>');
                            _html.push('<td>' + obj.content + '</td>');
                            _html.push('</tr>');
                        }
                        $dataList.find('tbody').html(_html.join(''));
                        options.totalPages = _sumTotalPages(result.count);
                        $paginationContainer.bootstrapPaginator(options);
                        $('#batchDeleteDiv').show();
                        $pageTotalRecord.html('<div class="dataTables_info" role="status" aria-live="polite"> 共'
                            + result.count + '条记录，当前为第 ' + options.currentPage + ' 页');
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
        // queryParams.pageNo = options.currentPage;
        var user = $.getuuuAuth();
        queryParams.username = user._d;
        queryParams.password = user._p;
        queryParams.userType = 2;
    }
});




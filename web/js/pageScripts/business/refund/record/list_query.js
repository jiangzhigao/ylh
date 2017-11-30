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

       /* /!** 操作列表 *!/
        $('body').on('click', ".opt li a", function() {
            var $this = $(this);
            var id = $this.attr('bid');
            var s = $this.attr('s');
            var index = $this.parent().index();
            if(index==0){//查看详情
                var bizUrl = $this.attr('bz-url');
                bizUrl = "/view/business/refund/apply/applyDetail.jsp";
                window.location.href = bizUrl+'?dataId='+id+'&status='+s;
            }
        });*/
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

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/refunds',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    var count = 0;
                    if (result.refunds != null && result.refunds.length > 0) {
                        var data = result.refunds,clz;
                        var _html = new Array();
                        var statusArray = ['未审核', '审核通过', "已驳回", "已退款", "退款中"];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id,clz;
                            var statusInt = parseInt(obj.status);
                            _html.push('<tr>');
                            _html.push('<td>' + obj.userName + '</td>');
                            _html.push('<td><a style="color: #337AB7;" href="'+ _buildOrderUrl(obj.orderId,obj.orderType) +'">' + obj.orderNo+ '</a></td>');
                            _html.push('<td  style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">' + obj.reason+ '</td>');
                            _html.push('<td>' + obj.createdTime+ '</td>');
                            _html.push('<td>' + obj.amount + '</td>');
                            _html.push('<td>' + statusArray[statusInt] + '</td>');

                            var _operHtml = []
                            _operHtml.push('<a style="color: #337AB7;" href="/view/business/refund/record/recordDetail.jsp?dataId='+dataId+'">查看详情</a>');
                            _html.push('<td>' +   _operHtml.join('') + '</td>');
                            _html.push('</tr>');
                        }
                        count = result.refunds.length;
                        $dataList.find('tbody').html(_html.join(''));

                        options.totalPages = _sumTotalPages(count);
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

    function _buildOrderUrl(id,type){
        var bizUrl;
        type = parseInt(type);
        if(type == 0){
            bizUrl = "/view/business/order/service/serviceOrderDetail.jsp?dataId="+id;
        }else if(type == 1){
            bizUrl = "/view/business/order/reservation/orderDetail.jsp?dataId="+id;
        }else if(type == 2){
            bizUrl = "/view/business/order/entrust/entrustOrderDetail.jsp?dataId="+id;
        }
        return bizUrl;
    }

    //封装ajax提交数据
    function _setAjaxData () {
        queryParams.pageNo = options.currentPage;
        var user = $.getuuuAuth();
        queryParams.username = user._d;
        queryParams.password = user._p;
        queryParams.userType = 2;
        queryParams.status = 3;
    }
});

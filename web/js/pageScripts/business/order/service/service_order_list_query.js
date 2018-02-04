

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
        _operHtml.push('<a href="serviceOrderDetail.jsp?dataId='+id+'" style="color: #337AB7;" target="ylxmain">详情</a>');
        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/orders',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    var count = 0;
                    if (result.orders != null && result.orders.length > 0) {
                        var data = result.orders,clz;
                        var _html = new Array();
                        var payArray = ['支付宝', '微信', '现金'];
                        var orderArray = ['未支付','已支付','已分红','已退款','已取消'];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            var orderStatus = parseInt(obj.orderStatus);
                            var payType = parseInt(obj.payType);
                            var ff = 0 == orderStatus?"月":"小时";
                            _html.push('<tr>');
                            _html.push('<td>' + obj.orderNo+ '</td>');
                            _html.push('<td>' + obj.duration+ff+ '</td>');
                            _html.push('<td>' + (obj.user==null?"":obj.user.userName) + '</td>');
                            _html.push('<td>' + $.moneyToDecimal(obj.totalAmount) + '</td>');
                            _html.push('<td>' + payArray[payType] + '</td>');
                            _html.push('<td>' + obj.discountAmount + '</td>');
                            _html.push('<td>' + $.moneyToDecimal(obj.payAmount) + '</td>');
                            _html.push('<td>' + obj.orderTime + '</td>');
                            _html.push('<td>' + obj.payTime + '</td>');
                            _html.push('<td>' + orderArray[orderStatus] + '</td>');

                            _html.push('<td>' +  _optionsHtml(dataId) + '</td>');
                            _html.push('</tr>');
                        }
                        count = result.orders.length;
                        $dataList.find('tbody').html(_html.join(''));

                        options.totalPages = _sumTotalPages(result.orders.length);
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
        queryParams.orderType = 0;
        queryParams.orderNo=$("#orderNo").val();
        queryParams.userName=$("#userName").val();
        queryParams.duration=$("#duration").val();
        queryParams.orderStatus=$("#orderStatus").val();
    }
});


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
            if($this.parent().index()==0){//编辑操作
                var bizUrl = $this.attr('bz-url');
                bizUrl = bizUrl+'?dataId='+id;
                $this.attr("href",bizUrl);
            }else{//冻结操作
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/deals/'+id;
                    _userBlocked($this,reqUrl);
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

    function _optionsHtml(order){
        var _operHtml = [],bizUrl="",type=-1,id;
        if(typeof(order) != 'undefined' && order != null){
            type = parseInt(order.orderType);
            id=order.id;
        }
        if(type == 0){
            bizUrl = "/view/business/order/service/serviceOrderDetail.jsp?dataId="+id;
        }else if(type == 1){
            bizUrl = "/view/business/order/reservation/orderDetail.jsp?dataId="+id;
        }else if(type == 2){
            bizUrl = "/view/business/order/entrust/entrustOrderDetail.jsp?dataId="+id;
        }
        _operHtml.push('<a href="'+bizUrl+'" style="color: #337AB7;">查看订单详情</a>');
        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/deals',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    if (result.deals != null && result.deals.length > 0) {
                        var data = result.deals,orderType,orderId;
                        var _html = new Array();
                        var typeArray = ['服务顾问', '律师预约','委托'];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            var type = parseInt(obj.type);
                            _html.push('<tr>');
                            _html.push('<td>' + obj.userName + '</td>');
                            _html.push('<td>' + obj.user.name + '</td>');
                            _html.push('<td>' + obj.user.nickname + '</td>');
                            _html.push('<td>' + typeArray[type] + '</td>');
                            _html.push('<td>' + $.moneyToDecimal(obj.amount) + '</td>');
                            _html.push('<td>' + obj.createdTime + '</td>');

                            _html.push('<td>' +  _optionsHtml(obj.order) + '</td>');
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

    function _userBlocked($this,reUrl){
        var ajaxdata = {};
        var user = $.getuuuAuth();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        // ajaxdata.status = 0;
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
        queryParams.userName=$("#userName").val();
        queryParams.type=$("#type").val();
    }

});

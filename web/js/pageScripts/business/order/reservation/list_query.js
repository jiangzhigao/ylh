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
            var s = $this.attr('s');
            var index = $this.parent().index();
            if(index==0){//查看详情
                var bizUrl = $this.attr('bz-url');
                /*if(s == '0'){
                 bizUrl = "/view/legalcase/entrust/tempCaseEntrustDetail.jsp";
                 }else{
                 bizUrl = "/view/legalcase/entrust/caseEntrustDetail.jsp";
                 }*/
                bizUrl = "/view/business/order/reservation/orderDetail_.jsp";
                bizUrl = bizUrl+'?dataId='+id+'&status='+s;
                $this.attr("href",bizUrl);
            }else if(index==1){//沟通时间
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/orders/'+id;
                    _updateReservStatus($this,reqUrl,1);
                }
            }else{//分红
                var percentage = 100;
                if(index==2){
                    percentage = 25
                }else if(index==3){
                    percentage = 35
                }
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/orders/'+id;
                    _updateOrderStatus($this,reqUrl,2,percentage);
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

    function _optionsHtml(id,clz){
        var _operHtml = [];
        _operHtml.push('<a href="serviceOrderDetail_.jsp?dataId='+id+'" style="color: #337AB7;" target="ylxmain">详情</a>');
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
                        var reserveArray = ['未沟通', '已沟通', '已完成'];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            var reserveStatus = parseInt(obj.reserveStatus);
                            var orderStatus = parseInt(obj.orderStatus);
                            var payType = parseInt(obj.payType);
                            var typeInt = parseInt(obj.orderType);
                            var ff = 0 == typeInt?"月":"小时";
                            _html.push('<tr>');
                            _html.push('<td>' + obj.orderNo+ '</td>');
                            _html.push('<td>' + obj.user.userName+ '</td>');
                            _html.push('<td>' + obj.lawyer.name+ '</td>');
                            _html.push('<td>' + obj.duration+ff+ '</td>');
                            _html.push('<td>' + obj.totalAmount + '</td>');
                            _html.push('<td>' + payArray[payType] + '</td>');
                            _html.push('<td>' + obj.discountAmount + '</td>');
                            _html.push('<td>' + obj.payAmount + '</td>');
                            _html.push('<td>' + obj.orderTime + '</td>');
                            _html.push('<td>' + obj.payTime + '</td>');
                            _html.push('<td>' + orderArray[orderStatus] + '</td>');
                            _html.push('<td>' + reserveArray[reserveStatus] + '</td>');



                            var _operHtml = [];
                            _operHtml.push('<div class="btn-group">');
                            _operHtml.push('<a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;">查看详情<span class="caret"></span></a>');
                            _operHtml.push('<ul class="dropdown-menu opt" role="menu">');
                            _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="#" bid="'+dataId+'" s="'+reserveStatus+'" target="ylxmain">查看详情</a></li>');
                            if(reserveStatus == 0){
                                _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+reserveStatus+'" class="">沟通时间</a></li>');
                            }else{
                                _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+reserveStatus+'" class="no-editable">沟通时间</a></li>');
                            }
                            if(orderStatus == 1){//订单已支付，并且预约状态已完成，才能分红
                                if(reserveStatus == 2){
                                    _isBonus(true,dataId,reserveStatus,_operHtml);
                                }else{
                                    _isBonus(false,dataId,reserveStatus,_operHtml);
                                }
                            }else{
                                _isBonus(false,dataId,reserveStatus,_operHtml);
                            }
                            _operHtml.push('</ul></div>');

                            _html.push('<td style="text-align: right;width: 80px;">' +  _operHtml.join('') + '</td>');
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

    //是否能分红
    function _isBonus(flag,dataId,reserveStatus,_operHtml){
        if(flag){
            _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+reserveStatus+'" class="">2.5:7.5分红</a></li>');
            _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+reserveStatus+'" class="">3.5:6.5分红</a></li>');
            _operHtml.push('<li><a href="javascript:;" bid="'+dataId+'" s="'+reserveStatus+'" class="">10:0分红</a></li>');
        }else{
            _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+reserveStatus+'" class="no-editable">2.5:7.5分红</a></li>');
            _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+reserveStatus+'" class="no-editable">3.5:6.5分红</a></li>');
            _operHtml.push('<li><a href="javascript:;" bid="'+dataId+'" s="'+reserveStatus+'" class="no-editable">10:0分红</a></li>');
        }
    }

    /**
     * 案件作废/结案
     * @param $this
     * @param reUrl
     * @private
     */
    function _updateReservStatus($this,reUrl,s){
        var ajaxdata = {};
        var user = $.getuuuAuth();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.reserveStatus = s;
        jQuery.ajax({
            dataType: "json",
            url: reUrl,
            data: ajaxdata,
            type: "POST",
            success: function (result) {
                if (result.success) {
                    $this.addClass("no-editable");
                    var reserveStatus = parseInt(result.order.reserveStatus);
                    if(reserveStatus == 1){//已沟通
                        $this.parent().parent().parent().parent().prev().text("已沟通")
                    }
                    FOXKEEPER_UTILS.alert('success',result.message);
                }
            }
        });
    }

    /**
     * 分红操作
     * @param $this
     * @param reqUrl
     * @param s
     * @param percentage
     * @private
     */
    function _updateOrderStatus($this,reqUrl,s,percentage){
        var ajaxdata = {};
        var user = $.getuuuAuth();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.bonus = percentage;
        jQuery.ajax({
            dataType: "json",
            url: reqUrl,
            data: ajaxdata,
            type: "POST",
            success: function (result) {
                if (result.success) {
                    var orderStatus = parseInt(result.order.orderStatus);
                    if(orderStatus == 2){//已分红
                        _optionsDisable($this);
                    }
                    FOXKEEPER_UTILS.alert('success',result.message);
                }else{
                    FOXKEEPER_UTILS.alert('warning',result.message);
                }
            }
        });
    }

    function _optionsDisable($ele){
        $ele.parent().parent().parent().parent().prev().prev().text("已分红")
        var $options = $ele.parent().parent().find("a");
        $options.each(function(i,v){
            if(i>1){
                $(this).addClass("no-editable");
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
        queryParams.orderType = 1;
    }
});
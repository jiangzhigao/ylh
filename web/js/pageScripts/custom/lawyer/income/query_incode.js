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
                bizUrl= bizUrl+'?dataId='+id;
                $this.attr("href",bizUrl);
            }else{//删除操作
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/professionalFields/'+id;
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

    function _optionsHtml(orderId,orderType){
        var _operHtml = [];
        var bizUrl;
        if(orderType == 0){
            bizUrl = "/view/business/order/service/serviceOrderDetail_.jsp?dataId="+orderId;
        }else if(orderType == 1){
            bizUrl = "/view/business/order/reservation/orderDetail_.jsp?dataId="+orderId;
        } else if(orderType == 2){
            bizUrl = "/view/business/order/entrust/entrustOrderDetail_.jsp?dataId="+orderId;
        }else{
            bizUrl = "#";
        }
        _operHtml.push('<a href="'+bizUrl+'" style="color: #337AB7;" target="ylxmain">查看订单详情</a>');

        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/incomes',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    if (result.incomes != null && result.incomes.length > 0) {
                        var _html = new Array();
                        var data = result.incomes;
                        var transArray = ['服务顾问','律师预约','委托'];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var typeInt = parseInt(obj.type);
                            var dataId = obj.id;
                            _html.push('<tr>');
                            _html.push('<td>' + obj.userName + '</td>');
                            _html.push('<td>' + obj.name + '</td>');
                            _html.push('<td>' + obj.dealDesc + '</td>')
                            _html.push('<td>' + transArray[typeInt] + '</td>');
                          /*  _html.push('<td>' + obj.orderId + '</td>');*/
                            _html.push('<td>' + obj.amount + '</td>');
                            _html.push('<td>' + obj.createdTime + '</td>');
                            // _html.push('<td>' + (obj.status==1?"已处理":"未处理") + '</td>');
                            _html.push('<td>' +  _optionsHtml(obj.orderId,obj.type) + '</td>');

                            _html.push('</tr>');
                        }
                        $dataList.find('tbody').html(_html.join(''));
                        options.totalPages = _sumTotalPages(result.incomes.length);
                        $paginationContainer.bootstrapPaginator(options);
                        $('#batchDeleteDiv').show();
                        $pageTotalRecord.html('<div class="dataTables_info" role="status" aria-live="polite"> 共'
                             + result.incomes.length + '条记录，当前为第 ' + options.currentPage + ' 页');
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

    }

    //封装ajax提交数据
    function _setAjaxData1 () {
        queryParams.pageNo = options.currentPage;
        var user = $.getuuuAuth();
        queryParams.username = user._d;
        queryParams.password = user._p;
        queryParams.userType = 2;
        queryParams.userName = $("#userName").val();
        queryParams.name = $("#name").val();
        queryParams.type = $("#type").val();
    }

});

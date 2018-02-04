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
            /*if($this.parent().index()==0){//查看详情
                var bizUrl = $this.attr('bz-url');
                /!*if(s == '0'){
                 bizUrl = "/view/legalcase/entrust/tempCaseEntrustDetail.jsp";
                 }else{
                 bizUrl = "/view/legalcase/entrust/caseEntrustDetail.jsp";
                 }*!/
                bizUrl = "/view/legalcase/entrust/caseEntrustDetail.jsp";
                window.location.href = bizUrl+'?dataId='+id+'&status='+s;
            }else*/
            if($this.parent().index()==0){
                if(!($this.hasClass("no-editable"))){//审批
                    var reqUrl = webBasePath+'/withdrawals/'+id;
                    _updateStatus($this,reqUrl);
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
        _operHtml.push('<a href="recordDetail.jsp?dataId='+id+'" style="color: #337AB7;" target="ylxmain">查看详情</a>');
        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/withdrawals',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    var count = 0;
                    if (result.withdrawals != null && result.withdrawals.length > 0) {
                        var data = result.withdrawals,clz;
                        var _html = new Array();
                        var statusArray = ['未提现', '已提现'];
                        var auditStatusArray = ['未审核','审核通过'];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id,clz;
                            var statusInt = parseInt(obj.status);
                            var auditStatusInt = parseInt(obj.auditStatus);
                            _html.push('<tr>');
                            _html.push('<td>' + obj.withdrawalsNo + '</td>');
                            _html.push('<td>' + obj.lawyerName+ '</td>');
                            _html.push('<td>' + obj.lawyerMobile+ '</td>');
                            _html.push('<td>' + obj.withdrawalsTime+ '</td>');
                            _html.push('<td>' + $.moneyToDecimal(obj.amount) + '</td>');
                            _html.push('<td>' + statusArray[statusInt] + '</td>');
                            _html.push('<td style="text-align:center">' +  _optionsHtml(dataId,clz) + '</td>');
                            _html.push('</tr>');
                        }
                        count = result.withdrawals.length;
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

    /**
     * 审批
     * @param $this
     * @param reUrl
     * @private
     */
    function _updateStatus($this,reUrl){
        var ajaxdata = {};
        var user = $.getuuuAuth();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.auditStatus = 1;
        jQuery.ajax({
            dataType: "json",
            url: reUrl,
            data: ajaxdata,
            type: "POST",
            success: function (result) {
                if (result.success) {
                    $this.addClass("no-editable");
                    var auditStatus = parseInt(result.withdrawal.auditStatus);
                    if(auditStatus == 1){//通过
                        $this.parent().parent().parent().parent().prev().text("审核通过");
                    }
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
        queryParams.withdrawalsNo=$("#withdrawalsNo").val();
        queryParams.lawyerName=$("#lawyerName").val();
        queryParams.amount=$.moneyToMul100($("#amount").val());
    }
});

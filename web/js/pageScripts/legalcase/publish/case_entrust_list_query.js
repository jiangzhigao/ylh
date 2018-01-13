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
            if($this.parent().index()==0){//查看详情
                var bizUrl = $this.attr('bz-url');
                if(s == '0'){
                    bizUrl = "/view/legalcase/publish/tempCaseEntrustDetail_.jsp";
                }else{
                    bizUrl = "/view/legalcase/publish/caseEntrustDetail_.jsp";
                }
                bizUrl = bizUrl+'?dataId='+id+'&status='+s;
                $this.attr("href",bizUrl);
            }else if($this.parent().index()==1){//结案
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/entrusts/'+id;
                    _updateEntrustStatus($this,reqUrl,4);
                }
            }else if($this.parent().index()==2){
                if(!($this.hasClass("no-editable"))){//作废
                    var reqUrl = webBasePath+'/entrusts/'+id;
                    _updateEntrustStatus($this,reqUrl,5);
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

    function _optionsHtml(id,clz,s){
        var _operHtml = [];
        _operHtml.push('<div class="btn-group">');
        _operHtml.push('<a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;">查看详情<span class="caret"></span></a>');
        _operHtml.push('<ul class="dropdown-menu opt" role="menu">');
        _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="#" bid="'+id+'" s="'+s+'" target="ylxmain">查看详情</a></li>');
        _operHtml.push('<li><a href="javascript:;" bid="'+id+'" class="'+clz+'">结案</a></li>');
        _operHtml.push('<li><a href="javascript:;" bid="'+id+'" class="'+clz+'">作废</a></li>');
        _operHtml.push('</ul></div>');

        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/entrusts',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    if (result.entrusts != null && result.entrusts.length > 0) {
                        var data = result.entrusts;
                        var _html = new Array(),clz="";
                        var statusArray = ['未发布', '已发布','已接案','进行中','已结案','已作废'];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            var statusInt = parseInt(obj.status);
                            _html.push('<tr>');
                            _html.push('<td>' + obj.id + '</td>');
                            _html.push('<td>' + obj.commisionName + '</td>');
                            _html.push('<td>' + obj.commisionClient + '</td>');
                            _html.push('<td>' + obj.contactPhone + '</td>');
                            _html.push('<td>' + obj.createdTime + '</td>');
                            _html.push('<td>' + obj.caseAmount + '</td>');
                            _html.push('<td>' + obj.agencyFee + '</td>');
                            _html.push('<td>' + statusArray[statusInt] + '</td>');

                            var _operHtml = [];
                            _operHtml.push('<div class="btn-group">');
                            _operHtml.push('<a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;">查看详情<span class="caret"></span></a>');
                            _operHtml.push('<ul class="dropdown-menu opt" role="menu">');
                            _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="#" bid="'+dataId+'" s="'+statusInt+'">查看详情</a></li>');
                            if(statusInt == 3){
                                _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+statusInt+'" class="">结案</a></li>');
                            }else{
                                _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+statusInt+'" class="no-editable">结案</a></li>');
                            }
                            if(statusInt <= 3){
                                _operHtml.push('<li><a href="javascript:;" bid="'+dataId+'" s="'+statusInt+'" class="">作废</a></li>');
                            }else{
                                _operHtml.push('<li><a href="javascript:;" bid="'+dataId+'" s="'+statusInt+'" class="no-editable">作废</a></li>');
                            }
                            _operHtml.push('</ul></div>');

                            _html.push('<td style="text-align: right;">' +  _operHtml.join('') + '</td>');
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

    /**
     * 案件作废/结案
     * @param $this
     * @param reUrl
     * @private
     */
    function _updateEntrustStatus($this,reUrl,s){
        var ajaxdata = {};
        var user = $.getuuuAuth();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.status = s;
        jQuery.ajax({
            dataType: "json",
            url: reUrl,
            data: ajaxdata,
            type: "POST",
            success: function (result) {
                if (result.success) {
                    $this.addClass("no-editable");
                    var status = parseInt(result.entrust.status);
                    if(status == 4){//结案
                        $this.parent().next().find("a").addClass("no-editable");
                        $this.parent().parent().parent().parent().prev().text("已结案")
                    }else if(status == 5){
                        $this.parent().prev().find("a").addClass("no-editable");
                        $this.parent().parent().parent().parent().prev().text("已作废")
                    }
                    FOXKEEPER_UTILS.alert('success',result.message);
                }else{
                    FOXKEEPER_UTILS.alert('warning',result.message);
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
        queryParams.isPlatform = true;
        var commisionName = $("#commisionName").val();
        var commisionClient = $("#commisionClient").val();
        var lawyerName = $("#lawyerName").val();
        if(commisionName){
            queryParams.commisionName = commisionName;
        }
        if(commisionClient){
            queryParams.commisionClient = commisionClient;
        }
        if(lawyerName){
            queryParams.lawyerName = lawyerName;
        }
    }

});

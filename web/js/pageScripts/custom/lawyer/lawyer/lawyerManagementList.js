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
                if(!($this.hasClass("no-editable"))) {
                var bizUrl = $this.attr('bz-url');
                    bizUrl = bizUrl+'?dataId='+id;
                    $this.attr("href",bizUrl);
                }
            }else{//冻结操作
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/lawyers/'+id;
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
                    $this.parent().prev().find("a").addClass("no-editable");
                    $this.parent().parent().parent().parent().prev().text("冻结")
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

    function _optionsHtml(id,clz){
        var _operHtml = [];
        _operHtml.push('<div class="btn-group">');
        _operHtml.push('<a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;">编辑<span class="caret"></span></a>');
        _operHtml.push('<ul class="dropdown-menu opt" role="menu">');
        _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a  class="'+clz+'" bz-url="/view/customercenter/lawyermanagement/lawyer/editLawyer.jsp" bid="'+id+'" target="ylxmain">编辑</a></li>');
        _operHtml.push('<li><a href="javascript:;" bid="'+id+'" class="'+clz+'">冻结</a></li>');
        _operHtml.push('</ul></div>');

        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/lawyers',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    if (result.lawyers != null && result.lawyers.length > 0) {
                        var data = result.lawyers,clz;
                        var _html = new Array();
                        var statusArray = ['冻结', '正常'];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            var statusInt = parseInt(obj.status);
                            clz = statusInt == 0?"no-editable":"";
                            _html.push('<tr>');
                            _html.push('<td>' + obj.userName + '</td>');
                            _html.push('<td>' + obj.name + '</td>');
                            _html.push('<td>' + obj.idcard + '</td>');
                            _html.push('<td>' + obj.licenseid + '</td>');
                            _html.push('<td>' + obj.employmentTime + '</td>');
                            _html.push('<td>' + obj.createdTime + '</td>');
                            _html.push('<td>' + $.moneyToDecimal(obj.account) + '</td>');
                            _html.push('<td>' + (obj.isVerified==true?"是":"否") + '</td>');
                            _html.push('<td>' + (obj.isSigned==true?"是":"否") + '</td>');
                            _html.push('<td>' + statusArray[statusInt] + '</td>');

                            _html.push('<td>' +  _optionsHtml(dataId,clz) + '</td>');
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
        queryParams.pageNo = options.currentPage;
        var user = $.getuuuAuth();
        queryParams.username = user._d;
        queryParams.password = user._p;
        queryParams.userType = 2;
        queryParams.lawyerUsername=$("#lawyerUsername").val();
        queryParams.name=$("#name").val();
        queryParams.idcard=$("#idcard").val();
        queryParams.licenseid=$("#licenseid").val();
        queryParams.status=$("#status").val();
    }

});

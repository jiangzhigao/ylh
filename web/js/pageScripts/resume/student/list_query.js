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
          /*  if(index==0){//查看详情
                var bizUrl = $this.attr('bz-url');
                bizUrl = "/view/resume/student/detail.jsp";
                bizUrl = bizUrl+'?dataId='+id+'&status='+s;
                $this.attr("href",bizUrl);
            }else*/ if(index==0){//审核通过
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/resumes/'+id;
                    _updateStatus($this,reqUrl,1);
                }
            }else if(index==1){//审核驳回
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/resumes/'+id;
                    _updateStatus($this,reqUrl,2);
                }
            }/*else if(index==3){//退款
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/refunds/'+id;
                    _updateStatus($this,reqUrl,3);
                }
            }*/
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

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/resumes',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    if (result.resumes != null && result.resumes.length > 0) {
                        var data = result.resumes,clz;
                        var _html = new Array();
                        var statusArray = ['未审核', '审核通过', '审核拒绝'];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            var statusInt = parseInt(obj.status);
                            clz = statusInt == 0?"no-editable":"";
                            _html.push('<tr>');
                            _html.push('<td>' + obj.school + '</td>');
                            _html.push('<td>' + obj.major + '</td>');
                            _html.push('<td>' + obj.contact + '</td>');
                            _html.push('<td style="width: 200px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;" title="'+obj.speciality+'">' + obj.speciality + '</td>');
                            _html.push('<td>' + obj.graduateTime + '</td>');
                            _html.push('<td>' + obj.birthday + '</td>');
                            _html.push('<td>' + statusArray[statusInt] + '</td>');

                            var _operHtml = [];
                            _operHtml.push('<div class="btn-group">');
                            _operHtml.push('<a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;">管理<span class="caret"></span></a>');
                            _operHtml.push('<ul class="dropdown-menu opt" role="menu">');
                            /*_operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="#" bid="'+dataId+'" s="'+statusInt+'" target="ylxmain">查看详情</a></li>');*/
                            if(statusInt == 0){
                                _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+statusInt+'">审核通过</a></li>');
                                _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+statusInt+'">审核拒绝</a></li>');
                            }else{
                                _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+statusInt+'" class="no-editable">审核通过</a></li>');
                                _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a href="javascript:;" bid="'+dataId+'" s="'+statusInt+'" class="no-editable">审核拒绝</a></li>');
                            }
                           /* _operHtml.push('<li><a href="javascript:;" bid="'+dataId+'" s="'+statusInt+'">删除</a></li>');*/

                            _html.push('<td style="text-align: right;">' + _operHtml.join('') + '</td>');
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
     * 操作
     * @param $this
     * @param reqUrl
     * @param s
     * @param percentage
     * @private
     */
    function _updateStatus($this,reqUrl,s){
        var ajaxdata = {};
        var user = $.getuuuAuth();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.status = s;
        jQuery.ajax({
            dataType: "json",
            url: reqUrl,
            data: ajaxdata,
            type: "POST",
            success: function (result) {
                if (result.success) {
                    var status = parseInt(result.resume.status);
                    if(status == 1){//审核通过
                        _optionsDisable($this,'审核通过',status);
                    }else if(status == 2){
                        _optionsDisable($this,'审核拒绝',status);
                    }
                    FOXKEEPER_UTILS.alert('success',result.message);
                }else{
                    FOXKEEPER_UTILS.alert('warning',result.message);
                }
            }
        });
    }

    function _optionsDisable($ele,txt,s){
        $ele.parent().parent().parent().parent().prev().text(txt)
        var $options = $ele.parent().parent().find("a");
        $options.each(function(i,v){
            if(i==0 || i==1){
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
    }

});

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
        /** 全选，返选 */
        $("#chkItemAll").click(function(){
            $("input[name='chkItem[]']").prop("checked",this.checked);
        });
        /** 操作列表 */
        $('body').on('click', ".opt li a", function() {
            var $this = $(this);
            var id = $this.attr('bid');
            if($this.parent().index()==0){
                var bizUrl = $this.attr('bz-url');
                window.location.href = bizUrl+'?dataId='+id;
            }else{//删除操作
                //no-editable
                if(!($this.hasClass("no-editable"))){
                    var reqUrl = webBasePath+'/informations/'+id;
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
        ajaxdata._method = 'delete'
        jQuery.ajax({
            dataType: "json",
            url: reUrl,
            data: ajaxdata,
            type: "POST",
            success: function (result) {
                if (result.success) {
                    $this.addClass("no-editable");
                    $this.parent().parent().parent().parent().parent().remove();
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

    function _optionsHtml(id){
        var _operHtml = [];
        _operHtml.push('<div class="btn-group">');
        _operHtml.push('<a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;">编辑<span class="caret"></span></a>');
        _operHtml.push('<ul class="dropdown-menu opt" role="menu">');
        _operHtml.push('<li style="border-bottom: 1px dashed #CCC;"><a bz-url="/view/contentmanager/information/trend/editTrend.jsp" bid="'+id+'">编辑</a></li>');
        _operHtml.push('<li><a href="javascript:;"bid="'+id+'" >删除</a></li>');
        _operHtml.push('</ul></div>');
        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/informations',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    if (result.informations != null && result.informations.length > 0) {
                        var _html = new Array();
                        var data = result.informations;
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            _html.push('<tr>');
                            _html.push('<td><input type="checkbox"  id =chkItem[]" name="chkItem[]" value="'+ dataId +'" style="width: 16px;height: 16px;"/></td>');
                            _html.push('<td>' + obj.id + '</td>');
                            _html.push('<td>' + obj.title + '</td>');
                            _html.push('<td>' + obj.createdTime + '</td>');
                            _html.push('<td>' + obj.updatedTime + '</td>');
                             /*_html.push('<td>' + obj.summary + '</td>');*/
                            _html.push('<td>' + (obj.isDisplay==1?"显示":"不显示") + '</td>');
                            _html.push('<td style="text-align: right">' + _optionsHtml(dataId) + '</td>');
                            _html.push('</tr>');
                        }
                        $dataList.find('tbody').html(_html.join(''));
                        options.totalPages = _sumTotalPages(result.informations.length);
                        $paginationContainer.bootstrapPaginator(options);
                        $('#batchDeleteDiv').show();
                        $pageTotalRecord.html('<div class="dataTables_info" role="status" aria-live="polite"> 共'
                            + result.informations.length + '条记录，当前为第 ' + options.currentPage + ' 页');
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

    //批量删除
    $("#btnDel").click(function(){
        if(confirm('确定要删除所选吗?')){
            var checks = $("input[name='chkItem[]']:checked");
            if(checks.length == 0){ alert('未选中任何项！');
                return false;
            }
            //将获取的值存入数组
            var checkData = new Array();
            checks.each(function(){
                checkData.push($(this).val());
            });
            var id= checkData.toString();
            var ajaxdata = {};
            var reqUrl = webBasePath+'/informations/'+id;
            var user = $.getuuuAuth();
            ajaxdata.username = user._d;
            ajaxdata.password = user._p;
            ajaxdata.userType = 2;
            ajaxdata._method = 'delete'
            jQuery.ajax({
                dataType: "json",
                url: reqUrl,
                data: ajaxdata,
                type: "POST",
                success: function (result) {
                    if (result.success) {
                        FOXKEEPER_UTILS.alert('success',result.message);
                        window.location.reload();
                    }
                }
            });
        }
    });

    //封装ajax提交数据
    function _setAjaxData () {
        queryParams.pageNo = options.currentPage;
        var user = $.getuuuAuth();
        queryParams.username = user._d;
        queryParams.password = user._p;
        queryParams.userType = 2;
        queryParams.type = 1;
        queryParams.title = $("#title").val();
    }

});

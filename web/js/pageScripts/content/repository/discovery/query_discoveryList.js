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
        _initInfoTypes();
        //初始化列表
        _initData();
    }

    function _bind () {
        /**  检索 */
        $('#btnSearch').click(function () {
            _initData();
        });

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
                    var reqUrl = webBasePath+'/discoverys/'+id;
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

    function _optionsHtml(id,types){
        var _operHtml = [];
        _operHtml.push('<div class="btn-group">');
        if (types==11 || types==12 || types==13) {
            _operHtml.push('<a href="/view/contentmanager/repository/foundclassity/editFoundClassity.jsp?dataId=' + types + '" style="color: #337AB7;">编辑</a>');
        }else {
            _operHtml.push('<a class="dropdown-toggle" data-toggle="dropdown">编辑<span class="caret"></span></a>');
            _operHtml.push('<ul class="dropdown-menu opt" role="menu">');
            _operHtml.push('<li><a bz-url="/view/contentmanager/repository/discovery/editDiscovery.jsp" bid="' + id + '">编辑</a></li>');
            _operHtml.push('<li><a href="javascript:;"bid="'+id+'" >删除</a></li>');
            _operHtml.push('</ul>');
        }
        _operHtml.push('</div>');
        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/discoverys',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    var $pageTotalRecord = $('#pageTotalRecord');
                    if (result.discoverys != null && result.discoverys.length > 0) {
                        var _html = new Array();
                        var data = result.discoverys;
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            var types = obj.type;
                            _html.push('<tr>');
                            _html.push('<td><input type="checkbox"  id =chkItem[]" name="chkItem[]" value="'+ dataId +'" style="width: 16px;height: 16px;"/></td>');
                            _html.push('<td>' + obj.title + '</td>');
                            if(obj.discoveryType) {
                                _html.push('<td>' + obj.discoveryType.name + '</td>');
                            }else {
                                _html.push('<td>' + obj.type + '</td>');
                            }
                            _html.push('<td>' + obj.createdTime + '</td>');
                            _html.push('<td>' + obj.updatedTime + '</td>');
                            _html.push('<td style="text-align: right;">' +  _optionsHtml(dataId,types) + '</td>');
                            _html.push('</tr>');
                        }
                        $dataList.find('tbody').html(_html.join(''));
                        options.totalPages = _sumTotalPages(result.discoverys.length);
                        $paginationContainer.bootstrapPaginator(options);
                        $('#batchDeleteDiv').show();
                        $pageTotalRecord.html('<div class="dataTables_info" role="status" aria-live="polite"> 共'
                             + result.discoverys.length + '条记录，当前为第 ' + options.currentPage + ' 页');
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

    //分类ID
    function _initInfoTypes(){
        var queryInfoData = {};
        var user = $.getuuuAuth();
        queryInfoData.username = user._d;
        queryInfoData.password = user._p;
        queryInfoData.userType = 2;
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/discoveryTypes',
            data: queryInfoData,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    if (result.discoveryTypes != null && result.discoveryTypes.length > 0) {
                        var data = result.discoveryTypes;
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            $("#infoType").append('<option value="'+dataId+'">'+obj.name+'</option>');
                        }
                    }
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
           var reqUrl = webBasePath+'/discoverys/'+id;
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
        queryParams.title = $("#titles").val();
        queryParams.type = $("#infoType").val();
    }
});

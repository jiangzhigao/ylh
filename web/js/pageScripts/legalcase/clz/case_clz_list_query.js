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
                window.location.href = bizUrl+'?dataId='+id;
            }
        });
    }
    function _reset() {
        $('#batchDelete').removeClass('btn-primary').addClass('btn-default');
        $("input:checkbox").prop('checked', false);
    }

    function _optionsHtml(id){
        var _operHtml = [];
        _operHtml.push('<div class="btn-group">');
        _operHtml.push('<a href="/view/legalcase/clz/editCaseClz.jsp?dataId='+id+'" style="color: #2aabd2;">编辑</a>');
        _operHtml.push('</div>');

        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/caseTypes',
            data: queryParams,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    var $dataList = $('#dataList');
                    if (result.caseTypes != null && result.caseTypes.length > 0) {
                        var data = result.caseTypes;
                        var _html = new Array();
                        var statusArray = ['冻结', '启用'];
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            var dataId = obj.id;
                            var statusInt = parseInt(obj.status);
                            _html.push('<tr>');
                            _html.push('<td>' + obj.id + '</td>');
                            _html.push('<td>' + obj.name + '</td>');
                            _html.push('<td>' + obj.sortNo + '</td>');
                            _html.push('<td>' + statusArray[statusInt] + '</td>');

                            _html.push('<td>' +  _optionsHtml(dataId) + '</td>');
                            _html.push('</tr>');
                        }

                        $dataList.find('tbody').html(_html.join(''));
                    } else {
                        $dataList.find('tbody').html('');
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

});

jQuery(function(){
    'use strict';
    var ajaxdata = {};
    var $paginationContainer = $('#slPaginationContainer');
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
        //_initData();
    }

    function _bind () {
        $('#sltLawyerBtn').click(function () {
            var isSlted = $("input[name='sltLwy']:checked").length;
            if(isSlted != 0){
                var parameter = $.getParameters();
                var id = parameter.dataId;
                if(id){
                    var $this = $(this);
                    _ajax($this, '保存',webBasePath+'/entrusts/'+id,2);
                }
            }
        });
        //点击查询按钮
        $('#btnSlSearch').click(function () {
            _initData ();
        });

        //单击点击查看按钮
        $('#btnSearch').click(function () {
            _initData();
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
        _operHtml.push('<a href="/view/customercenter/lawyermanagement/lawyer/editLawyer.jsp?dataId='+id+'" style="color: #337AB7;">查看详情</a>');
        return  _operHtml.join('');
    }

    function _initData () {
        _reset();
        var lawyerList = sltLawyerMap.get("lawyerList");
        var $dataList = $('#syLawyerList');
        var $pageTotalRecord = $('#slPageTotalRecord');
        if (lawyerList != null && lawyerList.length > 0) {
            var data = lawyerList;
            var _html = new Array(),clz="";
            var statusArray = ['冻结','正常'];
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                var dataId = obj.id;
                var statusInt = parseInt(obj.status);
                _html.push('<tr>');
                _html.push('<td>' + '<input type="radio" name="sltLwy" id="subcheck_' + i +'" class="" value="' + dataId + '"  lname="'+obj.name+'"/>' + '</td>');
                _html.push('<td>' + $.moneyToDecimal(obj.agencyFee) + '</td>');
                _html.push('<td>' + obj.name + '</td>');
                _html.push('<td>' + obj.mobile + '</td>');
                var _imageHtml = [];
                _imageHtml.push('<div class="profile-image" style="max-width: 80px;">');
                _imageHtml.push('<img src="' + obj.picture + '" class="" style="width: 100%;" />');
                _imageHtml.push('</div>');
                _html.push('<td>' + _imageHtml.join('') + '</td>');

                _html.push('<td>' + obj.employmentTime + '</td>');//从业时间
                _html.push('<td>' + statusArray[statusInt] + '</td>');
                _html.push('<td>' + obj.createdTime + '</td>');//参与时间

                _html.push('<td style="text-align: right;">' +  _optionsHtml(dataId) + '</td>');
                _html.push('</tr>');
            }

            $dataList.find('tbody').html(_html.join(''));

            options.totalPages = _sumTotalPages(data.length);
            $paginationContainer.bootstrapPaginator(options);

            $('#batchDeleteDiv').show();

            $pageTotalRecord.html('<div class="dataTables_info" role="status" aria-live="polite"> 共'
                + data.length + '条记录，当前为第 ' + options.currentPage + ' 页');
        } else {
            $('#batchDeleteDiv').hide();
            $dataList.find('tbody').html('');
            $pageTotalRecord.html('<div class="dataTables_info" role="status" aria-live="polite">无查询记录</div>');
            $paginationContainer.html('');
        }
    }

    function _setAjaxData (s) {
        var user = $.reqHomeUrl();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
        ajaxdata.lawyerId = $("input[name='sltLwy']:checked").val();
        ajaxdata.status = s;
        var agencyFee= $("#agencyFeeIn").val();
        ajaxdata.agencyFee=$.moneyToMul100(agencyFee);
    }


    function _ajax($this, buttonText, reUrl, s) {
        $("#lawName").val($("input[name='sltLwy']:checked").attr("lname"));
        _setAjaxData(s);
        jQuery.ajax({
            dataType: "json",
            url: reUrl,
            data: ajaxdata,
            type: "POST",
            success: function (result) {
                if (result.success) {
                    $('#lawyerModal').modal('hide');
                    $("#lawyerList").hide();
                    $("#agentLawyerRow").show();
                    $("#agentLawyer").text($("#lawName").val());
                    $("#statusTxt").text("进行中");
                    $("#agencyFeeIn").hide();
                    $("#agencyFee").show();
                    $("#agencyFee").text($.moneyToDecimal(result.entrust.agencyFee));
                    FOXKEEPER_UTILS.alert('success',result.message);
                }
                else
                {
                    FOXKEEPER_UTILS.alert('warning',result.message);
                    $this.html(buttonText).attr("disabled", false);
                }
            },
            beforeSend: function () {// 设置表单提交前方法    
                $this.html('<i class=\"fa fa-spinner\"></i>&nbsp;正在' + buttonText).attr("disabled", "disabled");
            }
        });
    }

});

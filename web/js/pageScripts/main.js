jQuery(function(){
'use strict';
    var ajaxdata = {};

    //渲染
    _init();
    _bind();
    function _init(){
        _initData();
    }

    function _bind() {
        //业务跳转
        $('body').on('click', '.bus-md', function(e) {
            var _this = $(this);
            var bizUrl = _this.attr("biz-url");
            window.location.href = bizUrl;
        });
    }

    function _initData (id) {
        _setAjaxData();
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/statistics/info',
            data: ajaxdata,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    $("#lastDayUserNumber").text(result.lastDayUserNumber);
                    $("#lastDayAmount").text((result.lastDayAmount)/100);
                    $("#lastWeekUserNumber").text(result.lastWeekUserNumber);
                    $("#lastWeekAmount").text((result.lastWeekAmount)/100);
                    $("#lastMonthUserNumber").text(result.lastMonthUserNumber);
                    $("#lastMonthAmount").text((result.lastMonthAmount)/100);
                    $("#last3MonthUserNumber").text(result.last3MonthUserNumber);
                    $("#last3MonthAmount").text((result.last3MonthAmount)/100);
                    $("#last12MonthUserNumber").text(result.last12MonthUserNumber);
                    $("#last12MonthAmount").text((result.last12MonthAmount)/100);
                }else{
                    FOXKEEPER_UTILS.alert('warning', result.message);
                }
            }
        });
    }

    function _setAjaxData () {
        var user = $.reqHomeUrl();
        ajaxdata.username = user._d;
        ajaxdata.password = user._p;
        ajaxdata.userType = 2;
    }

});

<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script type="text/javascript">

    $(document).ajaxError( function(event, jqXHR, options, errorMsg){
        if (jqXHR.status == 518) {
            FOXKEEPER_UTILS.alert('warning', "登录超时，稍后将跳转到登录页面");
            setTimeout(function(){
                location.replace('/');
            }, 1000);
        } else if (jqXHR.status == 403) {
            location.replace('/common/forbidden');
        } else if (jqXHR.status == 404) {
            location.replace('/common/404');
        } else {
            FOXKEEPER_UTILS.alert('warning', "系统错误，请稍后再试");
            $("#btnSave").html("保存").attr("disabled", false);
        }
    });

    $(function () {

        function menuTrigger(){
            $(".biz").on("click",function () {
                var _target = $(this);
                $("#main-menu-wrapper .biz").removeClass("active");
                _target.addClass("active");
            });
        }

        var menus = $.getMenuList();
        var $menu = $("#menuList");
        var _html = new Array();
        function _buildMenu(menus) {
            if (menus != null && menus.length > 0) {
                for (var i = 0; i < menus.length; i++) {
                    var m = menus[i];
                    if(i==0){
                        _html.push('<li class="first biz open">');
                    }else{
                        _html.push('<li class="first">');
                    }
                    _html.push('<a href="' + m.url + '" target="ylxmain">');
                    _html.push('<i class="' + m.picture + '"></i>');
                    _html.push('<span class="title">' + m.name + '</span><span class="arrow"></span>');
                    _html.push('</a>');
                    next(m);
                    _html.push('</li>');
                }
            }
        }

        function next(d){
            var ms = d.childMenus;
            if(typeof(ms)!='undefined'){
                _html.push('<ul class="sub-menu">');
                for (var i = 0; i < ms.length; i++) {
                    var o = ms[i];
                    var mss = o.childMenus;
                    if(typeof(mss)!='undefined'){
                        _html.push('<li>');
                        _html.push('<a href="javascript:;"><span class="title">'+ o.name+'</span><span class="arrow"></span> </a>');
                        next(o);
                        _html.push('</li>');
                    }else{
                        _html.push('<li>');
                        _html.push('<a href="'+o.url+'" target="ylxmain" class="biz">' + o.name + '</a>');
                        _html.push('</li>');
                    }
                }
                _html.push('</ul>');
            }
        }

        _buildMenu(menus);
        $menu.html(_html.join(''));
        menuTrigger();
    });

    function _loginOut(){
        $.loginOut();
    }

    function _initManagerName(){
        var user = $.reqHomeUrl();
        $("#mName").text(user._n);
    }

    _initManagerName();


    _initNewNotices();
    function _initNewNotices () {
        var dd = {};
        var user = $.reqHomeUrl();
        dd.username = user._d;
        dd.password = user._p;
        dd.userType = 2;
        jQuery.ajax({
            dataType: "json",
            url: webBasePath + '/statistics/todo',
            data: dd,
            type: "GET",
            success: function (result) {
                if (result.success) {
                    $("#unCommReserveOrderCount").text("您有"+result.unCommReserveOrderCount+"条未沟通预约订单");
                    $("#unReadConversationCount").text("您有"+result.unReadConversationCount+"条用户留言未查看");
                    $("#nfnRecordNum1").text((result.unCommReserveOrderCount)+(result.unReadConversationCount));
                }
            }
        });
    }
</script>


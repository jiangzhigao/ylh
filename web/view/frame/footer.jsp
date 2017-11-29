<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script type="text/javascript">
    $(function () {
        var _target = $("#main-menu-wrapper .wraplist li ul>li a[href='" + ___system_navigation_config.currentNav + "']");
        if(_target.length == 0){
            _target = $("#main-menu-wrapper .wraplist li a[href='" + ___system_navigation_config.currentNav + "']");
            _target.parent().addClass("open");
        }else {
            _target.addClass("active");
            var $menuLi = _target.parent().parent().parent();
            $menuLi.addClass('open');
            _target.parent().parent().attr("style", "display:block;");

            var $menuLiParents = $menuLi.closest("#main-menu-wrapper .wraplist ul");
            if($menuLiParents.length ==1){
                $menuLiParents.attr("style", "display:block;");
                $menuLiParents.parent().addClass('open');
                $menuLiParents.parent().children("a").find("span:last").addClass('open');
            }
        }
        $('#main-menu-wrapper li a').trigger("click");
    });

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

    /*$(function () {
        var menus =  $.getMenuList();
        var $menu = $("#menuList");
        var _html = new Array();
        function _buildMenu(menus){
            if (menus != null && menus.length > 0) {
                for (var i = 0; i < menus.length; i++) {
                    var m = menus[i];
                    _html.push('<li class="">');
                    _html.push('<a href="' + m.url + '">');
                    _html.push('<i class="' + m.picture + '"></i>');
                    _html.push('<span class="title">' + m.name + '</span><span class="arrow"></span>');
                    _html.push('</a>');
                    /!*var subList = m.sub
                    if(){

                    }*!/
                }
            }

            $menu.html(_html.join(''));
        }

        _buildMenu(menus);*/
        /*if (menus != null && menus.length > 0) {
            var _html = new Array();
            for (var i = 0; i < menus.length; i++) {
                var m = menus[i];
                _html.push('<li class="">');
                _html.push('<a href="'+m.url+'">');
                _html.push('<i class="'+m.picture+'"></i>');
                _html.push('<span class="title">'+m.name+'</span><span class="arrow"></span>');
                _html.push('</a>');


                /!*_html.push('<ul class="sub-menu">');

                for(){

                }

                _html.push('</ul>');*!/
            }*/
        /*}*/

        <%--<c:forEach items="${menus}" var="menu">
        <li class="">
            <a href="${menu.menuUrl}">
            <i class="fa ${menu.menuClassName}"></i>
            <span class="title">${menu.menuName}</span><span class="arrow"></span>
            </a>
            <ul class="sub-menu">
            <c:forEach items="${menu.subMenuList}" var="subMenu">
            <li>
            <a class="${subMenu.menuClassName}" href="${subMenu.menuUrl}">${subMenu.menuName}</a>
            </li>
            </c:forEach>
            </ul>
        </li>
        </c:forEach>--%>

    /*});*/

    function _loginOut(){
        $.loginOut();
    }

    function _initManagerName(){
        var user = $.reqHomeUrl();
        $("#mName").text(user._n);
    }

    _initManagerName();
</script>


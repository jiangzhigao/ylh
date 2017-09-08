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

</script>


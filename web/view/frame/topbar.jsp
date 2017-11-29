<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%--<script src="/js/plugins/perfect-scrollbar/perfect-scrollbar.min.js" type="text/javascript"></script>--%>
<div class='page-topbar'  style="background-color: #f3f3f4;">
    <div class='logo-area'>
    </div>
    <div class='quick-area'>
        <div class='pull-left'>
            <ul class="info-menu left-links list-inline list-unstyled" style="padding-right: 0px;">
                <li class="" <%--style="padding-top: 15px;"--%>>
                    <a href="#" data-toggle="sidebar" class="sidebar_toggle">
                        <i class="fa fa-bars" style="font-size: 16px;height: 30px;background-color: #23B7E5;width: 34px;padding-top: 8px;color: #ffffff;"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class='pull-left' style="margin-left: 6px;">
            <ul class="info-menu left-links list-inline list-unstyled" style="padding-left:0px;">
                <li class="">
                    <span style="text-align: center;font-size: 14px;color: #666666;"><strong>欢迎使用一律行后台管理系统</strong></span>
                </li>
            </ul>
        </div>
        <div class='pull-right'>
            <ul class="info-menu right-links list-inline list-unstyled">
                <li class="profile">
                    <a href="javascript:;" data-toggle="dropdown" class="toggle">
                        <span style="font-size: 12px;color: #666666;" id="mName">你好，王麻子<%--<i class="fa fa-angle-down"></i>--%></span>
                    </a>
                    <%--<ul class="dropdown-menu profile animated fadeIn">
                        <li class="hidden">
                            <a href="#settings">
                                <i class="fa fa-cog"></i> 设置
                            </a>
                        </li>
                        <li>
                            <a href="/admin/goUpdatePwd">
                                <i class="fa fa-key"></i> 修改密码
                            </a>
                        </li>
                        <li class="hidden">
                            <a href="#help">
                                <i class="fa fa-info"></i> 帮助
                            </a>
                        </li>
                        <li class="last">
                            <a href="/logout">
                                <i class="fa fa-sign-out"></i> 注销
                            </a>
                        </li>
                    </ul>--%>
                </li>
                <li class="">
                    <a href="#" data-toggle="dropdown" class="toggle" style="width: 40px;padding: 0;text-align: left;">
                        <i class="fa fa-bell" style="margin-right: 5px;"></i>
                        <span class="badge badge-info" id="nfnRecordNum1" style="margin: 20px 0 0 5px;width: 20px;height: 20px;border-radius:3px;">4</span>
                    </a>
                    <ul class="dropdown-menu notifications animated fadeIn">

                            <li class="">
                                <ul class="dropdown-menu-list list-unstyled ps-scrollbar">
                                    <li class="unread away"> <!-- available: success, warning, info, error -->
                                        <a href="javascript:;">
                                            <div class="notice-icon">
                                                <i class="fa fa-envelope"></i>
                                            </div>
                                            <div>
                                                    <span class="name">
                                                        <strong>45 new messages</strong>
                                                        <span class="time small">45 mins ago</span>
                                                    </span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class=" busy">
                                        <a href="javascript:;">
                                            <div class="notice-icon">
                                                <i class="fa fa-times"></i>
                                            </div>
                                            <div>
                                                    <span class="name">
                                                        <strong>Team Meeting at 6PM</strong>
                                                        <span class="time small">16th Mar</span>
                                                    </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>

                                <%--<div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 3px;"><div class="ps-scrollbar-x" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px; height: 300px;"><div class="ps-scrollbar-y" style="top: 0px; height: 167px;"></div></div></li>
                        --%><%--<li class="external">
                            <a href="javascript:;">
                                <span>未读消息通知</span>
                            </a>
                        </li>--%>
                    </ul>
                </li>

                <li class="" style="margin-left: 5px;margin-right: 15px;">
                    <a href="javascript:_loginOut();" style="color: #96969E;">
                        <i class="fa fa-sign-out" style="margin-right: 5px;"></i>
                        <strong>登出</strong>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

    <style type="text/css">

        .move20{
            margin-right: -20px;
        }
        .dropdown-menu {
            min-width: 100px;
            width: 90px;
        }
        a:hover {
            text-decoration: none;
        }
        table.table tr:nth-child(odd)
        {
            background-color:#f9f9f9;
        }
        table.table tr:nth-child(even)
        {
            background-color:#fff;
        }
        . no-editable{
            color: #676A6C!important;
        }
        a {
            color: #337AB7;
        }
    </style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class=" boxed">
<!-- START TOPBAR -->
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.sys_permission_role_list;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">系统管理 / 权限管理</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h4 class="title pull-left title-bold">用户组列表</h4>
                <div class="actions panel_actions pull-right" style="line-height: 23px;">
                    <a href="addRoleResources.jsp" class="btn btn-info" style="padding: 3px 6px;margin-top:9px;">
                        <span class="glyphicon glyphicon-plus"></span>
                    </a>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-2 move20">
                                <input type="text" class="form-control" placeholder="请输入用户组名称搜索">
                            </div>

                            <div class="col-xs-2">
                                <%--<div class="form-group">--%>
                                <div class="controls">
                                    <button id="btnSearch" type="button" class="btn btn-info">搜索</button>
                                </div>
                                <%--</div>--%>
                            </div>
                        </div>
                    </form>
                    <table class="table table-bordered table-hover" id="dataList">
                        <thead>
                        <tr>
                            <th>用户组</th>
                            <th>用户组描述</th>
                            <th>排序</th>
                            <th>创建时间</th>
                            <th>修改时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <%--<tr>
                            <td>测试</td>
                            <td>测试用户</td>
                            <td>1</td>
                            <td>2017-08-08 15:30:30</td>
                            <td>2017-08-08 15:30:30</td>
                            <td>
                                <a href="editRoleResources.jsp" style="color: #337AB7;">
                                    编辑
                                </a>
                            </td>
                        </tr>--%>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-xs-6" id="pageTotalRecord"></div>
                        <div class="col-xs-6">
                            <div class="dataTables_paginate paging_bootstrap" id="paginationContainer"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>
<!-- END CONTENT -->
</div>
<!-- END CONTAINER -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/pageScripts/sys/permission/role/list_query.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

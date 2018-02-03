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
        .no-editable{
            background-color: #cccccc;
        }
        a {
            color: #666666;
        }
    </style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class=" boxed">
<!-- START TOPBAR -->
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.app_version_List;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">移动管理 / APP更新设置</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h4 class="title pull-left title-bold">APP版本列表</h4>
                <div class="actions panel_actions pull-right">
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <%--<form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">

                    </form>
                    <br>--%>
                    <table class="table table-bordered table-hover" id="dataList">
                        <thead>
                        <tr>
                            <th>APP</th>
                            <th>安卓最新版本号</th>
                            <th>安卓版本更新时间</th>
                            <th>安卓更新地址</th>
                            <th>IOS最新版本号</th>
                            <th>IOS版本更新时间</th>
                            <th>IOS苹果商店更新地址</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <%--<tr>
                            <td>律师端</td>
                            <td>1.0</td>
                            <td>2017-08-08</td>
                            <td>http://</td>
                            <td>1.0</td>
                            <td>2017-08-08</td>
                            <td>http://</td>
                            <td>
                                <a href="editAppVersion.jsp" style="color: #2aabd2;">
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
<script type="text/javascript" src="/js/pageScripts/mobile/version/list_query.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

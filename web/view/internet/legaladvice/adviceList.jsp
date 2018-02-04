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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.internet_legal_advice_List;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">网站管理 / 法律咨询管理 / 法律咨询列表 </h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h4 class="title pull-left">法律咨询列表</h4>
                <%--<div class="actions panel_actions pull-right">
                    <a href="addAdvice.jsp" class="btn btn-info">
                        <span class="glyphicon glyphicon-plus"></span>
                    </a>
                </div>--%>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-2 move20">
                                <input type="text" id="name" class="form-control" placeholder="请输入咨询者姓名">
                            </div>
                            <div class="col-xs-2">
                                <div class="controls">
                                    <button id="btnSearch" type="button" class="btn btn-info">搜索</button>
                                    <button id="batchDelete" type="button" class="btn btn-danger">删除</button>
                                </div>

                            </div>
                        </div>
                    </form>
                    <table class="table table-bordered table-hover" id="dataList">
                        <thead>
                        <tr>
                            <th>
                                <input type="checkbox" id="allSelected" class="icheck-minimal-grey" name="" value="">
                            </th>
                            <th>ID</th>
                            <th>姓名</th>
                            <th>电话</th>
                            <th>邮箱</th>
                            <th>咨询类型</th>
                            <th>咨询时间</th>
                            <th>设备</th>
                            <th>是否已处理</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
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
<script type="text/javascript" src="/js/pageScripts/internet/legaladvice/query_adviceList.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

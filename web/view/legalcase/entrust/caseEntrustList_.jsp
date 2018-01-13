<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content= "no-cache, must-revalidate">
    <%@ include file="/view/frame/head.jsp"%>

    <style type="text/css">

        .move20{
            margin-right: -20px;
        }
        .dropdown-menu {
            min-width: 70px;
            width: 100%;
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
            color: #ccc;
        }
        .no-editable a{
            color: #ccc;
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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.c_case_entrust_list;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">案件管理 / 委托管理 / 案件委托</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h4 class="title pull-left title-bold">案件委托</h4>
                <div class="actions panel_actions pull-right" style="line-height: 23px;">
                    <%--<div id="page_alert_container"></div>--%>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-2 move20">
                                <input type="text" id="commisionName" class="form-control" placeholder="委托编号或名称">
                            </div>
                            <div class="col-xs-2 move20">
                                <input type="text move20" id="commisionClient" class="form-control" placeholder="委托人姓名或手机">
                            </div>
                            <div class="col-xs-2 move20">
                                <input type="text" id="lawyerName" class="form-control" placeholder="代理律师姓名">
                            </div>
                            <div class="col-xs-2 move20">
                                <select class="form-control" style="border-color: #e1e1e1;" id="status">
                                    <option value="">全部</option>
                                    <option value="0">未审核</option>
                                    <option value="1">审核通过</option>
                                    <option value="5">审核驳回</option>
                                    <option value="2">已受理</option>
                                    <option value="3">进行中</option>
                                    <option value="4">已结案</option>
                                </select>
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
                            <th>委托ID</th>
                            <th>订单编号</th>
                            <th>委托名称</th>
                            <th>委托人</th>
                            <th>联系方式</th>
                            <th>委托时间</th>
                            <th>代理律师</th>
                            <th>案件标的</th>
                            <th>代理费用</th>
                            <th>委托进度</th>
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
<script type="text/javascript" src="/js/pageScripts/legalcase/entrust/case_entrust_list_query.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

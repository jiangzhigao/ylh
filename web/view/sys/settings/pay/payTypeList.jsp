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
            color: #333;
        }
    </style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class=" boxed">
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.sys_settings_pay_type_list;
</script>
<!-- START CONTENT -->
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">系统管理 / 基础设置 / 支付设置</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">支付方式列表</h2>
                    <%--<div class="actions panel_actions pull-right">--%>
                        <%--<a href="addPayType.jsp" class="btn btn-info">--%>
                            <%--<span class="glyphicon glyphicon-plus"></span>--%>
                        <%--</a>--%>
                    <%--</div>--%>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">

                        <table class="table table-bordered table-hover" id="dataList">
                            <thead>
                            <tr>
                                <th>PaymentID</th>
                                <th>LOGO</th>
                                <th>支付方式</th>
                                <th>MCHID</th>
                                <th>PARTNER_ID</th>
                                <th>排序</th>
                                <th>状态</th>
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
<script type="text/javascript" src="/js/pageScripts/sys/basic/paytype/query_paytypelist.js"></script>

</body>

</html>

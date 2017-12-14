<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

    <style type="text/css">

        .move20{
            margin-right: -20px;
        }
        .dropdown-menu {
            min-width: 65px;
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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.bz_withdraw_cash_apply_List;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">商务中心 / 提现管理 / 提现申请 </h4>
        <div class="actions panel_actions pull-right">
            <%--<div id="page_alert_container"></div>--%>
        </div>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h4 class="title pull-left title-bold">提现申请</h4>
                <div class="actions panel_actions pull-right">
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-2 move20">
                                <input type="text" id="" class="form-control" placeholder="请输入提现编号">
                            </div>
                            <div class="col-xs-2 move20">
                                <input type="text" id="" class="form-control" placeholder="请输入律师名称">
                            </div>
                            <div class="col-xs-2 move20">
                                <input type="text" id="" class="form-control" placeholder="请输入提现金额">
                            </div>
                            <div class="col-xs-2 move20">
                                <select class="form-control" id="status1" style="border-color: #e1e1e1;">
                                    <option value="">请选择状态</option>
                                    <option value="0">未审核</option>
                                    <option value="1">通过审核</option>
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
                            <th>提现编号</th>
                            <th>申请律师</th>
                            <th>律师电话</th>
                            <th>申请时间</th>
                            <th>提现金额</th>
                            <th>提现状态</th>
                            <th>申请状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <%--<tr>
                            <td>201700000001</td>
                            <td>13861234567</td>
                            <td>王麻子</td>
                            <td>100.00</td>
                            <td>微信</td>
                            <td>0</td>
                            <td>100.00</td>
                            <td>2017-08-08</td>
                            <td>2017-08-08</td>
                            <td>已支付</td>
                            <td>
                                <div class="btn-group">
                                    <a class="dropdown-toggle" data-toggle="dropdown" style="color: #2aabd2;">
                                        查看详情
                                        <span class="caret"></span>
                                    </a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="entrustOrderDetail.jsp">查看详情</a></li>
                                        <li><a href="#">2.5:7.5分红</a></li>
                                        <li><a href="#">3.5:6.5分红</a></li>
                                        <li><a href="#">10:0分红</a></li>
                                    </ul>
                                </div>
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
<script type="text/javascript" src="/js/pageScripts/business/cash/apply/list_query.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

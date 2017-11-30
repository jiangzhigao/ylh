<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

    <style type="text/css">

        .move20{
            margin-right: -20px;
        }
        .dropdown-menu {
            min-width: 75px;
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
<%@ include file="/view/frame/topbar.jsp"%>
<!-- END TOPBAR -->
<!-- START SIDEBAR -->
<%@ include file="/view/frame/sidebar.jsp"%>
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.bz_entrust_order_List;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">商务中心 / 订单管理 / 委托订单 </h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h4 class="title pull-left title-bold">委托订单列表</h4>
                    <div class="actions panel_actions pull-right">
                        <%--<div id="page_alert_container"></div>--%>
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                            <div class="row">
                                <div class="col-xs-2 move20">
                                    <input type="text" id="" class="form-control" placeholder="订单号">
                                </div>
                                <div class="col-xs-2 move20">
                                    <input type="text" id="" class="form-control" placeholder="用户注册手机号">
                                </div>
                                <div class="col-xs-2 move20">
                                    <input type="text" id="" class="form-control" placeholder="律师姓名">
                                </div>
                                <div class="col-xs-2 move20">
                                    <select class="form-control" id="status1" style="border-color: #e1e1e1;">
                                        <option value="">订单状态</option>
                                        <option value="0">未支付</option>
                                        <option value="1">已支付</option>
                                        <option value="2">已分红</option>
                                        <option value="1">已退款</option>
                                        <option value="2">已取消</option>
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
                                <th>订单号</th>
                                <th>客户</th>
                                <th>委托律师</th>
                                <th>订单金额</th>
                                <th>支付方式</th>
                                <th>折扣金额</th>
                                <th>支付金额</th>
                                <th>下单时间</th>
                                <th>支付时间</th>
                                <th>订单状态</th>
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

</section>
<!-- END CONTENT -->
</div>
<!-- END CONTAINER -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/pageScripts/business/order/entrust/list_query.js"></script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>

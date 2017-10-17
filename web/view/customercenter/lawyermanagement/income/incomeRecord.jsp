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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.l_incomeRecord;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">律师管理 / 收入记录 </h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">收入记录</h2>
                    <div class="actions panel_actions pull-right">
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                            <div class="row">
                                <div class="col-xs-3 move20">
                                    <input type="text" class="form-control" placeholder="律师账号">
                                </div>

                                <div class="col-xs-2 move20">
                                    <input type="text" class="form-control" placeholder="律师姓名">
                                </div>
                                <div class="col-xs-2 move20">
                                    <select class="form-control" style="border-color: #e1e1e1;" placeholder="状态">
                                        <option value="0">状态</option>
                                        <option value="1">预约</option>
                                        <option value="2">案件委托</option>
                                        <option value="3">文书委托</option>
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
                        <br>
                        <table class="table table-bordered table-hover" id="dataList">
                            <thead>
                            <tr>
                                <th>律师账号</th>
                                <th>律师姓名</th>
                                <th>交易描述</th>
                                <th></th>
                                <th>交易类型</th>
                                <th>收入金额</th>
                                <th>交易时间</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>12360</td>
                                <td>D0001</td>
                                <td>打官司</td>
                                <td>13901234567</td>
                                <td>打官司</td>
                                <td>王麻子</td>
                                <td>2017-09-03</td>
                                <td>
                                    <div class="btn-group">
                                        <a href="/view/legalcase/publish/caseEntrustDetail.jsp?orderCode=D0001" class="dropdown-toggle" data-toggle="dropdown" style="color: #2aabd2;">
                                            查看订单详情
                                            <span class="caret"></span>
                                        </a>

                                    </div>
                                </td>
                            </tr>

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
<script type="text/javascript" src="/js/pageScripts/custom/lawyer/income/query_incode.js"></script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>

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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.p_doc_entrust_list;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">案件管理 / 平台发布 / 文件委托</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">文书委托</h2>
                    <div class="actions panel_actions pull-right">
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                            <div class="row">
                                <div class="col-xs-3 move20">
                                    <input type="text" class="form-control" placeholder="委托编号或名称">
                                </div>
                                <div class="col-xs-3 move20">
                                    <input type="text move20" class="form-control" placeholder="委托人姓名或手机">
                                </div>
                                <div class="col-xs-2 move20">
                                    <input type="text" class="form-control" placeholder="代理律师姓名">
                                </div>
                                <div class="col-xs-2 move20">
                                    <select class="form-control" style="border-color: #e1e1e1;">
                                        <option value="0">未审核</option>
                                        <option value="1">审核中</option>
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
                                <th>委托ID</th>
                                <%--<th>订单编号</th>--%>
                                <th>委托名称</th>
                                <th>委托人</th>
                                <th>联系方式</th>
                                <th>委托时间</th>
                                <%--<th>代理律师</th>--%>
                                <th>案件标的</th>
                                <th>代理费用</th>
                                <th>委托进度</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <%--<tr>
                                <td>1</td>
                                <td>D0001</td>
                                <td>打官司</td>
                                <td>王麻子</td>
                                <td>13901234567</td>
                                <td>2017-08-28</td>
                                <td>张三</td>
                                <td>XXXXX</td>
                                <td>10000.00</td>
                                <td>审核中</td>
                                <td>
                                    <div class="btn-group">
                                        <a class="dropdown-toggle" data-toggle="dropdown" style="color: #2aabd2;">
                                            查看详情
                                            <span class="caret"></span>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="/view/legalcase/publish/docEntrustDetail.jsp?orderCode=D0001">查看详情</a></li>
                                            <li><a href="#">审核通过</a></li>
                                            <li><a href="#">不通过</a></li>
                                            <li><a href="#">结案</a></li>
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
<script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
<script type="text/javascript" src="/js/pageScripts/legalcase/publish/doc_entrust_list_query.js"></script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>

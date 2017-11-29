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
<%@ include file="/view/frame/topbar.jsp"%>
<!-- END TOPBAR -->
<!-- START SIDEBAR -->
<%@ include file="/view/frame/sidebar.jsp"%>
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.cnt_activity_list;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">内容管理 / 活动管理 </h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">活动列表</h2>
                    <div class="actions panel_actions pull-right">
                        <a href="addActivity.jsp" class="btn btn-info">
                            <span class="glyphicon glyphicon-plus"></span>
                        </a>
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                            <div class="row">
                                <div class="col-xs-2 move20">
                                    <input type="text" id="account" class="form-control" placeholder="请输入标题">
                                </div>

                                <div class="col-xs-2 move20">
                                    <select class="form-control" id="status" style="border-color: #e1e1e1;">
                                        <option value="">请选择状态</option>
                                        <option value="0">未审核</option>
                                        <option value="1">审核通过</option>
                                        <option value="2">审核未通过</option>
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
                                <th>ID</th>
                                <th>标题</th>
                                <th>参与人数</th>
                                <th>发布时间</th>
                                <th>更新时间</th>
                                <th>发布人</th>
                                <th>置顶</th>
                                <th>审核状态</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                           <%-- <tr>
                                <td>1</td>
                                <td>参加活动</td>
                                <td>100</td>
                                <td>2017-09-03</td>
                                <td>2017-09-03</td>
                                <td>老蒋</td>
                                <td>未置顶</td>
                                <td>审核通过</td>
                                <td>
                                    <div class="btn-group">
                                        <a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;">
                                            编辑
                                            <span class="caret"></span>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="/view/contentmanager/activity/editActivity.jsp">编辑</a></li>
                                            <li><a href="#">置顶</a></li>
                                            <li><a href="#">删除</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>参加活动</td>
                                <td>100</td>
                                <td>2017-09-03</td>
                                <td>2017-09-03</td>
                                <td>老蒋</td>
                                <td>未置顶</td>
                                <td>审核通过</td>
                                <td>
                                    <div class="btn-group">
                                        <a class="dropdown-toggle" data-toggle="dropdown" style="color: #2aabd2;">
                                            编辑
                                            <span class="caret"></span>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="/view/contentmanager/activity/editActivity.jsp">编辑</a></li>
                                            <li><a href="#">置顶</a></li>
                                            <li><a href="#">删除</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>参加活动</td>
                                <td>100</td>
                                <td>2017-09-03</td>
                                <td>2017-09-03</td>
                                <td>老蒋</td>
                                <td>未置顶</td>
                                <td>审核通过</td>
                                <td>
                                    <div class="btn-group">
                                        <a class="dropdown-toggle" data-toggle="dropdown" style="color: #2aabd2;">
                                            编辑
                                            <span class="caret"></span>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="/view/contentmanager/activity/editActivity.jsp">编辑</a></li>
                                            <li><a href="#">置顶</a></li>
                                            <li><a href="#">删除</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>参加活动</td>
                                <td>100</td>
                                <td>2017-09-03</td>
                                <td>2017-09-03</td>
                                <td>老蒋</td>
                                <td>未置顶</td>
                                <td>审核通过</td>
                                <td>
                                    <div class="btn-group">
                                        <a class="dropdown-toggle" data-toggle="dropdown" style="color: #2aabd2;">
                                            编辑
                                            <span class="caret"></span>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="/view/contentmanager/activity/editActivity.jsp">编辑</a></li>
                                            <li><a href="#">置顶</a></li>
                                            <li><a href="#">删除</a></li>
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
        <script type="text/javascript" src="/js/pageScripts/content/activity/query_activity.js"></script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>

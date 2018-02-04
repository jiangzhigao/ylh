<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

    <style type="text/css">

        .move20{
            margin-right: -20px;
        }
        .dropdown-menu {
            min-width: 40px;
            width: 40px;
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
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.cnt_news_list;
</script>
<!-- START CONTENT -->
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">内容管理 / 咨询动态 / 资讯管理 </h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">资讯管理</h2>
                    <div class="actions panel_actions pull-right" style="line-height: 23px;">
                        <a href="addNews.jsp" class="btn btn-info" style="padding: 3px 6px;margin-top:9px;">
                            <span class="glyphicon glyphicon-plus"></span>
                        </a>
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                            <div class="row">
                                <div class="col-xs-2 move20">
                                    <input type="text" id="title" class="form-control" placeholder="请输入标题">
                                </div>

                                <div class="col-xs-2 move20">
                                    <select class="form-control" id="status" style="border-color: #e1e1e1;" placeholder="请选择咨询分类">
                                        <option value="">请选择资讯分类</option>
                                        <option value="0">社会</option>
                                        <option value="1">生活</option>
                                        <option value="2">法务</option>
                                        <option value="3">财务</option>
                                    </select>
                                </div>

                                <div class="col-xs-2">
                                    <%--<div class="form-group">--%>
                                    <div class="controls">
                                        <button id="btnSearch" type="button" class="btn btn-info">搜索</button>
                                        <button type="button" id="btnDel" class="btn btn-danger">删除</button>
                                    </div>
                                    <%--</div>--%>
                                </div>
                            </div>
                        </form>
                        <table class="table table-bordered table-hover" id="dataList">
                            <thead>
                            <tr>
                                <th><input id ="chkItemAll" name="chkItemAll" type="checkbox" style="width: 16px;height: 16px;" value="" /></th>
                                <th>ID</th>
                                <th>标题</th>
                                <th>分类</th>
                                <th>发布时间</th>
                                <th>更新时间</th>
                                <th>是否显示</th>
                                <th style="text-align:right;right: -100px">操作</th>
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
<script type="text/javascript" src="/js/pageScripts/content/information/news/query_news.js"></script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>

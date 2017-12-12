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
            background-color:#FFFFFF;
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

<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">案件管理 / 案件分类</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h4 class="title pull-left title-bold">案件分类</h4>
                <div class="actions panel_actions pull-right" style="line-height: 23px;">
                    <a href="addCaseClz_.jsp" class="add btn btn-info" style="padding: 3px 6px;margin-top:9px;">
                        <span class="glyphicon glyphicon-plus"></span>
                    </a>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-2 move20">
                                <input type="text" class="form-control" placeholder="案件分类名称">
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
                            <th>分类ID</th>
                            <th>分类名称</th>
                            <th>排序</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <%--<tr>
                            <td>1</td>
                            <td>X0001</td>
                            <td>1</td>
                            <td>启用</td>
                            <td>
                                <div class="btn-group">
                                    <a href="editCaseClz.jsp" style="color: #337AB7;">
                                        编辑
                                        &lt;%&ndash;<span class="caret"></span>&ndash;%&gt;
                                    </a>
                                </div>
                            </td>
                        </tr>--%>
                        </tbody>
                    </table>
                    <%--<div class="row">
                        <div class="col-xs-6" id="pageTotalRecord"></div>
                        <div class="col-xs-6">
                            <div class="dataTables_paginate paging_bootstrap" id="paginationContainer"> </div>
                        </div>
                    </div>--%>
                </div>
            </div>
        </section>
    </div>
</section>

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/pageScripts/legalcase/clz/case_clz_list_query.js"></script>
<!-- START FOOTER -->
<%--<%@ include file="/view/frame/footer.jsp"%>--%>
<!--  FOOTER - END -->
</body>

</html>

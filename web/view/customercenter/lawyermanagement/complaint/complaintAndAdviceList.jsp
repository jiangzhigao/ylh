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
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.l_complaintAndAdviceList;
    //alert(___system_navigation_config.nav.l_complaintAndAdviceList);
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">律师管理 / 投诉建议 </h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h4 class="title pull-left title-bold">投诉建议</h4>
                <div class="actions panel_actions pull-right">
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-2 move20">
                                <input type="text" id="userName" class="form-control" placeholder="账号">
                            </div>
                            <div class="col-xs-2 move20">
                                <select class="form-control" style="border-color: #e1e1e1;" id="status">
                                    <option value="">状态</option>
                                    <option value="0">未处理</option>
                                    <option value="1">已处理</option>
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
                            <th>账号</th>
                            <th>昵称</th>
                            <th>投诉建议</th>
                            <th>建议日期</th>
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
<!-- START FOOTER -->
<script type="text/javascript" src="/js/pageScripts/custom/lawyer/complaint/query_complaint.js"></script>
<!--  FOOTER - END -->
</body>

</html>

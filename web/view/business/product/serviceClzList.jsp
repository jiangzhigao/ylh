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
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.bz_service_clz_List;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">商务中心 / 商品管理 / 服务分类 </h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h4 class="title pull-left title-bold">服务分类列表</h4>
                <div class="actions panel_actions pull-right" style="line-height: 23px;">
                    <a href="addServiceClz.jsp" class="btn btn-info" style="padding: 3px 6px;margin-top:9px;" target="ylxmain">
                        <span class="glyphicon glyphicon-plus"></span>
                    </a>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-2 move20">
                                <select class="form-control" id="status" style="border-color: #e1e1e1;">
                                    <option value="">请选择类型</option>
                                    <option value="0">服务</option>
                                    <option value="1">预约</option>
                                </select>
                            </div>

                            <div class="col-xs-2">
                                <%--<div class="form-group">--%>
                                <div class="controls">
                                    <button id="btnSearch" type="button" class="btn btn-info">搜索</button>
                                    <button type="button" class="btn btn-danger" id="batchDelete">删除</button>
                                </div>
                                <%--</div>--%>
                            </div>
                        </div>
                    </form>
                    <table class="table table-bordered table-hover" id="dataList">
                        <thead>
                        <tr>
                            <th><input type="checkbox" id="allSelected" class="icheck-minimal-grey" name="" value=""/></th>
                            <th>类型</th>
                            <th>时长</th>
                            <th>费用</th>
                            <th>排序</th>
                            <th>更新时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <%-- <tr>
                             <td>服务</td>
                             <td>1年</td>
                             <td>5000</td>
                             <td>1</td>
                             <td>2017-08-08 15:30</td>
                             <td>
                                 <a href="editServiceClz.jsp" style="color: #337AB7;">
                                     编辑
                                 </a>
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
<script type="text/javascript" src="/js/pageScripts/business/prod/service_clz_list_query.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

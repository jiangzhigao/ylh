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
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.app_push_List;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">移动管理 / APP消息群发 </h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h4 class="title pull-left title-bold">推送列表</h4>
                <div class="actions panel_actions pull-right" style="line-height: 23px;">
                    <a href="addPushMessage_.jsp" class="btn btn-info" style="padding: 3px 6px;margin-top:9px;">
                        <span class="glyphicon glyphicon-plus"></span>
                    </a>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-2 move20">
                                <select class="form-control" id="status1" style="border-color: #e1e1e1;">
                                    <option value="">请选择APP</option>
                                    <option value="0">用户端</option>
                                    <option value="1">律师端</option>
                                </select>
                            </div>
                            <div class="col-xs-2 move20">
                                <select class="form-control" id="status2" style="border-color: #e1e1e1;">
                                    <option value="">是否已推送</option>
                                    <option value="0">未推送</option>
                                    <option value="1">已推送</option>
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
                            <th>APP</th>
                            <th>标题</th>
                            <th>消息内容</th>
                            <th>消息创建时间</th>
                            <th>APP推送时间</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <%--<tr>
                            <td>律师端</td>
                            <td>APP律师端上线啦</td>
                            <td>APP律师端上线啦，欧耶</td>
                            <td>2017-08-08</td>
                            <td>2017-08-08</td>
                            <td>已推送</td>
                            <td>-</td>
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
<script type="text/javascript" src="/js/pageScripts/mobile/message/list_query.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

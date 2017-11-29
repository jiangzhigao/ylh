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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.app_client_recommend_List;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">移动管理 / 客户端首页推荐列表 </h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h4 class="title pull-left">客户端首页推荐列表</h4>
                    <div class="actions panel_actions pull-right" style="line-height: 23px;">
                        <a href="addRecommendPage.jsp" class="btn btn-info" style="padding: 3px 6px;margin-top:9px;">
                            <span class="glyphicon glyphicon-plus"></span>
                        </a>
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <%--<form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">

                        </form>
                        <br>--%>
                        <table class="table table-bordered table-hover" id="dataList">
                            <thead>
                            <tr>
                                <th>标题</th>
                                <th>Banner</th>
                                <th>链接类型</th>
                                <th>发布时间</th>
                                <th>更新时间</th>
                                <th>排序</th>
                                <th>是否显示</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <%--<tr>
                                <td>客户端</td>
                                <td width="120px;">
                                    <div class="profile-image">
                                        <img src="/images/user.png" class="" style="width: 80%;" />
                                    </div>
                                </td>
                                <td>站内</td>
                                <td>2017-08-08</td>
                                <td>2017-08-08</td>
                                <td>1</td>
                                <td>显示</td>
                                <td>
                                    <a href="editRecommendPage.jsp" style="color: #337AB7;">
                                        编辑
                                        <span class="caret"></span>
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

</section>
<!-- END CONTENT -->
</div>
<!-- END CONTAINER -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/pageScripts/mobile/recommend/client/list_query.js"></script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>

<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

    <style type="text/css">

        .move20{
            margin-right: -20px;
        }
        .dropdown-menu {
            min-width: 65px;
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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.resume_student_List;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">简历管理 / 学生简历 </h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h4 class="title pull-left title-bold">学生简历列表</h4>
                <div class="actions panel_actions pull-right" style="line-height: 23px;">
                   <%-- <a href="" class="btn btn-info" style="padding: 3px 6px;margin-top:9px;">
                        <span class="glyphicon glyphicon-plus"></span>
                    </a>--%>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">

                    </form>
                    <table class="table table-bordered table-hover" id="dataList" style="table-layout:fixed;">
                        <thead>
                        <tr>
                            <th>学校</th>
                            <th>专业</th>
                            <th>联系方式</th>
                            <th>专长描述</th>
                            <th>毕业时间</th>
                            <th>生日</th>
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
<script type="text/javascript" src="/js/pageScripts/resume/student/list_query.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

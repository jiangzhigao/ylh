<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

    <style type="text/css">
        .move20{
            margin-right: -20px;
        }
        .dropdown-menu {
            min-width: 45px;
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
<!-- START TOPBAR -->
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.mc_speciality_list;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">律师管理 / 专业领域 </h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h4 class="title pull-left title-bold">专业领域</h4>
                <div class="actions panel_actions pull-right" style="line-height: 23px;">
                    <a href="addspeciality_.jsp" class="btn btn-info" style="padding: 3px 6px;margin-top:9px;">
                        <span class="glyphicon glyphicon-plus"></span>
                    </a>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <table class="table table-bordered table-hover" id="dataList">
                        <thead>
                        <tr>
                            <th>专业领域名称</th>
                            <th>排序</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <%-- <tr>
                              <td>民商诉讼</td>
                              <td>1</td>
                              <td>
                                  <div class="btn-group">
                                      <a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;">
                                          编辑
                                          <span class="caret"></span>
                                      </a>
                                      <ul class="dropdown-menu" role="menu">
                                          <li><a href="/view/customercenter/lawyermanagement/speciality/addspeciality.jsp">编辑</a></li>
                                      </ul>
                                      <ul class="dropdown-menu" role="menu">
                                          <li><a href="">删除</a></li>
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
<!-- END CONTENT -->
</div>
<!-- END CONTAINER -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/pageScripts/custom/lawyer/speciality/query_speciality.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>
    <link rel="stylesheet"
          href="/js/plugins/ztree/css/demo.css" type="text/css">
    <link rel="stylesheet"
          href="/js/plugins/ztree/css/metroStyle/metroStyle.css"
          type="text/css">
   <%-- <link rel="stylesheet"
          href="/js/plugins/ztree/css/zTreeStyle/zTreeStyle.css"
          type="text/css">--%>

    <style type="text/css">

        .move40{
            margin-right: -60px;
        }
        .dropdown-menu {
            min-width: 220px;
            width: 160px;
        }
        a:hover {
            text-decoration: none;
        }
        .divider-dotted{
            width: 100%;border:1px dashed #e8e8e8
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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.sys_permission_role_list;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">系统管理 / 权限管理</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">添加用户组</h2>
                    <div class="pull-right">
                        <div id="page_alert_container"></div>
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_add" action="#" method="post" novalidate="novalidate">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="title">用户组名称</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" id="title" name="title"
                                                   value=""  maxlength="20">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="title">排序</label>
                                        <div class="col-xs-4">
                                            <input type="password" class="form-control" id="title" name="title"
                                                   value=""  maxlength="20">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="commisionName">用户组描述</label>
                                        <div class="col-xs-4">
                                            <textarea id="" name="" maxlength="128" class="bootstrap-wysihtml5-textarea" placeholder="" style="width: 100%; height: 80px; font-size: 14px; line-height: 23px;padding:15px;"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <%--<div class="clearfix"></div>--%>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        <div class="col-xs-12">
            <section class="box " style="margin-top: -13px;">
                <header class="panel_header">
                    <h2 class="title pull-left">权限分配</h2>
                    <span class="desc" style="display: inline-block;margin-top: 20px;">（说明: 由于用户默认进入后台首页，所以用户默认会有后台 "首页" 权限）</span>
                    <div class="pull-right">
                        <div id="page_alert_container"></div>
                    </div>
                </header>
                <div class="content-body" style="padding-top:10px;">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_add" action="#" method="post" novalidate="novalidate">
                            <!-- 权限资源树 -->
                            <ul id="permissionsTree" class="ztree" style="width: 100%;overflow: auto;background-color: #fff;border:0;margin-left: 35px;"></ul>


                            <div class="divider-dotted"></div>
                            <br>

                            <div class="clearfix"></div>
                            <div class="row">
                                <div class="col-xs-3">
                                </div>
                                <div class="col-xs-5">
                                    <div class="form-group">
                                        <div class="controls">
                                            <button type="button" class="btn btn-info" id="btnSave">保存</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
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
<script type="text/javascript"
        src="/js/plugins/ztree/js/jquery.ztree.core.min.js"></script>
<script type="text/javascript"
        src="/js/plugins/ztree/js/jquery.ztree.excheck.js"></script>
<script type="text/javascript"
        src="/js/plugins/ztree/js/jquery.ztree.exedit.js"></script>
<%--<script type="text/javascript"
        src="/js/pageScripts/sys/permission/permissions_tree.js"></script>--%>

<script type="text/javascript">
    var setting = {
        view: {
            selectedMulti: false,
            showIcon:false,

        },
        callback: {
        },
        check: {
            enable: true
        },
        data: {
            key : {
                checked:"isChecked"
            },
            simpleData: {
                enable: true,
                idKey: "id", //修改默认的ID为自己的ID
                pIdKey: "pId",//修改默认父级ID为自己数据的父级ID
                rootPId: 0     //根节点的ID
            }
        }
    };

    var zNodes = [
        { id: 3, pId: 0, name: "首页" },
        { id: 1, pId: 0, name: "随意勾选 1" },
        { id: 11, pId: 1, name: "随意勾选 1-1" },
        { id: 111, pId: 11, name: "随意勾选 1-1-1" },
        { id: 112, pId: 11, name: "随意勾选 1-1-2" },
        { id: 12, pId: 1, name: "随意勾选 1-2" },
        { id: 121, pId: 12, name: "随意勾选 1-2-1" },
        { id: 122, pId: 12, name: "随意勾选 1-2-2" },
        { id: 2, pId: 0, name: "随意勾选 2" },
        { id: 21, pId: 2, name: "随意勾选 2-1" },
        { id: 22, pId: 2, name: "随意勾选 2-2" },
        { id: 221, pId: 22, name: "随意勾选 2-2-1" },
        { id: 222, pId: 22, name: "随意勾选 2-2-2" },
        { id: 23, pId: 2, name: "随意勾选 2-3" }
    ];

    $(document).ready(function(){
        var permissionsTree = $.fn.zTree.init($("#permissionsTree"), setting, zNodes);
        permissionsTree.expandAll(true);
    });
</script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>


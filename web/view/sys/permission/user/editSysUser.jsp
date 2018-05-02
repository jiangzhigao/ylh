<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

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
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.sys_permission_user_list;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">系统管理 / 权限管理</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left">修改管理员</h2>
                <div class="pull-right">
                    <div id="page_alert_container"></div>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_edit" action="#" method="post" novalidate="novalidate">
                        <input id="dataId" type="hidden">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="userName1">用户名</label>
                                    <div class="col-xs-4">
                                        <input type="text" class="form-control" placeholder="请输入用户名" id="userName1" name="userName1" maxlength="20" autocomplete="off">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="userPassword1">密码</label>
                                    <div class="col-xs-4">
                                        <input type="password" class="form-control" placeholder="请输入密码" id="userPassword1" name="userPassword1" maxlength="20" autocomplete="off">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="reuserPassword1">确认密码</label>
                                    <div class="col-xs-4">
                                        <input type="password" class="form-control" placeholder="请输入确认密码" id="reuserPassword1" name="reuserPassword1" maxlength="20" autocomplete="off">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="name">真实姓名</label>
                                    <div class="col-xs-4">
                                        <input type="text" class="form-control" placeholder="请输入真实姓名" id="name" name="name"
                                               value=""  maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">状态</label>
                                    <div class="col-xs-5" style="padding-top: 5px;">
                                        <input type="radio" class="" value="1" id="status_normal" name="status" checked="">正常
                                        &nbsp;&nbsp;
                                        <input type="radio" class="" value="0" id="status_blocked" name="status">锁定
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="userGroupId">用户组</label>
                                    <div class="col-xs-4">
                                        <select class="form-control" style="border-color: #e1e1e1;" id="userGroupId">
                                            <option value="1">测试用户</option>
                                            <option value="0">超级管理员</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="memo">备注</label>
                                    <div class="col-xs-4">
                                        <textarea id="memo" name="memo" maxlength="256" class="bootstrap-wysihtml5-textarea" placeholder="" style="width: 100%; height: 100px; font-size: 14px; line-height: 23px;padding:15px;"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
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
<!-- END CONTENT -->
</div>
<!-- END CONTAINER -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
<script type="text/javascript" src="/js/pageScripts/sys/permission/user/edit_user.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<script type="text/javascript" src="/js/custom/md5.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>


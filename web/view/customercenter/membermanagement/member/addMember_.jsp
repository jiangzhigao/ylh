<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

    <style type="text/css">

        .move40{
            margin-right: -60px;
        }
        .dropdown-menu {
            min-width: 100px;
            width: 90px;
        }
        a:hover {
            text-decoration: none;
        }
        .divider-dotted{
            width: 100%;border:1px dashed #e8e8e8
        }

        .img-upload .img-upload-file{
            width: 135px;
            height: 35px;
            cursor: pointer;
            font-size: 23px;
            outline: medium none;
            position: absolute;
            filter:alpha(opacity=0);
            -moz-opacity:0;
            opacity:0;
            left:0px;
            top: 0px;
            padding: 7px 18px;
        }
    </style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class=" boxed">
<!-- START TOPBAR -->
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.mc_member_list;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">客户中心 / 会员管理 / 添加会员</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left title-bold">添加会员</h2>
                <div class="actions panel_actions pull-right">
                    <div id="page_alert_container"></div>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_add" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="userName">手机号</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" placeholder="请输入手机号" value="" id="userName" name="userName"
                                               maxlength="11">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <%--<div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="type">委托类型</label>
                                    <div class="col-xs-5">
                                        <select class="form-control" id="type" name="type" style="border-color: #e1e1e1;">
                                            <option value="0" selected>平台案件委托</option>
                                            <option value="1">平台文书委托</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>--%>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="userPassword">密码</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" placeholder="请输入密码" value="" id="userPassword" name="userPassword"
                                               maxlength="16">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="name">真实姓名</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" placeholder="请输入真实姓名" value="" id="name" name="name"
                                               maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="nickname">昵称</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" placeholder="请输入昵称" value="" id="nickname" name="nickname"
                                               maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">用户头像</label>
                                    <div class="col-xs-5" style="margin-left: -15px;">
                                        <div class="col-xs-1">
                                            <div class="img-upload">
                                                <input type="hidden" id="coverUrl" value="" name="coverUrl"/>
                                                <button id="btnSearch" type="button" class="btn btn-primary">点击添加或修改</button>
                                                <input type="file" class="img-upload-file" id="lcimage_upload" name="lcimage_upload" mid="coverImage" uid="coverUrl">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-offset-2 col-xs-10">
                                <div class="form-group col-xs-5" style="max-width: 400px;max-height: 300px;display: none;" id="imgBox">
                                    <img src="/images/nopica.png" class="img-thumbnail" id="coverImage"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="mobile">附加手机</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" placeholder="请输入附加手机号" value="" id="mobile" name="mobile"
                                               maxlength="11">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="email">邮箱</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" placeholder="请输入邮箱" value="" id="email" name="email"
                                               maxlength="36">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="idcard">身份证编号</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" placeholder="请输入身份证编号" value="" id="idcard" name="idcard"
                                               maxlength="18">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="userPassword">状态</label>
                                    <div class="col-xs-5" style="padding-top: 5px;">
                                        <input type="radio" class="" value="1" id="status_normal" name="status" checked>正常
                                        &nbsp;&nbsp;
                                        <input type="radio" class="" value="0" id="status_blocked" name="status">冻结
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
<script type="text/javascript" src="/js/pageScripts/custom/member/add_member.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>


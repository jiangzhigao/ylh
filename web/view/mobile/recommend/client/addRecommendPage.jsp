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
            <h4 class="title pull-left" style="font-size: 15px;">移动管理 / 客户端首页推荐管理</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">添加客户端首页推荐</h2>
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
                                        <label class="col-xs-2 control-label" for="commisionName">标题</label>
                                        <div class="col-xs-5">
                                            <input type="text" class="form-control" placeholder="请输入标题" value="" id="commisionName" name="commisionName"
                                                   maxlength="20" id="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="commisionName">描述</label>
                                        <div class="col-xs-5">
                                            <textarea id="" name="" maxlength="128" class="bootstrap-wysihtml5-textarea" placeholder="" style="width: 100%; height: 120px; font-size: 14px; line-height: 23px;padding:15px;"></textarea>
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
                                        <label class="col-xs-2 control-label">Banner图</label>
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
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">链接类型</label>
                                        <div class="col-xs-5" style="padding-top: 5px;">
                                            <input type="radio" class="" value="1" id="typel" name="status" checked>站内
                                            &nbsp;&nbsp;
                                            <input type="radio" class="" value="0" id="type2" name="status">站外
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="type">站内链接模块</label>
                                        <div class="col-xs-5">
                                            <select class="form-control" id="type" name="type" style="border-color: #e1e1e1;">
                                                <option value="" selected>请选择站内链接模块</option>
                                                <option value="0">律师详情</option>
                                                <option value="1">资讯</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="commisionName">跳转链接</label>
                                        <div class="col-xs-5">
                                            <input type="text" class="form-control" placeholder="请输入跳转链接" value="" id="commisionName" name="commisionName"
                                                   maxlength="20" id="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="commisionName">排序</label>
                                        <div class="col-xs-5">
                                            <input type="text" class="form-control" placeholder="请输入排序" value="" id="commisionName" name="commisionName"
                                                   maxlength="20" id="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <%--<div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">内容</label>
                                        <div class="col-xs-9">
                                            <script id="editor" type="text/plain"></script>
                                        </div>
                                    </div>
                                </div>
                            </div>--%>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">是否显示</label>
                                        <div class="col-xs-5" style="padding-top: 5px;">
                                            <input type="radio" class="" value="1" id="status_normal" name="status" checked>显示
                                            &nbsp;&nbsp;
                                            <input type="radio" class="" value="0" id="status_blocked" name="status">隐藏
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
                                            <button type="button" class="btn btn-info" id="btnSave">保存</button>&nbsp;&nbsp;
                                            <button type="button" class="btn btn-default" id="btnReset">重置</button>
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
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>


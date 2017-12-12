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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.app_client_recommend_List;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">移动管理 / 客户端首页推荐管理</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left title-bold">客户端首页推荐详情</h2>
                <div class="pull-right">
                    <div id="page_alert_container"></div>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_edit" action="#" method="post" novalidate="novalidate">
                        <input type="hidden" id="dataId">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="title">标题</label>
                                    <div class="col-xs-4">
                                        <input type="text" class="form-control" placeholder="请输入标题" id="title" name="title"
                                               maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="desc">描述</label>
                                    <div class="col-xs-4">
                                        <textarea id="desc" name="desc" maxlength="128" class="bootstrap-wysihtml5-textarea" placeholder="" style="width: 100%; height: 60px; font-size: 14px; line-height: 23px;padding:15px;"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">Banner图</label>
                                    <div class="col-xs-4" style="margin-left: -15px;">
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
                                <div class="form-group col-xs-12" style="max-width: 700px;max-height: 370px;display: none;" id="imgBox">
                                    <img src="/images/nopica.png" class="img-thumbnail" id="coverImage"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">链接类型</label>
                                    <div class="col-xs-4" style="padding-top: 5px;">
                                        <input type="radio" class="" value="0" id="typel" name="linkType" checked>站内
                                        &nbsp;&nbsp;
                                        <input type="radio" class="" value="1" id="type2" name="linkType">站外
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="linkModule">站内链接模块</label>
                                    <div class="col-xs-4">
                                        <select class="form-control" id="linkModule" name="linkModule" style="border-color: #e1e1e1;">
                                            <option value="" selected>请选择站内链接模块</option>
                                            <option value="0">资讯</option>
                                            <option value="1">律师详情（用户端）, 最新案件详情（律师端）</option>
                                            <option value="2">律师活动</option>
                                            <option value="3">律师话题</option>
                                            <option value="4">动态</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="jumpLink">跳转链接</label>
                                    <div class="col-xs-4">
                                        <input type="text" class="form-control" placeholder="请输入跳转链接" id="jumpLink" name="jumpLink"
                                               maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="sortNo">排序</label>
                                    <div class="col-xs-4">
                                        <input type="text" class="form-control" placeholder="请输入排序" id="sortNo" name="sortNo"
                                               maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">是否显示</label>
                                    <div class="col-xs-4" style="padding-top: 5px;">
                                        <input type="radio" class="" value="1" id="status_normal" name="isDisplay" checked>显示
                                        &nbsp;&nbsp;
                                        <input type="radio" class="" value="0" id="status_blocked" name="isDisplay">隐藏
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
                            <div class="col-xs-4">
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
<!-- END CONTENT -->
</div>
<!-- END CONTAINER -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
<script type="text/javascript" src="/js/pageScripts/mobile/recommend/client/edit_recommend_page.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>


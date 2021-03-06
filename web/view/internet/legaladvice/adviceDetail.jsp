<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>
    <script type="text/javascript" charset="utf-8" src="/js/ueditor/ueditor.config.js"></script>
    <script type="text/javascript" charset="utf-8" src="/js/ueditor/ueditor.all.js"></script>
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
    </style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class=" boxed">
<!-- START TOPBAR -->
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.internet_legal_advice_List;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">网站管理 / 法律咨询管理 / 法律咨询详情</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left">法律咨询详情</h2>
                <div class="actions panel_actions pull-right">
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_edit" action="#" method="post" novalidate="novalidate">
                        <input type="hidden" id="status-tag">
                        <input type="hidden" id="dataId">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">姓名</label>
                                    <div class="col-xs-5">
                                        <label class="control-label" id="name" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">电话</label>
                                    <div class="col-xs-5">
                                        <label class="control-label" id="telephone" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">邮箱</label>
                                    <div class="col-xs-5">
                                        <label class="control-label" id="email" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">咨询类别</label>
                                    <div class="col-xs-5">
                                        <label class="control-label" id="typeName" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">咨询时间</label>
                                    <div class="col-xs-5">
                                        <label class="control-label" id="createdTime" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">咨询内容</label>
                                    <div class="col-xs-5">
                                        <textarea id="content" name="content" maxlength="256" disabled class="bootstrap-wysihtml5-textarea" placeholder="" style="width: 100%; height: 100px; font-size: 14px; line-height: 23px;padding:15px;"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">设备</label>
                                    <div class="col-xs-5">
                                        <label class="control-label" id="device" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label" >状态</label>
                                    <div class="col-xs-5" style="padding-top: 5px;">
                                        <input type="radio" class="" value="1" id="status_normal" name="isDealed" checked="">已处理
                                        &nbsp;&nbsp;
                                        <input type="radio" class="" value="0" id="status_blocked" name="isDealed">未处理
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">备注</label>
                                    <div class="col-xs-5">
                                        <textarea id="memo" name="memo" maxlength="256" class="bootstrap-wysihtml5-textarea" placeholder="" style="width: 100%; height: 100px; font-size: 14px; line-height: 23px;padding:15px;"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="divider-dotted"></div>
                        <br>

                        <div class="clearfix"></div>
                        <div class="row" id="divRevoke">
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
<script type="text/javascript" src="/js/pageScripts/internet/legaladvice/edit_adviceDetail.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

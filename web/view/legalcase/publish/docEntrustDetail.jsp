<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>
    <script type="text/javascript" charset="utf-8" src="${webBasePath}/js/ueditor/ueditor.config.js"></script>
    <script type="text/javascript" charset="utf-8" src="${webBasePath}/js/ueditor/ueditor.all.js"></script>
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
<%@ include file="/view/frame/topbar.jsp"%>
<!-- END TOPBAR -->
<!-- START SIDEBAR -->
<%@ include file="/view/frame/sidebar.jsp"%>
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.p_doc_entrust_list;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">案件管理 / 平台发布 / 文书委托 / 文书详情</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">文书详情</h2>
                    <div class="actions panel_actions pull-right">
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                            <%--<div class="row">
                                <div class="col-xs-4">
                                    <div class="form-group">
                                        <label class="col-xs-6 control-label">订单编号</label>
                                        <div class="col-xs-6">
                                            <label class="col-xs-3 control-label">D00000000000001</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xs-1">
                                    &lt;%&ndash;<div class="form-group">&ndash;%&gt;
                                        <div class="controls">
                                            <button id="btnSearch" type="button" class="btn btn-primary">查看订单</button>
                                        </div>
                                    &lt;%&ndash;</div>&ndash;%&gt;
                                </div>
                            </div>--%>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">委托名称</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="commisionName"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">委托人</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="commisionClient"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">联系方式</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="contactPhone"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">委托时间</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="createdTime"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">案件标的</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="caseAmount"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">代理费用</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="agencyFee"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">案件详情</label>
                                        <div class="col-xs-9">
                                            <script id="editor" type="text/plain"></script>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">图片</label>
                                        <div class="col-xs-5" style="max-width: 400px;max-height: 300px;" id="imgBox">
                                            <img src="/images/nopica.png" class="img-thumbnail" id="coverImage"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">案件进度</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="statusTxt"></label>
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
                                            <button type="button" class="btn btn-info" id="btnRevoke">作废</button>
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
<script type="text/javascript" src="/js/pageScripts/legalcase/publish/doc_entrust_detail.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>

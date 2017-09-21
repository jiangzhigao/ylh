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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.mc_feedback_list;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">会员管理 / 投诉建议 / 投诉建议详情</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">详情</h2>
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
                                        <label class="col-xs-2 control-label">手机号</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="commisionName">13901234567</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">昵称</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="commisionClient">王麻子</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">内容</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="contactPhone">有点问题</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">日期</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="createdTime">2017-08-08 15:30:30</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">状态</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="caseAmount">已处理</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">操作</label>
                                        <div class="col-xs-5">
                                            <button type="button" class="btn btn-info" id="btnNotApprove">已处理</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <%--<div class="divider-dotted"></div>
                            <br>

                            <div class="clearfix"></div>
                            <div class="row">
                                <div class="col-xs-3">
                                </div>
                                <div class="col-xs-5">
                                    <div class="form-group">
                                        <div class="controls">
                                            <button type="button" class="btn btn-info" id="btnNotApprove">已处理</button>
                                        </div>
                                    </div>
                                </div>
                            </div>--%>
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

<!-- select lawyer modal start -->
<%@ include file="/view/legalcase/publish/selectLawyerModal.jsp"%>
<!-- select lawyer modal end -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/pageScripts/legalcase/publish/case_entrust_detail.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>

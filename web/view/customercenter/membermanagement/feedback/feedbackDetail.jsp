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
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.mc_feedback_list;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">会员管理 / 投诉建议 / 投诉建议详情</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left title-bold">详情</h2>
                <div class="actions panel_actions pull-right">
                    <div id="page_alert_container"></div>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">手机号</label>
                                    <div class="col-xs-5">
                                        <label class="control-label" id="userName" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">昵称</label>
                                    <div class="col-xs-5">
                                        <label class="control-label" id="nickname" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">内容</label>
                                    <div class="col-xs-5" style="font-weight: 500;" id="content">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">日期</label>
                                    <div class="col-xs-5">
                                        <label class="control-label" id="createdTime" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">状态</label>
                                    <div class="col-xs-5">
                                        <label class="control-label" id="status" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="display: none;" id="excRow">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">操作</label>
                                    <div class="col-xs-5">
                                        <button type="button" class="btn btn-info" id="btnExc">处理</button>
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

<!-- select lawyer modal start -->
<%--<%@ include file="/view/legalcase/publish/selectLawyerModal.jsp"%>--%>
<!-- select lawyer modal end -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/pageScripts/custom/member/complaint/detail.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

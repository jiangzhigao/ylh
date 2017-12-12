<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

    <style type="text/css">

        .move40{
            margin-right: -60px;
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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.bz_service_order_List;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">商务中心 / 订单管理</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left title-bold">服务订单详情</h2>
                <div class="pull-right">
                    <div id="page_alert_container"></div>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_add" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">订单号</label>
                                    <div class="col-xs-2">
                                        <label class="control-label" id="orderNo" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">时长</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" id="duration" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">客户</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" id="userId" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">订单金额</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" id="totalAmount" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">下单时间</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" id="orderTime" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">订单状态</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" id="orderStatus" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="divider-dotted"></div>
                        <br>

                        <div class="clearfix"></div>
                        <div class="row" id="optionsBtn" style="display: none;">
                            <div class="col-xs-3">
                            </div>
                            <div class="col-xs-5">
                                <div class="form-group">
                                    <div class="controls">
                                        <button type="button" class="btn btn-danger" id="btn25">2.5:7.5分红</button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-danger" id="btn35">3.5:6.5分红</button>
                                        &nbsp;&nbsp;
                                        <button type="button" class="btn btn-danger" id="btn100">10:0分红</button>
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
<script type="text/javascript" src="/js/pageScripts/business/order/service/order_detail.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>


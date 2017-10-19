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
<%@ include file="/view/frame/topbar.jsp"%>
<!-- END TOPBAR -->
<!-- START SIDEBAR -->
<%@ include file="/view/frame/sidebar.jsp"%>
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.sys_settings_coupon_rule_list;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">系统管理 / 基础设置 / 银行编码设置</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">添加抵用券规则</h2>
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
                                        <label class="col-xs-2 control-label" for="amount">区间最小金额</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" id="amount" name="amount"
                                                   value=""  maxlength="20">
                                        </div>
                                        <div class="col-xs-4" style="padding-top: 5px;margin-left: -20px;">
                                            元
                                            <span class="desc" style="margin-left: -1px;">（最小金额为0或空，代表不限制最小金额）</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="amount">区间最大金额</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" id="amount" name="amount"
                                                   value=""  maxlength="20">
                                        </div>
                                        <div class="col-xs-4" style="padding-top: 5px;margin-left: -20px;">
                                            元
                                            <span class="desc" style="margin-left: -1px;">（最大金额为0或空，代表不限制最大金额）</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="amount">使用比例</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" id="amount" name="amount"
                                                   value=""  maxlength="20">
                                        </div>
                                        <div class="col-xs-4" style="padding-top: 5px;margin-left: -20px;">
                                            %
                                            <span class="desc" style="margin-left: -1px;">（使用比例为0或空，代表不能使用优惠券）</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="amount">最高限额</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" id="amount" name="amount"
                                                   value=""  maxlength="20">
                                        </div>
                                        <div class="col-xs-4" style="padding-top: 5px;margin-left: -20px;">
                                            元
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="aaa">状态</label>
                                        <div class="col-xs-5" style="padding-top: 5px;">
                                            <input type="radio" class="" value="1" id="status_normal" name="status" checked="">启用
                                            &nbsp;&nbsp;
                                            <input type="radio" class="" value="0" id="status_blocked" name="status">停用
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
                                            &nbsp;&nbsp;
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
<script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
<!--  FOOTER - END -->
</body>

</html>


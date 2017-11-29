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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.app_version_List;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">移动管理 / APP更新设置</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">修改数据</h2>
                    <div class="pull-right">
                        <div id="page_alert_container"></div>
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_add" action="#" method="post" novalidate="novalidate">
                            <input type="hidden" id="dataId">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="type">APP</label>
                                        <div class="col-xs-4">
                                            <select class="form-control" id="type" name="type" style="border-color: #e1e1e1;">
                                                <option value="0">用户端</option>
                                                <option value="1">律师端</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="androidVersion">安卓最新版本号</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" placeholder="请输入安卓最新版本号" id="androidVersion" name="androidVersion"
                                                   maxlength="20">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="androidUpdatedTime">安卓版本更新时间</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" placeholder="请输入安卓版本更新时间" id="androidUpdatedTime" name="androidUpdatedTime"
                                                   maxlength="20">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="androidUrl">安卓更细地址</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" placeholder="请输入安卓更细地址" id="androidUrl" name="androidUrl"
                                                   maxlength="20">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="iosVersion">IOS最新版本号</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" placeholder="请输入IOS最新版本号" id="iosVersion" name="iosVersion"
                                                   maxlength="20">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="iosUpdatedTime">IOS版本更新时间</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" placeholder="请输入IOS版本更新时间" id="iosUpdatedTime" name="iosUpdatedTime"
                                                   maxlength="20">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="iosUrl">IOS苹果商店更细地址</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" placeholder="请输入IOS苹果商店更细地址" id="iosUrl" name="iosUrl"
                                                   maxlength="20">
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
                                            <button type="button" class="btn btn-info" id="btnSave">确定修改</button>
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
<script type="text/javascript">
    //日期控件
    $("#androidUpdatedTime,#iosUpdatedTime").datepicker({
        autoclose: true,
        clearBtn: true,
        forceParse: true,
        format: 'yyyy-mm-dd',
        language: 'cn',
        startView: 0,
        todayBtn: true,
        todayHighlight: false,
        weekStart: 1,
        /*endDate:'+1',*///结束时间，在这时间之后都不可选
    });
</script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<script type="text/javascript" src="/js/pageScripts/mobile/version/list_query.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
<script type="text/javascript" src="/js/pageScripts/mobile/version/edit_app_version.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<!--  FOOTER - END -->
</body>

</html>


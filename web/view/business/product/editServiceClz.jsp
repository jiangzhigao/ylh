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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.bz_service_clz_List;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">商务中心 / 商品管理</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left title-bold">编辑服务分类</h2>
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
                                    <label class="col-xs-2 control-label" for="type">类型</label>
                                    <div class="col-xs-4">
                                        <select class="form-control" id="type" name="type" style="border-color: #e1e1e1;">
                                            <option value="" selected>请选择类型</option>
                                            <option value="0">服务</option>
                                            <option value="1">预约</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="duration">时长</label>
                                    <div class="col-xs-4">
                                        <input type="text" class="form-control" placeholder="请输入时长" id="duration" name="duration"
                                               value="" maxlength="20">
                                    </div>
                                    <span style="display:block;">服务时长单位是: 月 ; 预约时长单位是: 小时</span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label" for="fee">费用</label>
                                    <div class="col-xs-4">
                                        <input type="text" class="form-control" placeholder="请输入费用" id="fee" name="fee"
                                               value="" maxlength="20">
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
                                               value=""  maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">发布时间</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" id="publishTime" style="font-weight: 500;"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">更新时间</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" id="updateTime" style="font-weight: 500;"></label>
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
                                        <button type="button" class="btn btn-danger" id="btnDel">删除</button>
                                        &nbsp;&nbsp;
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
<script type="text/javascript" src="/js/pageScripts/business/prod/edit_service_clz.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>


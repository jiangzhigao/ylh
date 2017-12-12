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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.c_case_entrust_list;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">案件管理 / 案件委托 / 案件详情</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left title-bold">案件详情</h2>
                <div class="actions panel_actions pull-right">
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_add" action="#" method="post" novalidate="novalidate">
                        <input type="hidden" id="status-tag">
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
                                        <input type="text" class="form-control" placeholder="请输入委托名称" id="commisionName" name="commisionName"
                                               maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">委托人</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" placeholder="请输入委托人" id="commisionClient" name="commisionClient"
                                               maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">联系方式</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" placeholder="请输入联系方式" id="contactPhone" name="contactPhone"
                                               maxlength="20">
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
                                        <input type="text" class="form-control" placeholder="请输入案件标的" id="caseAmount" name="caseAmount"
                                               maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">代理费用</label>
                                    <div class="col-xs-5">
                                        <input type="text" class="form-control" placeholder="请输入代理费用" id="agencyFee" name="agencyFee"
                                               maxlength="20">
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
                                    <label class="col-xs-2 control-label" id="picDtl"></label>
                                    <div class="col-xs-5" style="max-width: 300px;" id="imgBox">
                                        <img src="/images/nopica.png" class="img-thumbnail" id="coverImage"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="editPic">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">图片</label>
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
                                        <button type="button" class="btn btn-info" style="display: none" id="btnSave">保存</button>
                                        <button type="button" class="btn btn-info" style="display: none" id="btnSaveAndPub">保存且发布</button>
                                        <button type="button" class="btn btn-info" style="display: none" id="btnRevoke">作废</button>
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
<%@ include file="/view/legalcase/publish/selectLawyerModal.jsp"%>
<!-- select lawyer modal end -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
<script type="text/javascript" src="/js/pageScripts/legalcase/entrust/temp_case_entrust_detail.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

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
                    <h4 class="title pull-left title-bold">文书详情</h4>
                    <div class="actions panel_actions pull-right">
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                            <input type="hidden" id="dataId">
                            <input type="hidden" id="status-tag">
                            <div class="row" id="orderCode" style="display: none;">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">订单编号</label>
                                        <div class="col-xs-2" style="margin-right: -40px;">
                                            <label class="control-label" id="orderNo" style="font-weight: 500;"></label>
                                        </div>
                                        <div class="col-xs-1">
                                            <div class="controls">
                                                <a href="#" class="btn btn-primary" id="orderDtl">查看订单</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">委托名称</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="commisionName" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">委托人</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="commisionClient" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">联系方式</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="contactPhone" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">委托时间</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="createdTime" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" id="agentLawyerRow" style="display: none;">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">代理律师</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="agentLawyer" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">案件标的</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="caseAmount" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">代理费用</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="agencyFee" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">案件详情</label>
                                        <div class="col-xs-9" style="margin-top: 7px;margin-bottom: 7px;text-align: left;font-weight: 500;" id="editor">
                                            <%--<script id="editor" type="text/plain"></script>--%>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label" id="picDtl">图片</label>
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
                                            <label class="control-label" id="statusTxt" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" id="lawyerList" style="display: none;">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">参与律师</label>
                                        <div class="col-xs-1">
                                            <label class="control-label" id="lawyerNum"></label>
                                        </div>
                                        <div class="col-xs-1">
                                            <div class="controls">
                                                <button id="btnSlSearch" type="button" class="btn btn-primary" data-toggle="modal" data-target="#lawyerModal">点击查看</button>
                                            </div>
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
                                            <button type="button" class="btn btn-info" id="btnRevoke" style="display: none;">作废</button>
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
<!-- select lawyer modal start -->
<%@ include file="/view/legalcase/publish/selectLawyerModal.jsp"%>
<!-- select lawyer modal end -->
<!-- END CONTAINER -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script src="/js/custom/hashMap.js" type="text/javascript"></script>
<script type="text/javascript">
    /** 待选择律师集合 */
    var sltLawyerMap = new Map();
</script>
<script type="text/javascript" src="/js/pageScripts/legalcase/publish/doc_entrust_detail.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<script type="text/javascript" src="/js/pageScripts/legalcase/inc/select_lawyer_list_query.js"></script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>

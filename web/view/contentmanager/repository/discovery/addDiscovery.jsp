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
<%@ include file="/view/frame/topbar.jsp"%>
<!-- END TOPBAR -->
<!-- START SIDEBAR -->
<%@ include file="/view/frame/sidebar.jsp"%>
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.cnt_discovery_list;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">内容管理 / 资源库管理 / 添加资源库</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">添加资源库</h2>
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
                                        <label class="col-xs-2 control-label" for="title">标题</label>
                                        <div class="col-xs-5">
                                            <input type="text" class="form-control" placeholder="请输入标题" value="" id="title" name="title"
                                                   maxlength="20" id="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="summary">摘要</label>
                                        <div class="col-xs-5">
                                            <input type="text" class="form-control" placeholder="请输入摘要" value="" id="summary" name="summary"
                                                   maxlength="20">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="infoType">分类</label>
                                        <div class="col-xs-5">
                                            <select class="form-control" id="infoType" name="infoType" style="border-color: #e1e1e1;">
                                                <option value="">请选择分类</option>
                                                <%--<option value="0">财务咨询</option>--%>
                                                <%--<option value="1">管理资讯</option>--%>
                                                <%--<option value="2">营销策划</option>--%>
                                                <%--<option value="3">常用文书</option>--%>
                                                <%--<option value="4">法律资源库</option>--%>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">是否文档</label>
                                        <div class="col-xs-5" style="padding-top: 5px;">
                                            <input type="radio" class="" value="1" id="status_1" name="isDocument" checked>是
                                            &nbsp;&nbsp;
                                            <input type="radio" class="" value="0" id="status_0" name="isDocument">否
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" id="documentDiv">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="documentType">文档类型</label>
                                        <div class="col-xs-5">
                                            <select class="form-control" id="documentType" name="documentType" style="border-color: #e1e1e1;">
                                                <option value="">请选择分类</option>
                                                <option value="0">doc</option>
                                                <option value="1">docx</option>
                                                <option value="2">xls</option>
                                                <option value="3">xlsx</option>
                                                <option value="4">pdf</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-offset-2 col-xs-10">
                                    <div class="form-group col-xs-5" style="max-width: 400px;max-height: 300px;display: none;" id="imgBox">
                                        <img src="/images/nopica.png" class="img-thumbnail" id="coverImage"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row" id="addressDiv">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">文档地址</label>
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
                                    <div class="form-group" style="margin-top: -20px;margin-bottom: 0px;">
                                        <label class="col-xs-2 control-label"></label>
                                        <div class="col-xs-5">
                                            <div class="form-group">
                                                <%--<label class="form-label" for="field-1">Name</label>--%>
                                                <span class="desc" style="color: red;">* 文件大小不能超过20M,支持doc、docx、xls、xlsx、pdf格式</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">是否跳转第三方页面</label>
                                        <div class="col-xs-5" style="padding-top: 5px;font-weight: inherit">
                                            <input type="radio" class="" value="1" id="toPage_1" name="toPage" style="font-weight: inherit" checked>是
                                            &nbsp;&nbsp;
                                            <input type="radio" class="" value="0" id="toPage_0" name="toPage" style="font-weight: inherit">否
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row" id="urlDiv">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="pageUrl">输入第三方网址</label>
                                        <div class="col-xs-5">
                                            <input type="text" class="form-control" placeholder="请输入第三方网址" value="" id="pageUrl" name="pageUrl"
                                                   maxlength="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">内容</label>
                                        <div class="col-xs-9">
                                            <script id="editor" type="text/plain"></script>
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
                                            <button type="button" class="btn btn-info" id="btnSave">保存</button>&nbsp;&nbsp;
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
<script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
<script type="text/javascript" src="/js/plugins/select2/select2.min.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<script type="text/javascript" src="/js/pageScripts/content/repository/discovery/add_discovery.js"></script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>


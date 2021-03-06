<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

    <link rel="stylesheet" type="text/css" href="/js/plugins/xxcolorpicker/css/jquery.bigcolorpicker.css" />
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
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.cnt_classifyList;
</script>
<!-- START CONTENT -->
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">内容管理 / 分类管理 / 编辑分类</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">编辑分类</h2>
                    <div class="actions panel_actions pull-right">
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_edit" action="#" method="post" novalidate="novalidate">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="name">分类名称</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control"
                                                   placeholder="请输入分类名称" value="" id="name" name="name"
                                                   maxlength="24">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="color">分类颜色</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control"
                                                   placeholder="请选择分类颜色" value="" id="color" name="color"
                                                   maxlength="10">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="sortNo">排序</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control" placeholder="请输入排序号" value="" id="sortNo" name="sortNo"
                                                   maxlength="6">
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
<!-- END CONTENT -->
</div>
<!-- END CONTAINER -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
<%--<script type="text/javascript" src="/js/plugins/colorpicker/js/bootstrap-colorpicker.min.js"></script>--%>
<script type="text/javascript" src="/js/plugins/xxcolorpicker/js/jquery.bigcolorpicker.min.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<script type="text/javascript" src="/js/pageScripts/content/classify/edit_classify.js"></script>
<script type="text/javascript">
    $(function(){
        $("#color").bigColorpicker("color","L",6);
    });
</script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>


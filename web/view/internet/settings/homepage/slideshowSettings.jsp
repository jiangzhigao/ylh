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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.internet_home_page_slideshow;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">网站管理 / 基础设置 / 首页轮播图设置</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left">首页轮播图设置</h2>
                <div class="pull-right">
                    <div id="page_alert_container"></div>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_edit" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">第一张轮播图</label>
                                    <div class="col-xs-5" style="margin-left: -15px;">
                                        <div class="col-xs-1">
                                            <div class="img-upload">
                                                <input type="hidden" id="coverUrl" value="" name="coverUrl"/>
                                                <button id="btnSearch" type="button" class="btn btn-primary">点击添加或修改</button>
                                                <input type="file" class="img-upload-file" id="1_upload" name="1_upload" mid="coverImage" uid="coverUrl">
                                            </div>
                                        </div>
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
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">第二张轮播图</label>
                                    <div class="col-xs-5" style="margin-left: -15px;">
                                        <div class="col-xs-1">
                                            <div class="img-upload">
                                                <input type="hidden" id="coverUrl1" value="" name="coverUrl1"/>
                                                <button id="btnSearch1" type="button" class="btn btn-primary">点击添加或修改</button>
                                                <input type="file" class="img-upload-file" id="2_upload" name="2_upload" mid="coverImage1" uid="coverUrl1">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-offset-2 col-xs-10">
                                <div class="form-group col-xs-5" style="max-width: 400px;max-height: 300px;display: none;" id="imgBox1">
                                    <img src="/images/nopica.png" class="img-thumbnail" id="coverImage1"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-2 control-label">第三张轮播图</label>
                                    <div class="col-xs-5" style="margin-left: -15px;">
                                        <div class="col-xs-1">
                                            <div class="img-upload">
                                                <input type="hidden" id="coverUrl2" value="" name="coverUrl2"/>
                                                <button id="btnSearch2" type="button" class="btn btn-primary">点击添加或修改</button>
                                                <input type="file" class="img-upload-file" id="3_upload" name="3_upload" mid="coverImage2" uid="coverUrl2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-offset-2 col-xs-10">
                                <div class="form-group col-xs-5" style="max-width: 400px;max-height: 300px;display: none;" id="imgBox2">
                                    <img src="/images/nopica.png" class="img-thumbnail" id="coverImage2"/>
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
<script type="text/javascript" src="/js/plugins/select2/select2.min.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<script type="text/javascript" src="/js/pageScripts/internet/basic/slideshow/slideShowSettiong.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>


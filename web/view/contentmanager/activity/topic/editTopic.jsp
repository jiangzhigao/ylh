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
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.cnt_topic_list;
</script>
<!-- START CONTENT -->
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">内容管理 / 话题管理 / 编辑话题</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left">编辑话题</h2>
                    <div class="actions panel_actions pull-right">
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_edit" action="#" method="post" novalidate="novalidate">
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label" for="title">标题</label>
                                        <div class="col-xs-4">
                                            <input type="text" class="form-control"
                                                   placeholder="请输入标题" value="" id="title" name="title"
                                                   maxlength="24">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group ">
                                        <label class="col-xs-2 control-label" for="content">内容</label>
                                        <div class="col-xs-4">
                                            <textarea id="content" name="content" maxlength="128" class="bootstrap-wysihtml5-textarea" placeholder="" style="width: 100%; height: 60px; font-size: 14px; line-height: 23px;padding:15px;"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">图片</label>
                                        <div class="col-xs-4" style="margin-left: -15px;">
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
                                <div class="col-xs-offset-2 col-xs-10">
                                    <div class="form-group col-xs-4" style="max-width: 400px;max-height: 300px;display: none;" id="imgBox">
                                        <img src="/images/nopica.png" class="img-thumbnail" id="coverImage"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">点赞数</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="praiseNumber" name="praiseNumber">100</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="col-xs-2 control-label">回复数</label>
                                        <div class="col-xs-5">
                                            <label class="control-label" id="replyNumber" name="replyNumber">100</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">发布时间</label>
                                        <div class="col-xs-4">
                                            <label id="createdTime" name="createdTime" class="control-label" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">更新时间</label>
                                        <div class="col-xs-4">
                                            <label id="updatedTime" name="updatedTime" class="control-label" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">发布人</label>
                                        <div class="col-xs-4">
                                            <label id="announceUser" name="announceUser" class="control-label" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">置顶</label>
                                        <div class="col-xs-4">
                                            <label id="isTop" name="isTop" class="control-label" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">审核状态</label>
                                        <div class="col-xs-4">
                                            <label id="status" name="status" class="control-label" style="font-weight: 500;"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="isNotPass" class="row">
                                <div class="col-xs-12">
                                    <div class="form-group btom">
                                        <label class="col-xs-2 control-label">审核</label>
                                        <div class="col-xs-4">
                                            <button id="passBtn" type="button" class="btn btn-info">通过</button>
                                            <button id="notPassBtn" type="button" class="btn btn-danger">不通过</button>
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
                                <div class="col-xs-4">
                                    <div class="form-group">
                                        <div class="controls">
                                            <button type="button" class="btn btn-danger" id="btnDel">删除</button>
                                            &nbsp;
                                            <button type="button" class="btn btn-info" id="btnSave">保存</button>
                                            &nbsp;
                                            <button type="button" class="btn btn-info" id="btnIsTop">置顶</button>
                                            &nbsp;
                                            <button type="button" class="btn btn-info" id="btnRepley">回复管理</button>
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
<script type="text/javascript" src="/js/pageScripts/content/activity/topic/edit_topic.js"></script>
<script type="text/javascript">
    /*$('.colorpicker').colorpicker();*/
</script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>


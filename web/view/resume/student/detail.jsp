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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.resume_student_List;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">简历管理 / 学生简历</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left title-bold">简历详情</h2>
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
                                    <label class="col-xs-2 control-label">学校</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" style="font-weight: 500;" id="school"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">专业</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" style="font-weight: 500;" id="contact"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">毕业日期</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" style="font-weight: 500;" id="graduateTime"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">出生年月</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" style="font-weight: 500;" id="birthday"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">状态</label>
                                    <div class="col-xs-4">
                                        <label class="control-label" style="font-weight: 500;" id="status"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group btom">
                                    <label class="col-xs-2 control-label">专业描述</label>
                                    <div class="col-xs-8">
                                        <textarea id="speciality" name="speciality" class="bootstrap-wysihtml5-textarea" readonly style="width: 100%; height: 260px; font-size: 14px; line-height: 23px;padding:15px;"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="divider-dotted"></div>
                        <br>
                        <div class="clearfix"></div>

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
<script type="text/javascript" src="/js/pageScripts/resume/student/detail.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>


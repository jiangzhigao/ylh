<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

    <style type="text/css">

        .move20{
            margin-right: -20px;
        }
        .dropdown-menu {
            min-width: 100px;
            width: 90px;
        }
        a:hover {
            text-decoration: none;
        }
        table.table tr:nth-child(odd)
        {
            background-color:#f9f9f9;
        }
        table.table tr:nth-child(even)
        {
            background-color:#fff;
        }
        .no-editable{
            color: #ccc;
        }
        .no-editable a{
            color: #ccc;
        }
        a {
            color: #333;
        }
        .form-control:focus {
             background: #fff;
        }
    </style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class=" boxed">
<!-- START TOPBAR -->
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.mc_Leave_message_list;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">会员管理 / 留言管理 / 留言详情 </h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left title-bold">留言详情</h2>
                <div class="actions panel_actions pull-right">
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="" style="background-color: #f3f3f4;height: 500px;width: 95%;margin-left: 30px;">
                                <div class="uprofile-content" style="background-color: #f3f3f4;height: 500px;min-height: 500px;position:relative;">
                                    <%--<div class="clearfix"></div>--%>
                                    <div class="uprofile_wall_posts col-md-12 col-sm-12 col-xs-12">
                                        <div id="messageContent" class="info-wrapper col-md-12 col-sm-12 col-xs-12" style="height: 380px;overflow:auto;overflow-x:hidden;">
                                            <%--<div class="msg-from" style="margin-top: 35px;">
                                                <div class="col-xs-12" style="text-align: center;line-height: 16px;font-size: 14px;">2017-08-08 12:30:49</div>
                                                <div class="comment comment-input" style="margin-top: 10px">
                                                    <div class="pic-wrapper text-center" style="width: 28px;height: 28px;float: left;background-color: #ffffff;">
                                                        <img data-src-retina="/images/user.png" data-src="/images/user.png" src="/images/user.png" alt="">
                                                    </div>
                                                    <div class="info-wrapper" style="margin-left: 5px;float: left;width: 10%">
                                                        <span >Mark</span>
                                                    </div>
                                                    <div class="info-wrapper" style="float: right;width: 86.5%;">
                                                        <div class="input-group primary" style="width: 100%;">
                                                            <input type="text" class="form-control" style="border: none;" value="你瞅啥？">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="msg-to">
                                                <div class="col-xs-12" style="text-align: center;line-height: 16px;font-size: 14px;">2017-08-08 12:30:49</div>
                                                <div class="comment comment-input">
                                                    <div class="info-wrapper" style="float: left;width: 86.5%;">
                                                        <div class="input-group primary" style="width: 100%;">
                                                            <input type="text" class="form-control" style="border: none;" value="瞅你咋地？">
                                                        </div>
                                                    </div>
                                                    <div class="pic-wrapper text-center" style="width: 28px;height: 28px;float: right;background-color: #ffffff;">
                                                        <img data-src-retina="/images/user.png" data-src="/images/user.png" src="/images/user.png" alt="">
                                                    </div>
                                                    <div class="info-wrapper" style="margin-right: 5px;float: right;width: 10%;text-align: right;">
                                                        <span >Tim</span>
                                                    </div>
                                                </div>
                                            </div>--%>
                                        </div>
                                        <%--<div class="clearfix"></div>--%>
                                    </div>
                                    <div class="enter_post col-md-12 col-sm-12 col-xs-12" style="position:absolute;left:0;bottom:0;">
                                        <div class="form-group">
                                            <div class="controls">
                                                <textarea class="form-control autogrow"  placeholder="请回复客户留言" style="overflow: hidden; word-wrap: break-word; height: 70px;" id="cnt"></textarea>
                                            </div>
                                        </div>
                                        <div class="enter_post_btns col-md-12 col-sm-12 col-xs-12">
                                            <button id="sendBtn" type="button" class="btn btn-md pull-right btn-info">发送</button>
                                        </div>
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
<script type="text/javascript" src="/js/pageScripts/custom/member/message/send_message.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

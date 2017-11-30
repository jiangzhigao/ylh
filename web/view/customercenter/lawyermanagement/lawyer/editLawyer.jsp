<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>
    <link href="/js/plugins/select2/select2.css" rel="stylesheet" type="text/css" media="screen"/>
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
        /*.select2-container .select2-choice abbr {
            display: block;
        }*/
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
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.l_lawyerManagementList;
</script>
<!-- START CONTENT -->
<section id="main-content" class=" " style="">
    <section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
        <header class="panel_header" style="background-color: #fff;margin-top:45px;">
            <h4 class="title pull-left" style="font-size: 15px;">客户中心 / 律师管理 / 编辑律师</h4>
        </header>

        <div class="col-xs-12">
            <section class="box ">
                <header class="panel_header">
                    <h2 class="title pull-left title-bold">编辑律师</h2>
                    <div class="actions panel_actions pull-right">
                    </div>
                </header>
                <div class="content-body">
                    <div class="dataTables_wrapper no-footer">
                        <form class="form-horizontal" id="form_edit" action="#" method="post" novalidate="novalidate">
                            <div class="col-md-12">
                                <ul class="nav nav-tabs">
                                    <li class="active">
                                        <a href="#basic" data-toggle="tab" aria-expanded="true">
                                            基本资料
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="#case" data-toggle="tab" aria-expanded="false">
                                            案列
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#honor" data-toggle="tab">
                                            荣誉
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane fade active in" id="basic">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="userName">手机号</label>
                                                    <div class="col-xs-5">
                                                        <label class="control-label" id="userName"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label">密码</label>
                                                    <div class="col-xs-5">
                                                        <button id="pwdBtn" type="button" class="btn btn-primary">修改密码</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="account">账户金额</label>
                                                    <div class="col-xs-5">
                                                        <button type="button"  id="account" class="btn btn-primary"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="name">律师名称</label>
                                                    <div class="col-xs-5">
                                                        <input type="text" id="name" class="form-control" placeholder="请输入律师名称" value=""
                                                               maxlength="20">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="idcard">身份证编号</label>
                                                    <div class="col-xs-5">
                                                        <input type="text" class="form-control" id="idcard"  name="idcard" placeholder="请输入身份证编号" value=""
                                                               maxlength="18">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="licenseid">执照编号</label>
                                                    <div class="col-xs-5">
                                                        <input type="text" class="form-control" placeholder="请输入执照编号"  id="licenseid"
                                                               maxlength="18">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="employmentTime">从业时间</label>
                                                    <div class="col-xs-5">
                                                        <input type="text" class="form-control" placeholder="请输入从业时间" id="employmentTime"
                                                               maxlength="18">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="registerTime">注册时间</label>
                                                    <div class="col-xs-5">
                                                        <label class="control-label" id="registerTime"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label">最后登录时间</label>
                                                    <div class="col-xs-5">
                                                        <label class="control-label">2017-08-08</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label">最后登录IP</label>
                                                    <div class="col-xs-5">
                                                        <label class="control-label">10.0.0.1</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-offset-2 col-xs-12">
                                                <div class="form-group col-xs-5" style="max-width: 400px;max-height: 300px;display: none;" id="imgBox">
                                                    <img src="/images/nopica.png" class="img-thumbnail" id="coverImage"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label">律师照片</label>
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
                                                    <label class="col-xs-2 control-label" for="company">所属单位</label>
                                                    <div class="col-xs-5">
                                                        <input type="text" class="form-control" placeholder="请输入所属单位"  id="company" name="company"
                                                               maxlength="11">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="mobile">备用号码</label>
                                                    <div class="col-xs-5">
                                                        <input type="text" class="form-control" placeholder="请输入备用号码" value="" id="mobile" name="mobile"
                                                               maxlength="11">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="email">邮箱</label>
                                                    <div class="col-xs-5">
                                                        <input type="text" class="form-control" placeholder="请输入邮箱" value="" id="email" name="email"
                                                               maxlength="36">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="province">所在地址</label>
                                                    <div class="col-xs-5">
                                                        <select class="form-control" id="province" name="province" style="border-color: #e1e1e1;">
                                                            <option value="0" >请选择省份</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="city"></label>
                                                    <div class="col-xs-5">
                                                        <select class="form-control" id="city" name="city" style="border-color: #e1e1e1;">
                                                            <option value="0" >请选择市</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="level">律师等级</label>
                                                    <div class="col-xs-5">
                                                        <select class="form-control" id="level" name="level" style="border-color: #e1e1e1;">
                                                            <option value="1" selected>普通</option>
                                                            <option value="2" >中级</option>
                                                            <option value="3" >高级</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label" for="professionalField">专业领域</label>
                                                    <div class="col-xs-5">
                                                        <select class="" id="professionalField" multiple="multiple">
                                                            <%--<optgroup label="">

                                                            </optgroup>--%>
                                                            <option value="1" >民事诉讼</option>
                                                            <option value="2" >刑事诉讼</option>
                                                            <option value="3" >非诉案件</option>
                                                            <option value="4" >金融保险</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <label class="col-xs-2 control-label">状态</label>
                                                    <div class="col-xs-5" style="padding-top: 5px;">
                                                        <input type="radio" class="" value="1" id="status_normal" name="status" checked>正常
                                                        &nbsp;&nbsp;
                                                        <input type="radio" class="" value="0" id="status_blocked" name="status">冻结
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
                                                        <button type="button" class="btn btn-info" id="btnApprove">点击审核通过</button>
                                                        &nbsp;&nbsp;
                                                        <button type="button" class="btn btn-info" id="btnSave">保存</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="case">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <div class="col-xs-2">
                                                        <button type="button" class="btn btn-info" id="btnAdd">新增</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <div class="col-xs-2"></div>
                                                    <div class="col-xs-5">
                                                        <textarea id="activityDesc" name="activityDesc" maxlength="128" class="bootstrap-wysihtml5-textarea" placeholder="" style="width: 100%; height: 120px; font-size: 14px; line-height: 23px;padding:15px;"></textarea>
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
                                                    <div class="col-xs-2"></div>
                                                    <div class="col-xs-5">
                                                        <button type="button" class="btn btn-info" id="btnSave3">保存</button>
                                                        &nbsp;&nbsp;
                                                        <button type="button" class="btn btn-danger" id="btnDel2">删除</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="honor">
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <div class="col-xs-2">
                                                        <button type="button" class="btn btn-info" id="btnAdd2">新增</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-12">
                                                <div class="form-group">
                                                    <div class="col-xs-2"></div>
                                                    <div class="col-xs-5">
                                                        <textarea id="activityDesc2" name="activityDesc" maxlength="128" class="bootstrap-wysihtml5-textarea" placeholder="" style="width: 100%; height: 120px; font-size: 14px; line-height: 23px;padding:15px;"></textarea>
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
                                                    <div class="col-xs-2"></div>
                                                    <div class="col-xs-5">
                                                        <button type="button" class="btn btn-info" id="btnSave2">保存</button>
                                                        &nbsp;&nbsp;
                                                        <button type="button" class="btn btn-danger" id="btnDel">删除</button>
                                                    </div>
                                                </div>
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

</section>
<!-- END CONTENT -->
</div>
<!-- END CONTAINER -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
<script type="text/javascript" src="/js/plugins/select2/select2.min.js"></script>
<script type="text/javascript" src="/js/pageScripts/custom/lawyer/lawyer/edit_layer.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<script type="text/javascript">
    //日期控件
    $("#4").datepicker({
        autoclose: true,
        clearBtn: true,
        forceParse: true,
        format: 'yyyy-mm-dd',
        language: 'cn',
        startView: 0,
        todayBtn: true,
        todayHighlight: false,
        weekStart: 1,
        endDate:'+1',//结束时间，在这时间之后都不可选
    });

    $("#10").select2({
        placeholder: '点击选择专业领域',
        allowClear: true,
        maximumSelectionLength: 1
    });



</script>
<!-- START FOOTER -->
<%@ include file="/view/frame/footer.jsp"%>
<!--  FOOTER - END -->
</body>

</html>
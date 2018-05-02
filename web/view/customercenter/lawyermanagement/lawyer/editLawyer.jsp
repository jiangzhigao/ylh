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
        a {
            color: #666666;
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
    </style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class=" boxed">
<!-- START TOPBAR -->
<!--  SIDEBAR - END -->
<script type='text/javascript'>
    ___system_navigation_config.currentNav = ___system_navigation_config.nav.l_lawyerManagementList;
</script>
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
    <header class="panel_header" style="background-color: #fff;margin-top:45px;">
        <h4 class="title pull-left" style="font-size: 15px;">客户中心 / 律师管理 / 编辑律师</h4>
    </header>

    <div class="col-xs-12">
        <section class="box ">
            <header class="panel_header">
                <h2 class="title pull-left title-bold">编辑律师</h2>
                <div class="actions panel_actions pull-right">
                    <div id="page_alert_container"></div>
                </div>
            </header>
            <div class="content-body">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_edit" action="#" method="post" novalidate="novalidate">
                        <input type="hidden" id="bizStatus" value="0" />
                        <input type="hidden" id="lawyerBizId" value="">
                        <div class="col-md-12">
                            <ul class="nav nav-tabs">
                                <li class="active">
                                    <a href="#basic" data-toggle="tab" aria-expanded="true" s="0">
                                        基本资料
                                    </a>
                                </li>
                                <li class="case">
                                    <a href="#case" data-toggle="tab" aria-expanded="false" s="1">
                                        案列
                                    </a>
                                </li>
                                <li class="honor">
                                    <a href="#honor" data-toggle="tab" aria-expanded="false" s="2">
                                        荣誉
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade active in" id="basic">
                                    <input type="hidden" id="lawNewUPwd" >
                                    <input type="hidden" id="loadNewPwd" >
                                    <input type="hidden" id="dataId" >
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="form-group">
                                                <label class="col-xs-2 control-label" for="userName">手机号</label>
                                                <div class="col-xs-4">
                                                    <label class="control-label" id="userName" style="font-weight: 500"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="form-group">
                                                <label class="col-xs-2 control-label">密码</label>
                                                <div class="col-xs-4">
                                                    <button id="pwdBtn" type="button" class="btn btn-primary" data-toggle="modal" data-target="#pwdModal">修改密码</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="form-group">
                                                <label class="col-xs-2 control-label" for="account">账户金额(元)</label>
                                                <div class="col-xs-4">
                                                    <button type="button"  id="account" class="btn btn-primary" value=""></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="form-group">
                                                <label class="col-xs-2 control-label" for="name">律师名称</label>
                                                <div class="col-xs-4">
                                                    <input type="text" id="name" class="form-control" placeholder="请输入律师名称"
                                                           maxlength="20">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="form-group">
                                                <label class="col-xs-2 control-label" for="idcard">身份证编号</label>
                                                <div class="col-xs-4">
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
                                                <div class="col-xs-4">
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
                                                <div class="col-xs-4">
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
                                                <div class="col-xs-4">
                                                    <label class="control-label" id="registerTime" style="font-weight: 500"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="form-group">
                                                <label class="col-xs-2 control-label">最后登录时间</label>
                                                <div class="col-xs-4">
                                                    <label class="control-label" style="font-weight: 500">2017-08-08</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="form-group">
                                                <label class="col-xs-2 control-label">最后登录IP</label>
                                                <div class="col-xs-4">
                                                    <label class="control-label" style="font-weight: 500">10.0.0.1</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="form-group">
                                                <label class="col-xs-2 control-label">律师照片</label>
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
                                                <label class="col-xs-2 control-label" for="company">所属单位</label>
                                                <div class="col-xs-4">
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
                                                <div class="col-xs-4">
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
                                                <div class="col-xs-4">
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
                                                <div class="col-xs-4">
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
                                                <div class="col-xs-4">
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
                                                <div class="col-xs-4">
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
                                                <div class="col-xs-4">
                                                    <select class="" id="professionalField" multiple="multiple">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="form-group">
                                                <label class="col-xs-2 control-label">状态</label>
                                                <div class="col-xs-4" style="padding-top: 5px;">
                                                    <input type="radio" class="" value="1" id="status_normal" name="status" checked>正常
                                                    &nbsp;&nbsp;
                                                    <input type="radio" class="" value="0" id="status_blocked" name="status">冻结
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <div class="form-group">
                                                <label class="col-xs-2 control-label">审核状态</label>
                                                <div class="col-xs-4" style="padding-top: 5px;">
                                                    <label class="control-label" id="isVerified" style="font-weight: 500"></label>
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
                                                    <button type="button" class="btn btn-info" id="btnApprove" style="display: none;">点击审核通过</button>
                                                    &nbsp;&nbsp;
                                                    <button type="button" class="btn btn-info" id="btnSave">保存</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="case">
                                    <div class="dataTables_wrapper no-footer">
                                        <form class="form-horizontal" id="form_case" action="#" method="post" novalidate="novalidate">
                                            <header class="panel_header" style="border: 0px">
                                                <h4 class="title pull-left title-bold"></h4>
                                                <div class="actions panel_actions pull-right" style="line-height: 23px;">
                                                    <a class="btn btn-info" data-toggle="modal" data-target="#addCaseModal" style="padding: 3px 6px;">
                                                        <span class="glyphicon glyphicon-plus"></span>
                                                    </a>
                                                </div>
                                            </header>
                                        </form>
                                        <table class="table table-bordered table-hover" id="caseDataList">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>案列名称</th>
                                                <th>操作</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                        <div class="row">
                                            <div class="col-xs-6" id="caseLable"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="honor">
                                    <div class="dataTables_wrapper no-footer">
                                        <form class="form-horizontal" id="form_honor" action="#" method="post" novalidate="novalidate">
                                            <header class="panel_header" style="border: 0px">
                                                <h4 class="title pull-left title-bold"></h4>
                                                <div class="actions panel_actions pull-right" style="line-height: 23px;">
                                                    <a class="btn btn-info" data-toggle="modal" data-target="#addHonorModal" style="padding: 3px 6px;">
                                                        <span class="glyphicon glyphicon-plus"></span>
                                                    </a>
                                                </div>
                                            </header>
                                        </form>
                                        <table class="table table-bordered table-hover" id="honorDataList">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>荣誉名称</th>
                                                <th>操作</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                        <div class="row">
                                            <div class="col-xs-6" id="honorLable"></div>
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
<%@ include file="/view/customercenter/lawyermanagement/lawyer/updatePwdModal.jsp"%>
<%@ include file="/view/customercenter/lawyermanagement/lawyer/inc/addCaseModal.jsp"%>
<%@ include file="/view/customercenter/lawyermanagement/lawyer/inc/addHonorModal.jsp"%>
</div>
<!-- END CONTAINER -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
<script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
<script type="text/javascript" src="/js/plugins/select2/select2.min.js"></script>
<script type="text/javascript" src="/js/custom/request-util.js"></script>
<script type="text/javascript" src="/js/pageScripts/custom/lawyer/lawyer/edit_layer.js"></script>
<script type="text/javascript" src="/js/pageScripts/custom/lawyer/lawyer/query_case_list.js"></script>
<script type="text/javascript" src="/js/pageScripts/custom/lawyer/lawyer/query_honor_list.js"></script>
<script type="text/javascript" src="/js/custom/md5.js"></script>
<script type="text/javascript">
    //日期控件
    $("#employmentTime").datepicker({
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

    /*$("#professionalField").select2({
        placeholder: '点击选择专业领域',
        allowClear: true,
        maximumSelectionLength: 1
    });*/
</script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>
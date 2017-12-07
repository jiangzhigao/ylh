<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<style type="text/css">
    .xxx .modal-header {
         padding: 8px;
    }
    .modal-header .close {
        margin-top: -10px;
    }
    .move20{
        margin-right: -20px;
    }
    .modal-dialog {
        width: 260px;
    }

    .modal-header {
        line-height: 40px;
        padding: 10px;
    }
    .modal-body {
        padding: 10px;
    }
    .modal-footer {
        padding: 5px 15px;
        border-top: 0px;
    }
    .modal-content {
        width: 500px;
    }
</style>


<div class="modal fade" id="pwdModal" tabindex="-1" role="dialog" aria-labelledby="lawyerModal-Label" aria-hidden="true" style="display: none;">
    <div class="modal-dialog" style="width: 60%">
        <div class="modal-content xxx">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="padding-bottom: 10px;">×</button>
                <h4 class="modal-title title-bold">修改密码</h4>
            </div>
            <div class="modal-body" style="padding: 15px;">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_edit" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-3 control-label" for="lawUserName">用户名</label>
                                    <div class="col-xs-7">
                                        <input type="text" class="form-control" id="lawUserName" name="lawUserName"
                                                maxlength="20" readonly>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-3 control-label" for="lawPwd">原始密码</label>
                                    <div class="col-xs-7">
                                        <input type="password" class="form-control" id="lawPwd" name="lawPwd"
                                                maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-3 control-label" for="lawNewPwd">新密码</label>
                                    <div class="col-xs-7">
                                        <input type="password" class="form-control" id="lawNewPwd" name="lawNewPwd"
                                                maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <%--<div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-3 control-label" for="lawNewCPwd">确认新密码</label>
                                    <div class="col-xs-7">
                                        <input type="password" class="form-control" id="lawNewCPwd" name="lawNewCPwd"
                                               value="admin"  maxlength="20">
                                    </div>
                                </div>
                            </div>
                        </div>--%>

                        <div class="divider-dotted"></div>
                        <div class="clearfix"></div>
                        <div class="row">
                            <div class="col-xs-3">
                            </div>
                            <div class="col-xs-5">
                                <div class="form-group">
                                    <div class="controls">
                                        <button type="button" class="btn btn-info" id="btnSaveLawPwd">保存</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">

            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function(){
        $('#btnSaveLawPwd').on('click', function () {
            $("#lawNewUPwd").val($("#lawNewPwd").val());
            $('#pwdModal').modal('hide');
        });
    });
</script>



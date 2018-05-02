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
                    <form class="form-horizontal" id="form_update_pwd" action="#" method="post" novalidate="novalidate">
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
                                    <label class="col-xs-3 control-label" for="newPwd">新密码</label>
                                    <div class="col-xs-7">
                                        <input type="password" class="form-control" id="newPwd" name="newPwd"
                                                maxlength="20" required="required">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group">
                                    <label class="col-xs-3 control-label" for="confirmPwd">确认密码</label>
                                    <div class="col-xs-7">
                                        <input type="password" class="form-control" id="confirmPwd" name="confirmPwd"
                                               maxlength="20" required="required">
                                    </div>
                                </div>
                            </div>
                        </div>
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
        var $form_pwd = $('#form_update_pwd');
        $form_pwd.validate({
            rules:{
                newPwd:{
                    required:true,
                },
                confirmPwd: {
                    required: true,
                }
            },
            messages:{
                newPwd:{
                    required:"请输入新密码"
                },
                confirmPwd:{
                    required:"请输入确认密码"
                }
            }
        });

        $('#btnSaveLawPwd').on('click', function () {
            var formValid = $form_pwd.validate().form();
            if (formValid) {
                var newPwd=$("#newPwd").val();
                var confirmPwd=$("#confirmPwd").val();
                if(newPwd==confirmPwd){
                    $("#loadNewPwd").val($("#newPwd").val());

                    $("#newPwd").val("");
                    $("#confirmPwd").val("");
                    $('#pwdModal').modal('hide');
                }else{
                    alert("确认密码不一致");
                    console.log(hex_md5("123"));
                }
            }
        });
    });
</script>



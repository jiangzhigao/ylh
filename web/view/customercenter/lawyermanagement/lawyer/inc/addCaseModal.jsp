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
</style>


<div class="modal fade" id="addCaseModal" tabindex="-1" role="dialog" aria-labelledby="addCaseModal-Label" aria-hidden="true" style="display: none;">
    <div class="modal-dialog" style="width: 60%">
        <div class="modal-content xxx">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="padding-bottom: 10px;">×</button>
                <h4 class="modal-title title-bold" id="caseTitle">添加案列</h4>
            </div>
            <div class="modal-body" style="padding: 15px;">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_add_case" action="#" method="post" novalidate="novalidate">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="form-group" style="margin-bottom:10px; ">
                                    <div class="col-xs-12" style="margin-left: 7px;margin-right: 15px;">
                                        <textarea id="caseName" name="caseName" maxlength="128" class="bootstrap-wysihtml5-textarea" placeholder="" style="width: 100%; height: 120px; font-size: 14px; line-height: 23px;padding:15px;"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-2">
                            </div>
                            <div class="col-xs-5">
                                <div class="form-group" style="margin-bottom:10px; ">
                                    <div class="controls">
                                        <button type="button" class="btn btn-info" id="btnSaveCase">保存</button>
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



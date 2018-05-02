<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<style type="text/css">
    .xxx .modal-header {
         padding: 20px;
    }
    .modal-header .close {
        margin-top: -10px;
    }
    .move20{
        margin-right: -20px;
    }
</style>

<div class="modal fade" id="replyModal" tabindex="-1" role="dialog" aria-labelledby="replyModal-Label" aria-hidden="true" style="display: none;">
    <div class="modal-dialog" style="width: 60%">
        <div class="modal-content xxx">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="padding-bottom: 10px;">×</button>
                <h4 class="modal-title title-bold">请选择律师</h4>
            </div>
            <div class="modal-body" style="padding: 15px;">
                <div class="dataTables_wrapper no-footer">
                    <table class="table table-bordered table-hover" id="syreplyList">
                        <thead>
                        <tr>
                            <th>话题</th>
                            <th>评论内容</th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-xs-6" id="slPageTotalRecord"></div>
                        <div class="col-xs-6">
                            <div class="dataTables_paginate paging_bootstrap" id="slPaginationContainer"> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">

            </div>
        </div>
    </div>
</div>



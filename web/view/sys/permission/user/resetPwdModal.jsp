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


<div class="modal fade" id="lawyerModal" tabindex="-1" role="dialog" aria-labelledby="lawyerModal-Label" aria-hidden="true" style="display: none;">
    <div class="modal-dialog" style="width: 60%">
        <div class="modal-content xxx">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="padding-bottom: 10px;">×</button>
                <h4 class="modal-title title-bold">信息</h4>
            </div>
            <div class="modal-body" style="padding: 15px;">
                <div class="dataTables_wrapper no-footer">
                    <form class="form-horizontal" id="form_query" action="#" method="post" novalidate="novalidate">
                        <div class="row" style="margin-bottom: -10px;">
                            <div class="col-xs-3 move20">
                                <input type="text" class="form-control" placeholder="律师姓名">
                            </div>
                            <div class="col-xs-3 move20">
                                <input type="text move20" class="form-control" placeholder="律师电话">
                            </div>
                            <div class="col-xs-2 move20">
                                <select class="form-control" style="border-color: #e1e1e1;">
                                    <option value="">状态</option>
                                    <option value="0">未审核</option>
                                    <option value="1">审核中</option>
                                </select>
                            </div>
                            <div class="col-xs-2">
                                <%--<div class="form-group">--%>
                                <div class="controls">
                                    <button id="btnLySearch" type="button" class="btn btn-info">搜索</button>
                                </div>
                                <%--</div>--%>
                            </div>
                        </div>
                    </form>
                    <table class="table table-bordered table-hover" id="syLawyerList">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>律师姓名</th>
                            <th>律师电话</th>
                            <th>律师头像</th>
                            <th>从业时间</th>
                            <th>状态</th>
                            <th>参与时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <%--<tr>
                            <td style="vertical-align:middle;"><input type="radio" name="lawyerId"></td>
                            <td>王麻子</td>
                            <td>13901234567</td>
                            <td width="120px;">
                                <div class="profile-image">
                                    <img src="/images/user.png" class="" style="width: 80%;" />
                                </div>
                            </td>
                            <td>2017-08-28</td>
                            <td>审核中</td>
                            <td>2017-08-28</td>
                            <td>
                                <div class="btn-group">
                                    <a class="dropdown-toggle" data-toggle="dropdown" style="color: #337AB7;">
                                        查看详情
                                        <span class="caret"></span>
                                    </a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="/view/legalcase/publish/caseEntrustDetail.jsp?orderCode=D0001">查看详情</a></li>
                                        <li><a href="#">审核通过</a></li>
                                        <li><a href="#">不通过</a></li>
                                        <li><a href="#">结案</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>--%>
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



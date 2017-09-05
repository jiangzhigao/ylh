<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="page-container row-fluid">
    <!-- SIDEBAR - START -->
    <div class="page-sidebar ">
        <!-- MAIN MENU - START -->
        <div class="page-sidebar-wrapper" id="main-menu-wrapper">
            <!-- USER INFO - START -->
            <!-- USER INFO - END -->
            <ul class='wraplist'>
                <li class="">
                    <a href="/main.jsp">
                        <i class="fa fa-tachometer"></i>
                        <span class="title">首页</span>
                    </a>
                </li>
                <li class="">
                    <a href="javascript:;">
                        <i class="fa fa-file-text"></i>
                        <span class="title">案件管理</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="/view/legalcase/clz/caseClzList.jsp">案件分类</a>
                        </li>
                        <li>
                            <a href="javascript:;">委托管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/legalcase/entrust/caseEntrustList.jsp">案件委托</a>
                                </li>
                                <li>
                                    <a href="/view/legalcase/entrust/docEntrustList.jsp">文书委托</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">平台发布</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/legalcase/publish/caseEntrustList.jsp">案件委托</a>
                                </li>
                                <li>
                                    <a href="/view/legalcase/publish/docEntrustList.jsp">文书委托</a>
                                </li>
                                <li>
                                    <a href="/view/legalcase/publish/addEntrust.jsp">添加委托</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="">
                    <a href="javascript:;">
                        <i class="glyphicon glyphicon-briefcase"></i>
                        <span class="title">商务中心</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a class="" href="javascript:;">商品管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="javascript:;">服务分类</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="javascript:;">订单管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="javascript:;">服务订单</a>
                                </li>
                                <li>
                                    <a href="javascript:;">预约订单</a>
                                </li>
                                <li>
                                    <a href="javascript:;">委托订单</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="javascript:;">提现管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="javascript:;">提现申请</a>
                                </li>
                                <li>
                                    <a href="javascript:;">提现记录</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="javascript:;">退款管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="javascript:;">退款申请</a>
                                </li>
                                <li>
                                    <a href="javascript:;">退款记录</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="javascript:;">抵用券管理</a>
                        </li>
                    </ul>
                </li>
                <li class="">
                    <a href="javascript:;">
                        <i class="fa fa-user"></i>
                        <span class="title">客户中心</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="javascript:;">会员管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/customercenter/membermanagement/memberList.jsp">会员管理</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/membermanagement/transRecordList.jsp">交易记录</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/membermanagement/messageList.jsp">留言管理</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/membermanagement/complaintAndAdvice.jsp">投诉建议</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">律师管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/lawyerManagementList.jsp">律师管理</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/professionalFieldList.jsp">专业领域</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/complaintAndAdviceList.jsp">投诉建议</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/incomeRecord.jsp">收入记录</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="">
                    <a href="javascript:;">
                        <i class="fa fa-align-justify"></i>
                        <span class="title">内容管理</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="javascript:;">分类管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/contentmanager/classify/classifyManagerList.jsp">分类列表</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">资讯动态</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/contentmanager/consulting/consultingManagerList.jsp">资讯管理</a>
                                </li>
                                <li>
                                    <a href="javascript:;">动态管理</a>
                                </li>
                                <li>
                                    <a href="javascript:;">公益管理</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">活动管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/contentmanager/activity/topicList.jsp">话题管理</a>
                                </li>
                                <li>
                                    <a href="/view/contentmanager/activity/activityList.jsp">活动管理</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">资源库管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="javascript:;">发现分类</a>
                                </li>
                                <li>
                                    <a href="javascript:;">发现管理</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">帮助管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="javascript:;">协议帮助管理</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="">
                    <a href="javascript:;">
                        <i class="fa fa-maxcdn"></i>
                        <span class="title">移动管理</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="javascript:;">app更新设置</a>
                        </li>
                        <li>
                            <a href="javascript:;">app消息群发</a>
                        </li>
                        <li>
                            <a href="javascript:;">客户端首页推荐管理</a>
                        </li>
                        <li>
                            <a href="javascript:;">律师端首页推荐管理</a>
                        </li>
                    </ul>
                </li>
                <li class="">
                    <a href="javascript:;">
                        <i class="fa fa-gear"></i>
                        <span class="title">系统管理</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="javascript:;">基础设置</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="javascript:;">站点设置</a>
                                </li>
                                <li>
                                    <a href="javascript:;">密码修改</a>
                                </li>
                                <li>
                                    <a href="javascript:;">支付设置</a>
                                </li>
                                <li>
                                    <a href="javascript:;">区域设置</a>
                                </li>
                                <li>
                                    <a href="javascript:;">银行编码设置</a>
                                </li>
                                <li>
                                    <a href="javascript:;">抵用券规则设置</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">权限管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="javascript:;">权限组管理</a>
                                </li>
                                <li>
                                    <a href="javascript:;">管理员列表</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="">
                    <a href="javascript:;">
                        <i class="fa fa-th-large"></i>
                        <span class="title">网站管理</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="javascript:;">基础设置</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="javascript:;">站点设置</a>
                                </li>
                                <li>
                                    <a href="javascript:;">首页轮播图设置</a>
                                </li>
                                <li>
                                    <a href="javascript:;">关于设置</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">线下律所管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="javascript:;">线下律所列表</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">法律咨询管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="javascript:;">法律咨询列表</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- MAIN MENU - END -->
    </div>
</div>
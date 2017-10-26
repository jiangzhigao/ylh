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
                    <ul class="sub-menu">
                    </ul>
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
                        <i class="fa fa-suitcase"></i>
                        <span class="title">商务中心</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a class="" href="javascript:;">商品管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/business/product/serviceClzList.jsp">服务分类</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="javascript:;">订单管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/business/order/service/serviceOrderList.jsp">服务订单</a>
                                </li>
                                <li>
                                    <a href="/view/business/order/reservation/reservationOrderList.jsp">预约订单</a>
                                </li>
                                <li>
                                    <a href="/view/business/order/entrust/entrustOrderList.jsp">委托订单</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="javascript:;">提现管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/business/cash/apply/withdrawCashApplyList.jsp">提现申请</a>
                                </li>
                                <li>
                                    <a href="/view/business/cash/record/withdrawCashRecordList.jsp">提现记录</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="javascript:;">退款管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/business/refund/apply/refundApplyList.jsp">退款申请</a>
                                </li>
                                <li>
                                    <a href="/view/business/refund/record/refundRecordList.jsp">退款记录</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="/view/business/coupon/couponList.jsp">抵用券管理</a>
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
                                    <a href="/view/customercenter/membermanagement/member/memberList.jsp">会员管理</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/membermanagement/trans/transRecordList.jsp">交易记录</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/membermanagement/message/leaveMessageList.jsp">留言管理</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/membermanagement/feedback/feedbackList.jsp">投诉建议</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">律师管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/lawyer/lawyerManagementList.jsp">律师管理</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/speciality/specialityList.jsp">专业领域</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/complaint/complaintAndAdviceList.jsp">投诉建议</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/income/incomeRecord.jsp">收入记录</a>
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
                                    <a href="/view/contentmanager/classify/classifyList.jsp">分类列表</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">资讯动态</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/contentmanager/information/news/newsList.jsp">资讯管理</a>
                                </li>
                                <li>
                                    <a href="/view/contentmanager/information/trend/trendList.jsp">动态管理</a>
                                </li>
                                <li>
                                    <a href="/view/contentmanager/information/commonweal/commonwealList.jsp">公益管理</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">活动管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/contentmanager/activity/topic/topicList.jsp">话题管理</a>
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
                                    <a href="/view/contentmanager/repository/clzdiscovery/clzList.jsp">发现分类</a>
                                </li>
                                <li>
                                    <a href="/view/contentmanager/repository/discovery/discoveryList.jsp">发现管理</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">帮助管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/contentmanager/help/helpList.jsp">协议帮助管理</a>
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
                            <a href="/view/mobile/version/appVersionList.jsp">app更新设置</a>
                        </li>
                        <li>
                            <a href="/view/mobile/message/appPushList.jsp">app消息群发</a>
                        </li>
                        <li>
                            <a href="/view/mobile/recommend/client/appClientList.jsp">客户端首页推荐管理</a>
                        </li>
                        <li>
                            <a href="/view/mobile/recommend/lawyer/appLawyerList.jsp">律师端首页推荐管理</a>
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
                                    <a href="/view/sys/settings/site/siteSettings.jsp">站点设置</a>
                                </li>
                                <li>
                                    <a href="/view/sys/settings/pwd/updatePwd.jsp">密码修改</a>
                                </li>
                                <li>
                                    <a href="/view/sys/settings/pay/payTypeList.jsp">支付设置</a>
                                </li>
                                <li>
                                    <a href="/view/sys/settings/district/districtList.jsp">区域设置</a>
                                </li>
                                <li>
                                    <a href="/view/sys/settings/bank/bankCodeList.jsp">银行编码设置</a>
                                </li>
                                <li>
                                    <a href="/view/sys/settings/coupon/couponRuleList.jsp">抵用券规则设置</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">权限管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/sys/permission/role/roleList.jsp">权限组管理</a>
                                </li>
                                <li>
                                    <a href="/view/sys/permission/user/userList.jsp">管理员列表</a>
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
                                    <a href="/view/internet/settings/site/siteSettings.jsp">站点设置</a>
                                </li>
                                <li>
                                    <a href="/view/internet/settings/homepage/slideshowSettings.jsp">首页轮播图设置</a>
                                </li>
                                <li>
                                    <a href="/view/internet/settings/about/aboutSettings.jsp">关于设置</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">线下律所管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/internet/lawfirm/lawFirmList.jsp">线下律所列表</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">法律咨询管理</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/internet/legaladvice/adviceList.jsp">法律咨询列表</a>
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
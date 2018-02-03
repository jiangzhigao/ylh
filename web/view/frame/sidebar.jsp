<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="page-container row-fluid">
    <!-- SIDEBAR - START -->
    <div class="page-sidebar ">
        <!-- MAIN MENU - START -->
        <div class="page-sidebar-wrapper" id="main-menu-wrapper" style="height: 1200px;">
            <!-- USER INFO - START -->
            <!-- USER INFO - END -->
            <ul class='wraplist' id="menuList">
                <%--<li class="first biz open">
                    <a href="/main_.jsp" target="ylxmain">
                        <i class="fa fa-tachometer"></i>
                        <span class="title">首页</span>
                    </a>
                    &lt;%&ndash;<ul class="sub-menu">
                    </ul>&ndash;%&gt;
                </li>
                <li class="first">
                    <a href="javascript:;">
                        <i class="fa fa-file-text"></i>
                        <span class="title">案件管理</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="/view/legalcase/clz/caseClzList_.jsp" target="ylxmain" class="biz">案件分类</a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <span class="title">委托管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/legalcase/entrust/caseEntrustList_.jsp" target="ylxmain" class="biz">案件委托</a>
                                </li>
                                <li>
                                    <a href="/view/legalcase/entrust/docEntrustList_.jsp" target="ylxmain" class="biz">文书委托</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <span class="title">平台发布</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/legalcase/publish/caseEntrustList_.jsp" target="ylxmain" class="biz">案件委托</a>
                                </li>
                                <li>
                                    <a href="/view/legalcase/publish/docEntrustList_.jsp" target="ylxmain" class="biz">文书委托</a>
                                </li>
                                <li>
                                    <a href="/view/legalcase/publish/addEntrust_.jsp" target="ylxmain" class="biz">添加委托</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="first">
                    <a href="javascript:;">
                        <i class="fa fa-suitcase"></i>
                        <span class="title">商务中心</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a class="" href="javascript:;">
                                <span class="title">商品管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/business/product/serviceClzList_.jsp" target="ylxmain" class="biz">服务分类</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="javascript:;">
                                <span class="title">订单管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/business/order/service/serviceOrderList_.jsp" target="ylxmain" class="biz">服务订单</a>
                                </li>
                                <li>
                                    <a href="/view/business/order/reservation/orderList_.jsp" target="ylxmain" class="biz">预约订单</a>
                                </li>
                                <li>
                                    <a href="/view/business/order/entrust/entrustOrderList_.jsp" target="ylxmain" class="biz">委托订单</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="javascript:;">
                                <span class="title">提现管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/business/cash/apply/withdrawCashApplyList_.jsp" target="ylxmain" class="biz">提现申请</a>
                                </li>
                                <li>
                                    <a href="/view/business/cash/record/withdrawCashRecordList_.jsp" target="ylxmain" class="biz">提现记录</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="javascript:;">
                                <span class="title">退款管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/business/refund/apply/refundApplyList_.jsp" target="ylxmain" class="biz">退款申请</a>
                                </li>
                                <li>
                                    <a href="/view/business/refund/record/refundRecordList_.jsp" target="ylxmain" class="biz">退款记录</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="" href="/view/business/coupon/couponList_.jsp" target="ylxmain" class="biz">抵用券管理</a>
                        </li>
                    </ul>
                </li>
                <li class="first">
                    <a href="javascript:;">
                        <i class="fa fa-user"></i>
                        <span class="title">客户中心</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="javascript:;">
                                <span class="title">会员管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/customercenter/membermanagement/member/memberList_.jsp" target="ylxmain" class="biz">会员管理</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/membermanagement/trans/transRecordList_.jsp" target="ylxmain" class="biz">交易记录</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/membermanagement/message/leaveMessageList_.jsp" target="ylxmain" class="biz">留言管理</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/membermanagement/feedback/feedbackList_.jsp" target="ylxmain" class="biz">投诉建议</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <span class="title">律师管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/lawyer/lawyerManagementList_.jsp" target="ylxmain" class="biz">律师管理</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/speciality/specialityList_.jsp" target="ylxmain" class="biz">专业领域</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/complaint/complaintAndAdviceList_.jsp" target="ylxmain" class="biz">投诉建议</a>
                                </li>
                                <li>
                                    <a href="/view/customercenter/lawyermanagement/income/incomeRecord_.jsp" target="ylxmain" class="biz">收入记录</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="first">
                    <a href="javascript:;">
                        <i class="fa fa-align-justify"></i>
                        <span class="title">内容管理</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="javascript:;">
                                <span class="title">分类管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/contentmanager/classify/classifyList.jsp" target="ylxmain" class="biz">分类列表</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <span class="title">资讯动态</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/contentmanager/information/news/newsList.jsp" target="ylxmain" class="biz">资讯管理</a>
                                </li>
                                <li>
                                    <a href="/view/contentmanager/information/trend/trendList.jsp" target="ylxmain" class="biz">动态管理</a>
                                </li>
                                <li>
                                    <a href="/view/contentmanager/information/commonweal/commonwealList.jsp" target="ylxmain" class="biz">公益管理</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <span class="title">活动管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/contentmanager/activity/topic/topicList.jsp" target="ylxmain" class="biz">话题管理</a>
                                </li>
                                <li>
                                    <a href="/view/contentmanager/activity/activity/activityList.jsp" target="ylxmain" class="biz">活动管理</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <span class="title">资源库管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/contentmanager/repository/foundclassity/foundClassityList.jsp" target="ylxmain" class="biz">发现分类</a>
                                </li>
                                <li>
                                    <a href="/view/contentmanager/repository/discovery/discoveryList.jsp" target="ylxmain" class="biz">发现管理</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <span class="title">帮助管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/contentmanager/help/helpList.jsp" target="ylxmain" class="biz">协议帮助管理</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="first">
                    <a href="javascript:;">
                        <i class="fa fa-maxcdn"></i>
                        <span class="title">移动管理</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="/view/mobile/version/appVersionList_.jsp" target="ylxmain" class="biz">app更新设置</a>
                        </li>
                        <li>
                            <a href="/view/mobile/message/appPushList_.jsp" target="ylxmain" class="biz">app消息群发</a>
                        </li>
                        <li>
                            <a href="/view/mobile/recommend/client/appClientList_.jsp" target="ylxmain" class="biz">客户端首页推荐管理</a>
                        </li>
                        <li>
                            <a href="/view/mobile/recommend/lawyer/appLawyerList_.jsp" target="ylxmain" class="biz">律师端首页推荐管理</a>
                        </li>
                    </ul>
                </li>
                <li class="first">
                    <a href="javascript:;">
                        <i class="fa fa-gear"></i>
                        <span class="title">系统管理</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="javascript:;">
                                <span class="title">基础设置</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/sys/settings/site/siteSettings.jsp" target="ylxmain" class="biz">站点设置</a>
                                </li>
                                <li>
                                    <a href="/view/sys/settings/pwd/updatePwd.jsp" target="ylxmain" class="biz">密码修改</a>
                                </li>
                                <li>
                                    <a href="/view/sys/settings/pay/payTypeList.jsp" target="ylxmain" class="biz">支付设置</a>
                                </li>
                                <li>
                                    <a href="/view/sys/settings/district/districtList.jsp" target="ylxmain" class="biz">区域设置</a>
                                </li>
                                <li>
                                    <a href="/view/sys/settings/bank/bankCodeList.jsp" target="ylxmain" class="biz">银行编码设置</a>
                                </li>
                                <li>
                                    <a href="/view/sys/settings/coupon/couponRuleList.jsp" target="ylxmain" class="biz">抵用券规则设置</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <span class="title">权限管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/sys/permission/role/roleList_.jsp" target="ylxmain" class="biz">权限组管理</a>
                                </li>
                                <li>
                                    <a href="/view/sys/permission/user/userList_.jsp" target="ylxmain" class="biz">管理员列表</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="first">
                    <a href="javascript:;">
                        <i class="fa fa-th-large"></i>
                        <span class="title">网站管理</span><span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="javascript:;">
                                <span class="title">基础设置</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/internet/settings/site/siteSettings_.jsp" target="ylxmain" class="biz">站点设置</a>
                                </li>
                                <li>
                                    <a href="/view/internet/settings/homepage/slideshowSettings_.jsp" target="ylxmain" class="biz">首页轮播图设置</a>
                                </li>
                                <li>
                                    <a href="/view/internet/settings/about/aboutSettings_.jsp" target="ylxmain" class="biz">关于设置</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <span class="title">线下律所管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/internet/lawfirm/lawFirmList_.jsp" target="ylxmain" class="biz">线下律所列表</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <span class="title">法律咨询管理</span><span class="arrow"></span>
                            </a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="/view/internet/legaladvice/adviceList_.jsp" target="ylxmain" class="biz">法律咨询列表</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>--%>
            </ul>
        </div>
        <!-- MAIN MENU - END -->
    </div>
</div>
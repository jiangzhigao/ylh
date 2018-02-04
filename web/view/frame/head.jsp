<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
<meta name="renderer" content="webkit|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>
<meta charset="utf-8"/>
<title>一律行后台管理系统</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content= "no-cache, must-revalidate">
<meta content="ylx" name="description"/>
<meta content="ylx" name="author"/>
<!-- Favicons -->
<link href="#" rel="shortcut icon" type="image/x-icon"/>
<!-- CSS Style -->
<link href="/css/__base.min.css" rel="stylesheet">
<script type="text/javascript" src="/js/__jq.js"></script>
<script type="text/javascript" src="/js/custom/dataCipher.js"></script>
<script type="text/javascript" src="/js/scripts.js"></script>
<script src="http://pv.sohu.com/cityjson?ie=utf-8" charset="UTF-8"></script>

<script type="text/javascript">
    /*var clientIp = returnCitySN["cip"];*/
    /*var webBasePath = "http://120.76.101.46/ylx/api";*/
    var webBasePath = "http://localhost:8888/ylx/api";
    var homeBasePath = "http://120.76.101.46/ylx";
    /*var homeBasePath = "http://120.76.101.46/ylx";
    var webBasePath = "http://106.14.10.28:8888/ylx/api";*/
    /*var webBasePath = "http://106.14.10.28:8888/ylx/api";*/
    /*var homePath = "http://120.76.101.46";*/
    var homePath = "";
    var ___system_navigation_config = {
            "nav": {
                "home_index": "/main.jsp",
                "c_case_entrust_list": "/view/legalcase/entrust/caseEntrustList.jsp",
                "c_doc_entrust_list": "/view/legalcase/entrust/docEntrustList.jsp",
                "p_case_entrust_list": "/view/legalcase/publish/caseEntrustList.jsp",
                "p_doc_entrust_list": "/view/legalcase/publish/docEntrustList.jsp",
                "p_entrust_add": "/view/legalcase/publish/addEntrust.jsp",
                "case_clz_list": "/view/legalcase/clz/caseClzList.jsp",
                "mc_trans_list": "/view/customercenter/membermanagement/trans/transRecordList.jsp",
                "mc_member_list": "/view/customercenter/membermanagement/member/memberList.jsp",
                "mc_feedback_list": "/view/customercenter/membermanagement/feedback/feedbackList.jsp",
                "mc_Leave_message_list": "/view/customercenter/membermanagement/message/leaveMessageList.jsp",
                "l_complaintAndAdviceList": "/view/customercenter/lawyermanagement/complaint/complaintAndAdviceList.jsp",
                "l_lawyerManagementList": "/view/customercenter/lawyermanagement/lawyer/lawyerManagementList.jsp",
                "mc_speciality_list": "/view/customercenter/lawyermanagement/speciality/specialityList.jsp",
                "l_incomeRecord": "/view/customercenter/lawyermanagement/income/incomeRecord.jsp",
                "cnt_classifyList":"/view/contentmanager/classify/classifyList.jsp",
                "cnt_news_list":"/view/contentmanager/information/news/newsList.jsp",
                "cnt_trend_list":"/view/contentmanager/information/trend/trendList.jsp",
                "cnt_commonweal_list":"/view/contentmanager/information/commonweal/commonwealList.jsp",
                "cnt_topic_list":"/view/contentmanager/activity/topic/topicList.jsp",
                "cnt_activity_list":"/view/contentmanager/activity/activity/activityList.jsp",
                "cnt_discovery_list":"/view/contentmanager/repository/discovery/discoveryList.jsp",
                "cnt_foundclassity_list":"/view/contentmanager/repository/foundclassity/foundClassityList.jsp",
                "cnt_help_list":"/view/contentmanager/help/helpList.jsp",
                "bz_service_clz_List":"/view/business/product/serviceClzList.jsp",
                "bz_service_order_List":"/view/business/order/service/serviceOrderList.jsp",
                "bz_reservation_order_List":"/view/business/order/reservation/orderList.jsp",
                "bz_entrust_order_List":"/view/business/order/entrust/entrustOrderList.jsp",
                "bz_withdraw_cash_apply_List":"/view/business/cash/apply/withdrawCashApplyList.jsp",
                "bz_withdraw_cash_record_List":"/view/business/cash/record/withdrawCashRecordList.jsp",
                "bz_refund_apply_List":"/view/business/refund/apply/refundApplyList.jsp",
                "bz_refund_record_List":"/view/business/refund/record/refundRecordList.jsp",
                "bz_coupon_List":"/view/business/coupon/couponList.jsp",
                "app_version_List":"/view/mobile/version/appVersionList.jsp",
                "app_push_List":"/view/mobile/message/appPushList.jsp",
                "app_client_recommend_List":"/view/mobile/recommend/client/appClientList.jsp",
                "app_lawyer_recommend_List":"/view/mobile/recommend/lawyer/appLawyerList.jsp",
                "sys_settings_site":"/view/sys/settings/site/siteSettings.jsp",
                "sys_settings_update_pwd":"/view/sys/settings/pwd/updatePwd.jsp",
                "sys_settings_pay_type_list":"/view/sys/settings/pay/payTypeList.jsp",
                "sys_settings_district_list":"/view/sys/settings/district/districtList.jsp",
                "sys_settings_bank_code_list":"/view/sys/settings/bank/bankCodeList.jsp",
                "sys_settings_coupon_rule_list":"/view/sys/settings/coupon/couponRuleList.jsp",
                "sys_permission_role_list":"/view/sys/permission/role/roleList.jsp",
                "sys_permission_user_list":"/view/sys/permission/user/userList.jsp",
                "internet_settings_site":"/view/internet/settings/site/siteSettings.jsp",
                "internet_settings_about":"/view/internet/settings/about/aboutSettings.jsp",
                "internet_home_page_slideshow":"/view/internet/settings/homepage/slideshowSettings.jsp",
                "internet_law_firm_List":"/view/internet/lawfirm/lawFirmList.jsp",
                "internet_legal_advice_List":"/view/internet/legaladvice/adviceList.jsp",



            },
            "currentNav": "/"
        };
</script>
<!--[if lt IE 9]>
<script type="text/javascript" src="/js/__h5shiv.js"></script>
<link href="/css/ie8.min.css" rel="stylesheet">
<![endif]-->
<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
<meta name="renderer" content="webkit|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=EDGE"/>
<meta charset="utf-8"/>
<title>一律行后台管理系统</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<meta content="ylx" name="description"/>
<meta content="ylx" name="author"/>
<!-- Favicons -->
<link href="#" rel="shortcut icon" type="image/x-icon"/>
<!-- CSS Style -->
<link href="/css/__base.min.css" rel="stylesheet">
<script type="text/javascript" src="/js/__jq.js"></script>
<script type="text/javascript" src="/js/custom/dataCipher.js"></script>
<script src="http://pv.sohu.com/cityjson?ie=utf-8" charset="UTF-8"></script>

<script type="text/javascript">
    var clientIp = returnCitySN["cip"];
    /*var webBasePath = "http://120.76.101.46/ylx/api";*/
    var webBasePath = "http://localhost:8888/ylx/api";
    var homePath = "http://120.76.101.46";
    var ___system_navigation_config = {
            "nav": {
                "home_index": "/main.jsp",
                "c_case_entrust_list": "/view/legalcase/entrust/caseEntrustList.jsp",
                "c_doc_entrust_list": "/view/legalcase/entrust/docEntrustList.jsp",
                "p_case_entrust_list": "/view/legalcase/publish/caseEntrustList.jsp",
                "p_doc_entrust_list": "/view/legalcase/publish/docEntrustList.jsp",
                "p_entrust_add": "/view/legalcase/publish/addEntrust.jsp",
                "case_clz_list": "/view/legalcase/clz/caseClzList.jsp",
                "m_transRecordList": "/view/customercenter/membermanagement/transRecordList.jsp",
                "m_memberList": "/view/customercenter/membermanagement/memberList.jsp",
                "m_complaintAndAdvice": "/view/customercenter/membermanagement/complaintAndAdvice.jsp",
                "m_messageList": "/view/customercenter/membermanagement/messageList.jsp",
                "l_complaintAndAdviceList": "/view/customercenter/lawyermanagement/complaintAndAdviceList.jsp",
                "l_lawyerManagementList": "/view/customercenter/lawyermanagement/lawyerManagementList.jsp",
                "l_professionalFieldList": "/view/customercenter/lawyermanagement/professionalFieldList.jsp",
                "l_incomeRecord": "/view/customercenter/lawyermanagement/incomeRecord.jsp",
                "cnt_classifyList":"/view/contentmanager/classify/classifyList.jsp",
                "cnt_news_list":"/view/contentmanager/information/news/newsList.jsp",
                "cnt_trend_list":"/view/contentmanager/information/trend/trendList.jsp",
                "cnt_commonweal_list":"/view/contentmanager/information/commonweal/commonwealList.jsp",
            },
            "currentNav": "/"
        };
</script>
<!--[if lt IE 9]>
<script type="text/javascript" src="/js/__h5shiv.js"></script>
<link href="/css/ie8.min.css" rel="stylesheet">
<![endif]-->
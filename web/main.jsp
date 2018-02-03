<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <%@ include file="/view/frame/head.jsp"%>

	<style type="text/css">
		.bus-md-fa{
			height: 85px;
			width: 85px;
			position: absolute;
			left: 25%;
		}
		.bus-md-title{
			margin-top: 51%;
			width: 100%;
			padding: 5px 0 0 0;
		}
		.bus-md{
			position: relative;
			background-color: #fff;
			height: 150px;
			width: 15%;
			text-align: center;
			margin: 8px;
			float: left;
			padding: 25px 0 0 0;
		}
		.bus-tab{
			width: 100%;
		}
		.menu-lb{
			width: 100%;
		}
		.menu-lb div{
			border: 1px solid #e8e8e8;
			background-color: #fff;
			margin: 10px 13px 0px 6px;
			padding-left: 15px;
		}
		.menu-lb div h4{
			font-size: 15px;
			line-height: 20px;
			color: #676767;
		}
		.m-chart{
			height: 220px;
			background-color: #fff;
			margin-left: 7px;
			margin-right: 14px;
			text-align: center;
		}
		.m-chart .left{
			height: 100%;
			float: left;
			width: 37%;
			border-right: 2px dashed #e1e1e8;
			padding: 15px;
		}
		.m-chart .right{
			height: 100%;
			float: left;
			width: 63%;
			padding: 15px;
		}
		.m-chart .left .clz{
			margin-bottom: 25px;
		}
		.m-chart .right .clz{
			margin-bottom: 25px;
		}

		.m-chart .lb{
			padding: 0;margin: 0;height: 30px;
		}
		.m-chart .lb h6{
			display: inline-block;
			font-size: 10px;
		}

		.lb{width: 100%;}

		.cc{
			color: #767676;
			width: 55%;
			margin-right: 3px;
			text-align: right;
		}
		.bus-md:hover{
			cursor: pointer;
		}
	</style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class=" boxed">
<!-- START TOPBAR -->
<!--  SIDEBAR - END -->
<!-- START CONTENT -->
<section class="wrapper" style='margin-top:0px;display:inline-block;width:100%;padding:15px 0 0 0;'>
	<header class="panel_header" style="background-color: #fff;margin-top:45px;">
		<h4 class="title pull-left" style="font-size: 15px;">首页</h4>
	</header>

	<div class="col-xs-12">
		<section class="box">
			<div class="" style="padding-left: 15px;">
				<div class="">
					<div class="bus-tab">
						<div class="bus-md" biz-url="/view/customercenter/membermanagement/member/memberList.jsp">
							<div class="bus-md-fa" style="background: url('./images/bz/member.png') 0 0 no-repeat;background-size:85px 85px;">
							</div>
							<div class="bus-md-title">
								<span>会员管理</span>
							</div>
						</div>
						<div class="bus-md" biz-url="/view/customercenter/lawyermanagement/lawyer/lawyerManagementList.jsp">
							<div class="bus-md-fa" style="background: url('./images/bz/lawyer.png') 0 0 no-repeat;background-size:85px 85px;">
							</div>
							<div class="bus-md-title">
								<span>律师管理</span>
							</div>
						</div>
						<div class="bus-md" biz-url="/view/business/order/service/serviceOrderList.jsp">
							<div class="bus-md-fa" style="background: url('./images/bz/ser-order.png') 0 0 no-repeat;background-size:85px 85px;">
							</div>
							<div class="bus-md-title">
								<span>服务订单</span>
							</div>
						</div>
						<div class="bus-md" biz-url="/view/business/order/reservation/orderList.jsp">
							<div class="bus-md-fa" style="background: url('./images/bz/sub-order.png') 0 0 no-repeat;background-size:85px 85px;">
							</div>
							<div class="bus-md-title">
								<span>预约订单</span>
							</div>
						</div>
						<div class="bus-md" biz-url="/view/business/order/entrust/entrustOrderList.jsp">
							<div class="bus-md-fa" style="background: url('./images/bz/entrust.png') 0 0 no-repeat;background-size:85px 85px;">
							</div>
							<div class="bus-md-title">
								<span>委托订单</span>
							</div>
						</div>
						<div class="bus-md" biz-url="/view/internet/settings/site/siteSettings.jsp">
							<div class="bus-md-fa" style="background: url('./images/bz/site-setting.png') 0 0 no-repeat;background-size:85px 85px;">
							</div>
							<div class="bus-md-title">
								<span>站点设置</span>
							</div>
						</div>
					</div>
				</div>

				<div class="clearfix"></div>

				<div class="menu-lb">
					<div>
						<h4><strong>会员信息</strong></h4>
					</div>
				</div>

				<div class="m-chart">
					<div class="left">
						<div class="clz">
							新增会员
						</div>
						<div class="clz">
							昨日<span style="color:#ff8500;font-size: 30px;padding: 0 5px;" id="lastDayUserNumber">0</span>人
						</div>
						<div>
							<div class="col-xs-6 invoice-infoblock pull-left">
								<div class="lb"><div class="cc pull-left">上周:</div><div class="text-primary pull-left" style="margin-left: 5px;text-align: left" id="lastWeekUserNumber">10000</div><span class="pull-left" style="display: block;text-align: left;padding-left: 3px;">人</span></div>
								<div class="lb"><div class="cc pull-left">上月:</div><div class="text-primary pull-left" style="margin-left: 5px;text-align: left" id="lastMonthUserNumber">10000</div><span class="pull-left" style="display: block;text-align: left;padding-left: 3px;">人</span></div>
							</div>
							<div class="col-xs-6 invoice-infoblock text-right">
								<div class="lb"><div class="cc pull-left">前3个月:</div><div class="text-primary pull-left" style="margin-left: 5px;text-align: left" id="last3MonthUserNumber">10000</div><span class="pull-left" style="display: block;text-align: left;padding-left: 3px;">人</span></div>
								<div class="lb"><div class="cc pull-left">前12个月:</div><div class="text-primary pull-left" style="margin-left: 5px;text-align: left" id="last12MonthUserNumber">10000</div><span class="pull-left" style="display: block;text-align: left;padding-left: 3px;">人</span></div>
							</div>
						</div>
					</div>

					<div class="right">
						<div style="width: 60%;float: left;">
							<div class="clz">
								消费金额
							</div>
							<div class="clz">
								昨日<span style="color:#ff8500;font-size: 30px;padding: 0 5px;" id="lastDayAmount">0</span>元
							</div>
							<div>
								<div class="col-xs-6 invoice-infoblock pull-left">
									<div class="lb"><div class="cc pull-left">上周:</div><div class="text-primary pull-left" style="margin-left: 5px;text-align: left" id="lastWeekAmount">10000</div><span class="pull-left" style="display: block;text-align: left;padding-left: 3px;">元</span></div>
									<div class="lb"><div class="cc pull-left">上月:</div><div class="text-primary pull-left" style="margin-left: 5px;text-align: left" id="lastMonthAmount">10000</div><span class="pull-left" style="display: block;text-align: left;padding-left: 3px;">元</span></div>
								</div>
								<div class="col-xs-6 invoice-infoblock text-right">
									<div class="lb"><div class="cc pull-left">前3个月:</div><div class="text-primary pull-left" style="margin-left: 5px;text-align: left" id="last3MonthAmount">10000</div><span class="pull-left" style="display: block;text-align: left;padding-left: 3px;">元</span></div>
									<div class="lb"><div class="cc pull-left">前12个月:</div><div class="text-primary pull-left" style="margin-left: 5px;text-align: left" id="last12MonthAmount">10000</div><span class="pull-left" style="display: block;text-align: left;padding-left: 3px;">元</span></div>
								</div>
							</div>
						</div>
						<div style="width: 40%;float: left;"></div>
					</div>
				</div>
				<%--<div class="clearfix"></div>--%>
			</div>
		</section>
	</div>
</section>
<!-- END CONTENT -->
</div>
<!-- END CONTAINER -->

<script type="text/javascript" src="/js/__base.min.js"></script>
<script type="text/javascript" src="/js/pageScripts/main.js"></script>
<!-- START FOOTER -->
<!--  FOOTER - END -->
</body>

</html>

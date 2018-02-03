<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<head>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content= "no-cache, must-revalidate">
    <%@ include file="/view/frame/head.jsp"%>

    <style type="text/css">
        .form-group {
            margin-bottom: 15px;
        }
        #code {
            font-family:Arial;
            font-style:italic;
            font-weight:bold;
            border:0;
            letter-spacing:2px;
            color:blue;
            height: 32px;
            background-color: #fff;
            filter:chroma(color=#fff);
            outline:none;
        }

        .error-mess {
            clear: both;
            background: #fff0f0;
            border: 1px solid #ffd2d2;
            height: 26px;
            line-height: 26px;
            margin-top: 10px;
            color: #b74d46;
            width: 100%;
        }
        .error-mess .error-icon {
            display: inline-block;
            background: url('images/valid-icons.png') no-repeat 0 0;
            width: 16px;
            height: 16px;
            vertical-align: middle;
            margin: -4px 5px 0 5px;
        }
        .error-mess {
            clear: both;
            background: #fff0f0;
            border: 1px solid #ffd2d2;
            height: 26px;
            line-height: 26px;
            margin-top: 10px;
            color: #b74d46;
            width: 100%;
        }
    </style>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->

<body class="">
    <div class="row">
        <div class="col-xs-12">
            <div class="row">
                <div class="col-xs-4" style="margin-left: 39%;">
                    <div style="width: 285px;">
                        <section class="box sign-box" style="margin: 80px 0 0 0;">
                            <header class="panel_header" style="background-color: #f1f2f7;border: 0px;border-bottom:0px;">
                                <div style="width: 100%;">
                                    <img src="images/logo/YLX.png" style="max-width:100%;height:auto;">
                                </div>
                                <div style="width: 100%;text-align: center;margin-top: 30px;">
                                    <h4 class="" style="font-size: 16px;font-weight: 700;">欢迎登陆一律行管理后台</h4>
                                </div>
                            </header>
                            <div class="content-body" style="background-color: #f1f2f7;padding: 10px;border: 0px;padding-top: 1px;">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <form action="main.jsp" method="post" role="form" id="form_users_signin">
                                            <div class="form-group">
                                                <div class="item">
                                                    <input type="text" class="form-control" id="username" name="username" placeholder="请输入用户名">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" id="password" name="password" placeholder="请输入密码">
                                            </div>
                                            <div class="form-group" id="captcha-div">
                                                <input style="display: inline;width: 70%" type="text" class="form-control" id="captcha" name="captcha" placeholder="请输入验证码">
                                                <input style="display: inline;width: 28%" type = "button" id="code" onclick="setCaptcha();"/>
                                            </div>
                                            <%--<div class="clearfix"></div>--%>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-success form_submit_handle" style="width: 100%;background-color: #1ab394;">登录</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="/js/__base.min.js"></script>
    <script type="text/javascript" src="/js/plugins/jquery-validate/jquery.validate.js"></script>
    <script type="text/javascript" src="/js/plugins/jquery-validate/additional-methods.js"></script>
    <script type="text/javascript">
        function createCaptcha(){
            var code = '';
            var codeLength = 4;//验证码的长度
            var checkCode = document.getElementById("code");
            var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
                'S','T','U','V','W','X','Y','Z');//随机数
            for(var i = 0; i < codeLength; i++) {//循环操作
                var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
                code += random[index];//根据索引取得随机数加到code上
            }
            return code;
        }
        //初始化
        window.onload = setCaptcha();

        function setCaptcha(){
            var inCode = document.getElementById("code");
            inCode.value = createCaptcha();//把code值赋给验证码
        }
    </script>
    <script type="text/javascript" src="/js/pageScripts/login.js"></script>
</body>

</html>

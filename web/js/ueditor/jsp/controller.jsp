<%@ page language="java" contentType="text/html; charset=UTF-8"
	import="com.baidu.ueditor.ActionEnter"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%

    request.setCharacterEncoding( "utf-8" );
	response.setHeader("Content-Type" , "text/html");
	
	String rootPath = application.getRealPath( "/" );
	String webBasePath = "http://localhost:8888/ylx/api";
	System.out.println(">>>>>>>>>>>>>>>>>>>>ueditor rootpath: "+webBasePath);
	out.write( new ActionEnter( request, rootPath ).exec() );
	
%>
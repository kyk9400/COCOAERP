<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<title>Insert title here</title>
<style type="text/css">
#contents{
	height:100%;
	width:100%;
}
.body{height: 50%;}
.footer{text-align: right}
input{width:100%}

.emailContainer{
	border: 1px solid black;
}
.emailContainer div{
	min-width: 90px;	
}
textarea{
	width: 100%;
	min-height: 300px;
	max-height: 300px;
}

</style>
</head>
<body>

   <div class="wrapper d-flex align-items-stretch">
      <%@ include file="/WEB-INF/views/sidebar/sidebar.jsp"%>   <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5 pt-5" style="min-width: 400px;">
      	<h2 class="mb-4">메일 작성</h2>
      	<div class="emailContainer pt-4 pl-4 pr-4 pb-3">
      		<form action="/email/sendEmail.email" method=post onsubmit="return submitCheck();">
	      		<div class="row mb-3">
	      			<div class="col-3 col-sm-2">
	      				제목
	      			</div>
	      			<div class="col-9 col-sm-10 pr-5">
	      				<input type=text name=title id=title>
	      			</div>
	      		</div>
	      		
	      		<div class="row mb-3">
	      			<div class="col-3 col-sm-2">
	      				받는사람
	      			</div>
	      			<div class="col-9 col-sm-10 pr-5">
	      				<input type=text name=receiver required>
	      			</div>
	      		</div>
	      		
	      		<div class="row mb-3">
	      			<div class="col-3 col-sm-2">
	      				파일첨부
	      			</div>
	      			<div class="col-5">
	      				<input type=file>
	      			</div>
	      		</div>
	      		
	      		<div class="row">
	      			<div class="col-12">
	      				<textarea name=contents id=contents></textarea>
	      			</div>
	      		</div>
	      		
	      		<div class="row mt-1">
	      			<div class="col-10"></div>
	      			<div class="col-1">
	      				<input type=submit>
	      			</div>
	      		</div>
      		</form>
      	</div>
        <script>
        	function submitCheck(){
        		console.log("function 들어옴");
        		var title = $("#title").val();
        		console.log(title);
        		console.log(title==null);
        		
        		if(title == null){
        			var titleConfirm = confirm("제목이 비어있습니다.\n(제목 없음)으로 진행할까요?");
        			if(titleConfirm==false){
        				console.log("제목 없음 허용x");
        				return false;
        			}else{
        				return true;
        			}
        		}
        	}
        </script>
      </div>
   </div>
</body>
</html>
"use strict";
var cust=cust||{};
cust=(()=>{
	let compojs,js,custjs;
	let init=()=>{
		js=$.js();
		compojs=js+'/compo/compo.js';
		custjs=js+'/cust/cust.js';
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.when(
				$.getScript(compojs),
				$.getScript(custjs)
		).done(()=>{
			login();
		});
	};
	let login=()=>{
		$('#maincontent').empty();
		$('#maincontent1').empty();
		/*$.getScript(compojs,()=>{*/
			$(compo.cust_login()).appendTo('#maincontent');
			$('input[type=submit]').click(()=>{
				let data={
						customerID : $('input[name=customerID]').val(),
						password : $('input[name=password]').val()
				};
				$.ajax({
					url : $.ctx()+'/customers/'+data.customerID,
					type : 'post',
					data : JSON.stringify(data),
					dataType : 'json',
					contentType : 'application/json',
					success : d=>{
						alert('로그인');
						if(d.customerID!==''){
							alert('로그인 성공'+d.customerID);
							$('#maincontent').html(compo.login_in());
							$('#loginbtn')
								.html('<a href="#"><span id="loging_glyphicon" class="glyphicon glyphicon-off"></span> LogOut</a>');
							$('#loginbtn').click(e=>{
								alert('')
							});
							$('.navbar-brand').empty();
							$('#myNavbar').empty();
							let arr =[{
									txt:'홈',name:'home'
							},{
									txt:'마이페이지',name:'mypage'
							},{
									txt:'정보수정',name:'up'
							},{
									txt:'장바구니',name:'box'
							},{
									txt:'회원탈퇴',name:'del'
							}];
							
							
							$.each(arr,(i,j)=>{
								$('<li><a href="#">'+j.val+'</a></li>')
								.attr('name','j.name')
								.appendTo('#myNavbar ul')
								.click(function(){
									let thta = $(this).attr('name');
									
								});
							});
						}else {
							alert('로그인 실패');
						};
					},
					error : e=>{
						alert('실패');
					}
				});
			});
		/*})*/
	}; 
	return {init:init,
		login:login};
})();





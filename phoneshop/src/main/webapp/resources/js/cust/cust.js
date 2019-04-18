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
		/*$.getScript(compojs,()=>{*/
			$(compo.cust_login()).appendTo('#maincontent');
			$('input[type=submit]').click(e=>{
				e.preventDefault();
				alert('로그인 들어가기');
				let data={
						customerID : $('input[name=customerID]').val(),
						password : $('input[name=password]').val()
				};
				alert('id :'+data.customerID);
				alert('password :'+data.password);
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
								.html('<a href="#"><span id="loging_glyphicon" class="glyphicon glyphicon-off"></span> LogOut</a>')
								.click(()=>{
									alert('로그아웃');
									$('#loginbtn').html('<a href="#"><span id="loging_glyphicon" class="glyphicon glyphicon-log-in"></span> Login</a>');
								});
							/*$('.navbar-brand').empty();*/
							/*$('#myNavbar'+' ul.#navl').empty();*/
/*							let arr =[{
									txt:'홈',name:'home'
							},{
									txt:'구매내',name:'mypage'
							},{
									txt:'정보수정',name:'up'
							},{
									txt:'회원탈퇴',name:'del'
							}];
							
							
							$.each(arr,(i,j)=>{
								$('<li><a href="#">'+j.val+'</a></li>')
								.attr('name','j.name')
								.appendTo('#myNavbar ul')
								.click(function(){
									let that = $(this).attr('name');
									
								});
							});*/
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





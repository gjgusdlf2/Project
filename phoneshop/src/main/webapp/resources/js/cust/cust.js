"use strict";
var cust=cust||{};
cust=(()=>{
	let compojs,js,custjs,phonejs;
	let init=()=>{
		js=$.js();
		compojs=js+'/compo/compo.js';
		custjs=js+'/cust/cust.js';
		phonejs=js+'/phone/phone.js';
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.when(
				$.getScript(compojs),
				$.getScript(custjs),
				$.getScript(phonejs)
		).done(()=>{
			login();
		});
	};
	let login=()=>{
		$('#maincontent').empty();
			$(compo.cust_login()).appendTo('#maincontent');
			$('input[type=submit]').click(e=>{
				e.preventDefault();
				alert('로그인 들어가기');
				let data={
						customerID : $('input[name=customerID]').val()
				};
				alert('id :'+data.customerID);
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
							$('#maincontent').remove();
							let vcc=[{
								txt : '구매내역', name:'pur'
							},{
								txt : '회원탈퇴', name :'del'
							}];
							$.each(vcc,(i,j)=>{
								$('#navl .li').html('<li ><a href="#">'+j.name+'</a></li></ul>')
								        .attr('name',j.name)
								        .click(function(){
								        	let that = $(this).attr('name');
								        	$(this).addClass('active');
								        	$(this).siblings().removeClass('active');
								        	switch(that){
								        	case 'pur' :
								        		
								        		break;
								        	case 'del' :
								        		
								        		break;
								        	}
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
	}; 
	return {init:init,
		login:login};
})();





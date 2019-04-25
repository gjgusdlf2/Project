"use strict";
var cust=cust||{};
cust=(()=>{
	let compojs,js,custjs,phonejs,prdjs,adjs;
	let init=()=>{
		js=$.js();
		compojs=js+'/compo/compo.js';
		custjs=js+'/cust/cust.js';
		phonejs=js+'/phone/phone.js';
		prdjs = js+'/prd/prd.js';
		adjs = js+'/admin/ad.js';
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.when(
				$.getScript(compojs),
				$.getScript(custjs),
				$.getScript(phonejs),
				$.getScript(prdjs),
				$.getScript(adjs)
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
						if(d.customerID!==''){
							if(d.customerID!=='ha'){
								alert('로그인 성공'+d.customerID);
								$('#maincontent').html(compo.login_in());
								$('#loginbtn')
									.html('<a href="#"><span id="loging_glyphicon" class="glyphicon glyphicon-off"></span> LogOut</a>')
									.click(()=>{
										alert('로그아웃');
										$('#loginbtn').html('<a href="#"><span id="loging_glyphicon" class="glyphicon glyphicon-log-in"></span> Login</a>');
										$('#navl').empty();
									});
								$('#maincontent').empty();
								let vcc=[{
									txt : '구매내역', name:'pur'
								},{
									txt : '회원탈퇴', name :'del'
								}];
								$.each(vcc,(i,j)=>{
									$('<li ><a href="#">'+j.txt+'</a></li>')
								        .attr('name',j.name)
								        .attr('id',j.name)
								        .appendTo('#navl')
								        .click(function(){
								        	let that = $(this).attr('name');
								        	$(this).addClass('active');
								        	$(this).siblings().removeClass('active');
								        	switch(that){
								        	case 'pur' :
									        		prd.pur();
								        		break;
								        	case 'del' :
									        		cust.del();
								        		break;
							        	}
							        });
								});
							}else{
								ad.admin();
							}
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
	let del =()=>{
		alert('회원탈퇴 진입');
	};
	return {init:init,
		login:login,del:del};
})();





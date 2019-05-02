"user strict ";
var ad =ad||{};
ad=(()=>{
	let compojs,phonejs,custjs,prdjs,adjs;
	let init=()=>{
		js = $.js();
		compojs = js+'/compo/compo.js';
		custjs = js+'/cust/cust.js';
		phonejs = js+'/phone/phone.js';
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
			admin();
			buy();
			member();
			call();
		});
	};
	let admin=()=>{
		$('#maincontent').html(compo.login_in());
		$('.row').empty();
		$('#loginbtn').html('<a href="#"><span id="loging_glyphicon" class="glyphicon glyphicon-off"></span> LogOut</a>')
		.click(()=>{
			$('#loginbtn').html('<a href="#"><span id="loging_glyphicon" class="glyphicon glyphicon-log-in"></span> Login</a>');
			$('#navl').empty();
		});
		$('#navl').empty();
		let ar=[{
			txt : '구매관리', name: 'buy'
		},{
			txt : '회원관리', name: 'member'
		},{
			txt : '핸드폰등록', name: 'call'
		}];
		$.each(ar,(i,j)=>{
			$('<li ><a href="#">'+j.txt+'</a></li>')
			.attr('name',j.name)
			.attr('id',j.name)
			.appendTo('#navl')
			.click(function(){
				let that = $(this).attr('name');
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				switch(that){
				case 'buy' :
					buy();
					break;
				case 'member' :
					member();
					break;
				case 'call' :
					call();
					break;
				}
			});
		});
	};
	let buy =()=>{
		alert('관리자 구매관리 접근');
	};
	let member =()=>{
		alert('관리자 회권관리 접근');
	};
	let call =()=>{
		$('container').empty();
		alert('관리자 핸드폰등록 접근');
	};
	return {init:init,admin:admin,buy:buy,member:member,call:call};
})();
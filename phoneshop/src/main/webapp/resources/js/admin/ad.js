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
		filejs = js+'/cmm/fileupload.js';
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
			$('#shop-container').empty();
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
		$('#loginbtn').click(e=>{
			$('shop-container').empty();
			alert('핸드폰 등록에서 로그아웃');
		});
		$('#shop-container').empty();
		$('<h2 class="h">핸드폰  등록</h2>')
		.css('margin','0 auto')	
		.appendTo('#shop-container')
			
		
		;
		$('<div class="col-sm-3">'
				+'<h3 style="color:blue;"><u>핸드폰 사진 등록</u></h3>'
				+'<img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">'
				+'<button id="regist">등록</button>'
				+'</div>').appendTo('.row');
		$('#regist').click(function(){/*
			let ok = (this.files[0].name.match(/jpg|gif|png|jpeg/i)) ?true : false;
			if(ok){
				let re = new FormDate();
				re.append('file',this.files[0]);
				$ajax({
					url : $.ctx()+'/phones',
					type : 'post',
					data : re,
					async : false,
					cache : false,
					contentType : false,
					processData : false,
					success : d=>{
						alert('파일업로드 성공');
					},
					error : e=>{
						alert('파일업로드 실패');
					}
				});
			}else{
				alert('gif,png,png,jpeg 파일만 등록할수 있습니다.');
			}
		*/});
		$('<div><h2>핸드폰 명:</h2><input text="hidden"></input></div>')
		.css('width','68%')
		.css('border','3px solid #444444')
		.css('height','150px')
		.css('float','left')
		.css('margin-top','30px')
		.appendTo('.row');
		$('<div">색상</div>')
		.css('width','350px')
		.css('height','65px')
		.css('margin-top','15px')
		.css('border','1px solid #444444')
		.css('float','left')
		.css('padding-top','10px')
		.css('font-size','40px')
		.appendTo('.row');
		$('<select name="colors">'
				+'<option value="">-- 선택 색상--</option>'
				+'<option value="black">미드나이트 블랙</option>'
				+'<option value="gray">오키드 그레이</option>'
				+'<option value="blue">코랄 블루</option>'
				+'<option value="silver">아크릴 실버</option>'
				+'<option value="gold">메이플 골드</option></select>')
		.css('margin-top','15px')
		.css('width','800px')
		.css('height','65px')
		.css('float','left')
		.css('margin-left','192px')
		.css('font-size','20px')
		.appendTo('.row');
	};
	return {init:init,admin:admin,buy:buy,member:member,call:call};
})();
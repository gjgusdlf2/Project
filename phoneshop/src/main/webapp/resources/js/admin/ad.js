"user strict ";
var ad =ad||{};
ad=(()=>{
	let compojs,phonejs,custjs,prdjs,adjs,filejs;
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
				$.getScript(adjs),
				$.getScript(filejs)
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
		$('#shop-container').empty();
		$('<h2 class="h">회원관리</h2>')
		.css('margin','0 auto')
		.appendTo('#shop-container');
		$.getJSON($.ctx()+'/customer/page/'+x,d=>{
			$('<div id="member_tab"><table id="tab" class="tables"><tr><th><u>계정</u></th>'
					+'<th><u>이름</u></th>'
					+'<th><u>핸드폰번호</u></th>'
					+'<th><u>탈퇴</u></th></tr></table>').appendTo('.row');
			$.each(d,(i,j)=>{
				$('<tr>'+j.customerID+'</tr>'
						+'<tr>'+j.customerName+'</tr>'
						+'<tr>'+j.phone+'</tr>').appendTO('#tab');
			});
		})
	};
	let call =()=>{
/*		$('#loginbtn').click(e=>{
			$('shop-container').empty();
			alert('핸드폰 등록에서 로그아웃');
		});*/
		$('#member').click(()=>{
			$('#maincontent').empty();
			coll();
		});
		$('#shop-container').empty();
		$('<h2 class="h">핸드폰  등록</h2>')
		.css('margin','0 auto')	
		.appendTo('#shop-container')
			
		
		;
		$('<div id="img_upload_div" class="col-sm-3">'
				+'<h3 style="color:blue;"><u>핸드폰 사진 등록</u></h3>'
				+'<form id="img_upload_fm" encType="multipart/form-data">'
				+'<img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">'
				+'<input type="file"  id="imageName" name="imageName" class="img-responsive" style="width:100%"  placeholder="" required="">'
				+'<input type="submit"  id="img_upload_btn">'
				+'</form>'
				+'</div>')
				.appendTo('.row');
		$('#img_upload_btn').click(e=>{
			e.preventDefault();
			$('#img_upload_fm').ajaxForm({
				url : $.ctx()+'/imageName',
				dataType : 'json',
				enctype : 'multipart/form-data',
				type : 'POST',
				beforeSubmit : function(){
					if($('#imageName').val() === ""){
						alert('첨부파일 선택 필수');
						return false;
					}else{
						let ext = $('#imageName').val().split(".").pop().toLowerCase();
						if($.inArray(ext, ['jpg','png','jpeg','gif']) == -1){
							alert('jpg,png,jpeg,gif 파일만 업로드 가능함');
							return false;
						}
					}
				},
				success : function(d){
					alet(d.result);
				}
			}).submit();
		});
		$('<div><h2>핸드폰 명:</h2><input text="hidden" id="phone_name" style="font-size:30px; border:1px solid; width:700px; text-align:center;"></input></div>')
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
		.css('padding-top','5px')
		.css('font-size','40px')
		.appendTo('.row');
		$('<select name="colors" id="color">'
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
		$('<div>가격</div>')
		.css('width','150px')
		.css('height','60px')
		.css('margin-top','30px')
		.css('border','3px solid')
		.css('float','left')
		.css('margin-left','100px')
		.css('font-size','30px')
		.css('padding','5px')
		.appendTo('.row');
		$('<input text="hidden" id="price">원</input>')
		.css('border','1px solid #444444')
		.css('width','400px')
		.css('margin-top','20px')
		.css('margin-left','100px')
		.css('font-size','30px')
		.css('text-align','right')
		.appendTo('.row');
		$('<div id="ex"><h3 style="font-size:35px;">상세 정보 등록</h3></div>')
		.css('border-bottom','2px solid #333')
		.appendTo('#maincontent');
		$('<div id="ex_tables"></div>').appendTo('#maincontent');
		$('<div class="detail_cont"></div>')
		.appendTo('#ex_tables');
		$('<div id="ex_tab"></div>').appendTo('.detail_cont');
		$('<table class="spec_tbl"></table>').appendTo('#ex_tab');
		$('<caption class="cp_hide"></caption>').appendTo('table');
		$('<tbody></tbody>').appendTo('table');
		$('<tr><th scope="row" class="tit">제조회사</th>'
				+'<td class="dsc"><input id="td_tx1" text="hidden"></input></td>'
				+'<th scope="row">등록년월</th>'
				+'<td class="dsc"><input id="td_tx2" text="hidden"></input></td></tr>'
				+'<tr><th scope="row"><a>운영체제</a></th>'
				+'<td class="dsc"><input id="td_tx3" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>판매방식</a></th>'
				+'<td scope="row" class="tit"><input id="td_tx4" text="hidden"></input></td><\tr>'
				+'<tr><th scope="row" colspan="4">디스플레이</th></tr>'
				+'<tr><th scope="row" class="tit"><a>디자인</a></th>'
				+'<td class="dsc"><input id="td_tx5" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>화면크기(인치)</a></th>'
				+'<td class="dsc"><input id="td_tx6" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>패널종류</a></th>'
				+'<td class="dsc"><input id="td_tx7" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>화면해상도</a></th>'
				+'<td class="dsc"><input id="td_tx8" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>ppi</a></th>'
				+'<td class="dsc"><input id="td_tx9" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>화면비</a></th>'
				+'<td class="dsc"><input id="td_tx10" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>화면면적</a></th>'
				+'<td class="dsc"><input id="td_tx11" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>HDR규격</a></th>'
				+'<td class="dsc"><input id="td_tx12" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" colspan="4">시스템</th></tr>'
				+'<tr><th scope="row" class="tit"><a>AP종류</a></th>'
				+'<td class="dsc"><input id="td_tx13" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>코어갯수</a></th>'
				+'<td class="dsc"><input id="td_tx14" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>코어클럭</a></th>'
				+'<td class="dsc"><input id="td_tx15" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>그래픽코어</a></th>'
				+'<td class="dsc"><input id="td_tx16" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>시스템램</a></th>'
				+'<td class="dsc"><input id="td_tx17" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>내장메모리</a></th>'
				+'<td class="dsc"><input id="td_tx18" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>저장장치</a></th>'
				+'<td calss="dsc"><input id="td_tx19" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>외장메모리</a></th>'
				+'<td class="dsc"><input id="td_tx20" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" colspan="4">네트워크/규격</th></tr>'
				+'<tr><th scope="row" class="tit"><a>LTE통신규격</a></th>'
				+'<td class="dsc"><input id="td_tx21" text="hidden"></input></td>'
				+'<th scope="row" class="dsc"><a>WiFi주파수</a></th>'
				+'<td class="dsc"><input id="td_tx22" text="hidden"></input></td>'
				+'<tr><th scope="row" class="tit"><a>WiFi다이렉트</a></th>'
				+'<td class="dsc"><input id="td_tx23" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>블루투스</a></th>'
				+'<td class="dsc"><input id="td_tx24" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>유심타입</a></th>'
				+'<td class="dsc"><input id="td_tx25" text="hidden"></input></td>'
				+'<th scope="row"><a>듀얼유심</a></th>'
				+'<td class="dsc"><input id="td_tx26" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" colspan="4">카메라</th></tr>'
				+'<tr><th scope="row" class="tit"><a>카메라 타입</a></th>'
				+'<td class="dsc"><input id="td_tx27" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>후면카메라</a></th>'
				+'<td class="dsc"><input id="td_tx28" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>전면카메라</a></th>'
				+'<td class="dsc"><input id="td_tx29" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>동영상촬영</a></th>'
				+'<td class="dsc"><input id="td_tx30" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>조리개값</a></th>'
				+'<td class="dsc"><input id="td_tx31" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>손떨림보정</a></th>'
				+'<td class="dsc"><input id="td_tx32" text="hidden"></input></th></tr>'
				+'<tr><th scope="row" class="tit"><a>HDR지원</a></th>'
				+'<td class="dsc"><input id="td_tx33" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>카메라플레시</a></th>'
				+'<td class="dsc"><input id="td_tx34" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" colspan="4">사운드</th></tr>'
				+'<tr><th scope="row" class="tit"><a>이어폰단자</a></th>'
				+'<td class="dsc"><input id="td_tx35" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>스피커</a></th>'
				+'<td class="row"><input id="td_tx36" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>고음질재생</a></th>'
				+'<td class="dsc"><input id="td_tx37" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>사운드 기술</a></th>'
				+'<td class="dsc"><input id="td_tx38" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" colspan="4">보안기능</th></tr>'
				+'<tr><th scope="row" class="tit"><a>지문인식</a>'
				+'<td class="dsc"><input id="td_tx39" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>홍채인식</a></th>'
				+'<td class="dsc"><input id="td_tx40" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>얼굴인식</a></th>'
				+'<td class="dsc"><input id="td_tx41" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>음성잠금해제</a></th>'
				+'<td class="dsc"><input id="td_tx42" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" colspan="4">주요기능</th>'
				+'<tr><th scope="row" class="tit"><a>AI/인공지능</a></th>'
				+'<td class="dsc"><input id="td_tx43" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>NFC</a></th>'
				+'<td class="dsc"><input id="td_tx44" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>전자결제</a></th>'
				+'<td class="dsc"><input id="td_tx45" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>지상파DMB</a></th>'
				+'<td class="dsc"><input id="td_tx46" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>홈버튼</a></th>'
				+'<td class="dsc"><input id="td_tx47" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>터치펜</a></th>'
				+'<td class="dsc"><input id="td_tx48" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>방수/방진</a></th>'
				+'<td class="dsc"><input id="td_tx49" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a></a></th>'
				+'<td class="dsc"><input id="td_tx50" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" colspan="4">배터리</th></tr>'
				+'<tr><th scope="row" class="tit"><a>배터리용량</a></th>'
				+'<td class="dsc"><input id="td_tx51" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>배터리장착방식</a></th>'
				+'<th class="dsc"><input id="td_tx52" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>고속충전</a></th>'
				+'<td class="dsc"><input id="td_tx53" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>충전단자</a></th>'
				+'<td class="dsc"><input id="td_tx54" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>무선충전</a></th>'
				+'<td class="dsc"><input id="td_tx55" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a></a></th>'
				+'<td class="dsc"><input id="td_tx56" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" colspan="4">크기/무게</th></tr>'
				+'<tr><th scope="row" class="tit"><a>세로</a></th>'
				+'<td class="dsc"><input id="td_tx56" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>가로</a></th>'
				+'<td class="dsc"><input id="td_tx57" text="hidden"></input></td></tr>'
				+'<tr><th scope="row" class="tit"><a>두께</a></th>'
				+'<td class="dsc"><input id="td_tx58" text="hidden"></input></td>'
				+'<th scope="row" class="tit"><a>무게</a></th>'
				+'<td class="dsc"><input id="td_tx59" text="hidden"></input></td></tr></tbody></table>').appendTo('tbody');
		$('<div id="descript" class="col-sm-3">'
				+'<form id="img_descript_fm" encType="multipart/form-data">'
				+'<input type="file" id="descriptName" name="descriptName" class="form-control" placeholder="" required="">'
				+'<input type="submit" id="descript_upload_btn">'
				+'</form>').appendTo('#ex_tab');
		$('#descript_upload_btn').click(e=>{
			e.preventDefault();
			$('#img_descript_fm').ajaxForm({
				url : $.ctx()+'/descriptName',
				dataType : 'json',
				enctype : 'multipart/form-data',
				type : 'POST',
				beforeSubmit : function(){
					if($('#descriptName').val() === ""){
						alert("첨부파일 선택 필수");
						return false;
					}else{
						let ext = $("#descriptName").val().split(".").pop().toLowerCase();
						if($.inArray(ext, ['jpg','png','jpeg','gif']) ==- 1){
							alert('jpg,png,jpeg,gif 파일만 업로드 가능함');
							return false;
						}
					}
				},
				success : function(d){
					alert(d.result);
				}
			}).submit();
		});
		$('<div id="last_btn"><a class="ok_btn">핸드폰 등록하기</a>')
		.appendTo('.detail_cont');
		$('#last_btn').click(e=>{
			alert('버튼클릭');
			/*auth();*/
		});
	};
	return {init:init,admin:admin,buy:buy,member:member,call:call};
})();
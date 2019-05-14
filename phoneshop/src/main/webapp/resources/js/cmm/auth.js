"use strict";
var auth=auth||{};
auth=(()=>{
	let compojs,js,custjs,phonejs,prdjs,adjs,filejs;
	let init=()=>{
		js = $.js();
		phonejs = js+'/phone/phone.js';
		compojs = js+'/compo/compo.js';
		custjs = js+'/cust/cust.js';
		prdjs = js+'/prd/prd.js';
		adjs = js+'/admin/ad.js';
		filejs = js+'/cmm/fileupload.js';
		onCreate();
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
			$.getScript(compojs,()=>{
				$('#loginbtn').click(e=>{
					cust.login();
					$('#navl')
				});
			})
			$('.navbar-header').html(' <a class="navbar-brand" href="#">Home</a>')
			.click(e=>{
				$('#maincontent').appendTo(compo.login_in());
				$('#loginbtn').html('<a href="#"><span id="loging_glyphicon" class="glyphicon glyphicon-off"></span> LogOut</a>')
				.click(()=>{
					$('#loginbtn').html('<a href="#"><span id="loging_glyphicon" class="glyphicon glyphicon-log-in"></span> Login</a>');
				});
			});
			$('#navl').empty();
			$('.row').empty();
			let arr=[{
				txt : '삼성 갤럭시 S8', name : 's8'
			},{
				txt : '삼성 갤럭시 노트8', name : 'note8'
			},{
				txt : '삼성 갤럭시 S9', name : 's9'
			},{
				txt : '삼성 갤럭시 노트9', name : 'note9'
			},{
				txt : '애플 아이폰 XR' , name : 'xr'
			},{
				txt : '애플 아이폰XS Max', name : 'max'
			}];
			$.each(arr,(i,j)=>{
				$('<div class="col-sm-3">'+
						'<img src="resources/img/'+j.name+'.jpg" class="img-responsiv" style="width:100%" alt="Image">'
							+'<h3>'+j.txt+'</h3></div>')
				.attr('name',j.name)
				.attr('id', j.name)
				.appendTo('.row')
				.attr('style','cursor:pointer')
				.click(function(){
					let that = $(this).attr('name');
/*					$(this).addClass('active');
					$(this).siblings().removeClass('active');*/
					switch(that){
					case 's8' :
						phone.galaxys8();
						break;
					case 'note8' :
						phone.galaxynote8();
						break;
					case 's9' :
						phone.galaxys9();
						break;
					case 'note9' :
						phone.galaxynote9();
						break;
					case 'xr' :
						phone.iphonexr();
						break;
					case 'max' :
						phone.iphonexsmax();
						break;
					}
				});
			});
		})
	};
	return {init:init};
})();
"use strict";
var auth=auth||{};
auth=(()=>{
	let compojs,js,custjs,phonejs;
	let init=()=>{
		js = $.js();
		phonejs = js+'/phone/phone.js';
		compojs = js+'/compo/compo.js';
		custjs = js+'/cust/cust.js';
		onCreate();
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
			$.getScript(compojs,()=>{
				$('#loginbtn').click(e=>{
					cust.login();
					alert('cust 넘어가기>>>>>>>>>>>>>>>>>>>>>>');
				});
			})
			$('.navbar-header').html(' <a class="navbar-brand" href="#">Home</a>')
			.click(e=>{
				alert('홈으로가기!');
				$(compo.login_in());
			});
			$('#myNavbar'+' #navl').empty();
			$('#maincontent').empty();
			let arr=[{
				txt : '갤럭시 S8 S8+', name : 's8'
			},{
				txt : '갤럭시 노트8', name : 'note8'
			},{
				txt : '갤럭시 S9 S9+', name : 's9'
			},{
				txt : '갤럭시 노트9', name : 'note9'
			}];
			$.each(arr,(i,j)=>{
				$('<div class="col-sm-3">'+
						'<img src="resources/img/'+j.name+'.jpg" class="img-responsive" style="width:100%" alt="Image">'
							+'<p>'+j.txt+'</p></div>')
				.attr('name',j.name)
				.attr('id', j.name)
				.appendTo('#maincontent')
				.attr('style','cursor:pointer')
				.click(function(){
					let that = $(this).attr('name');
					$(this).addClass('active');
					$(this).siblings().removeClass('active');
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
					}
				});
			});
		})
	};
	return {init:init};
})();
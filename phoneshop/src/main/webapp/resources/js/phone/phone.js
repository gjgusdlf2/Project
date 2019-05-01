"use strict";
var phone = phone||{};
phone =(()=>{
	let compojs,custjs,phonejs,prdjs,adjs;
	let init=()=>{
		onCreate();
		js=$.js();
		compojs= js+'/compo/compo.js';
		custjs= js+'/cust/cust.js';
		phonejs= js+'/phone/phone.js';
		prdjs= js+'/prd/prd.js';
		adjs= js+'/admin/ad.js';
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
			galaxys8();
			galaxynote8();
			galaxys9();
			galaxynote9();
			iphonexr();
		});
	};
		let galaxys8=()=>{
			$('#maincontent').empty();
			$('.container').html('<h2>갤럭시 s8 s8+</h2>'
					+'<div class="clearfix">'
					+'<div class="box1">'
					+'<img src="resources/img/s8.jpg" style="width:100%;"></div>'
					+'<div class="box2" style="margin-left:50px; float:left; width:50%; height=:300px;"><h2>s8</h2></div><h2>s8+<h/2></div>');
			$.getJSON($.ctx()+'/products/price',d=>{
				$.each(d.list,(i,j)=>{
					$('<a>'+j.price+'원'+'</a><br>')
					.attr('style','cursor:pointer')
					.appendTo('.box2').click(function(){
						let that =$(this).attr('price');
						$(this).addClass('active');
						$(this).siblings().removeClass('cative');
						switch(that){
/*						case 'price':
							alert('들어옴?');
							break;*/
						}
					});
				});
			});
			
		};
		let galaxynote8=()=>{
			$('#maincontent').empty();
			$('.container').html('<h2>갤럭시 노트8</h2>'
					+'<div class="clearfix">'
					+'<div class="box1">'
					+'<img src="resources/img/note8.jpg" style="width:100%;"></div>'
					+'<div class="box2" style="margin-left:50px; float:left; width:50%; height=:300px;"></div></div>');
		};
		let galaxys9=()=>{};
		let galaxynote9=()=>{};
		let iphonexr=()=>{};
		let iphonexsmax=()=>{};
	return {init:init,galaxys8:galaxys8,galaxynote8:galaxynote8,galaxys9:galaxys9,
		galaxynote9:galaxynote9,iphonexr:iphonexr,
		iphonexsmax:iphonexsmax};
})();
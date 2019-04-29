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
		});
	};
		let galaxys8=()=>{
			$('#maincontent').empty();

			$('.container').html('<h2>갤럭시 s8 s8+</h2>'
					+'<div class="clearfix">'
					+'<div class="box1">'
					+'<img src="resources/img/s8.jpg">'
					+'<div class="box"></div></div></div>');
			$.getJSON($.ctx()+'/products/price',d=>{
				$.each(d.list,(i,j)=>{
					$('<h2>'+j.price+'</h2>').appendTo('.box1');
				});
			});
			
		};
		let galaxynote8=()=>{
			
		};
		let galaxys9=()=>{};
		let galaxynote9=()=>{};
	return {init:init,galaxys8:galaxys8};
})();
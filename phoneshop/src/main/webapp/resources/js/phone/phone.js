"use strict";
var phone = phone||{};
phone =(()=>{
	let compojs,custjs,phonejs;
	let init=()=>{
		onCreate();
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
			galaxys8();
			galaxynote8();
			galaxys9();
			galaxynote9();
		});
	};
		let galaxys8=()=>{
			$('.container').html('<div class="col-sm-3">'
								+'<img src="resources/img/s8.jpg" class="img-responsive" style="width:300%" alt="Image">'
								+'</div>');
			$('#maincontent').remove();
			
		};
		let galaxynote8=()=>{};
		let galaxys9=()=>{};
		let galaxynote9=()=>{};
	return {init:init,galaxys8:galaxys8};
})();
"use strict";
var prd = prd||{};
prd =(()=>{
	let compojs,custjs,phonejs,prdjs,adjs;
	let init=()=>{
		js=$.js();
		compojs= js+'/compo/compo.js';
		custjs= js+'/cust/cust.js';
		phonejs= js+'/phone/phone.js';
		prdjs= js+'/prd/prd.js';
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
				$.getScript(prdjs)
		).done(()=>{
			pur();
		});
	};
	let pur =()=>{
		alert('구매내역 진입');
	};
	return {init:init,pur:pur};
})();
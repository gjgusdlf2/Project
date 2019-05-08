"use strict";
var prd = prd||{};
prd =(()=>{
	let compojs,custjs,phonejs,prdjs,adjs,filejs;
	let init=()=>{
		js=$.js();
		compojs= js+'/compo/compo.js';
		custjs= js+'/cust/cust.js';
		phonejs= js+'/phone/phone.js';
		prdjs= js+'/prd/prd.js';
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
			pur();
		});
	};
	let pur =()=>{
		alert('구매내역 진입');
	};
	return {init:init,pur:pur};
})();
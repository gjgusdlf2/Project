"use strict";
var auth=auth||{};
auth=(()=>{
	let compojs,js,custjs;
	let init=()=>{
		js = $.js();
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
			$.getScript(custjs)
		).done(()=>{
			$.getScript(compojs,()=>{
				$('#loginbtn').click(e=>{
					cust.login();
					alert('cust 넘어가기>>>>>>>>>>>>>>>>>>>>>>');
				});
			})
			$('.navbar-header').html(' <a class="navbar-brand" href="#">Home</a>')
			.click(e=>{
				
			});
			$('#myNavbar'+' #navl').remove();
		})
	};
	return {init:init};
})();
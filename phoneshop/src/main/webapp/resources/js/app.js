"use strict";
var app=app||{};
app=(()=>{
	let init=x=>{
		app.$.init(x);
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.when(
				$.getScript($.js()+'/cmm/auth.js'),
				$.getScript($.js()+'/cust/cust.js'),
				$.getScript($.js()+'/compo/compo.js'),
				$.getScript($.js()+'/phone/phone.js')
		).done(()=>{
			auth.init();
		})
	};
	return {init:init,onCreate:onCreate};
})();

app.$={
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				app.onCreate();
			});
		}
};
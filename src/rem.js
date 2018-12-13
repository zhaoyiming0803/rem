
/**
 * 移动端rem适配方案
 * @author: zhaoyiming
 * @since: 2018/09/01
 * License: MIT, https://github.com/zymfe/rem
 */
;(function (window) {
	var dpr = window.devicePixelRatio || 1,
		width = 750,
		docEle = window.document.documentElement;
	
	var resizeCall = (function () {
		var clientWidth = docEle.clientWidth;
		docEle.style.fontSize = 100 * (clientWidth / parseInt(width)) + 'px';
		return arguments.callee;
	})();

	dpr = dpr >= 3 ? 3 : dpr >= 2 ? 2 : 1;
	docEle.setAttribute('data-dpr', dpr);

	window.addEventListener('resize', resizeCall, false);
 })(this);

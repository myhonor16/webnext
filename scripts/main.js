// Immediately-invoked function expression
// https://github.com/myhonor16/webnext/wiki/IIFE
// Best used with a minifier

(function(window, document){
	// Run on Execution
	console.log('WebNext: IIFE Wrapper Started');

	// Run on window.onload
	window.onload = function () {
		console.log('WebNext: Page Loaded');
	};

	// Your code here
	var foo = 'bar';
	window.foo = foo;

})(window, document);

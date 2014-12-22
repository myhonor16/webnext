// Self-executing function (http://markdalgleish.com/2011/03/self-executing-anonymous-functions/)
(function(window){
	// Run on Execution
	console.log('WebNext: Self-Executing Function Started');

	// Run on window.onload
	window.onload = function () {
		console.log('WebNext: Page Loaded');
	}

	// Your code here
	var foo = 'bar';
	window.foo = foo;

})(window);

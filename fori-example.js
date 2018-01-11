// syntax: iter(init, beforeN, func, step=1)
// syntax: for$(array, func, step=1, start=0)

// array version
for$([1, 2, 3], function(o){
	console.log(o.i, o.v);
	if (o.e)
		console.log("loop ended 2");
	else o.go();
});

// string version
for$("abc", function(o){
	console.log(o.i, o.v);
	if (o.e)
		console.log("loop ended 2");
	else o.go();
});

// fast for numbers, out: 0,1,2,3
iter(0, 4, function(o){
	console.log(o.v);
	if (o.e)
		console.log("loop ended 1");
	else o.go();
});

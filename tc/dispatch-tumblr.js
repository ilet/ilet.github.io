~function(){
	var _ = document, T = _.title, I = $("link[rel*=icon][href]"), D = $("<i>");
	if (I.length) I = I[0].outerHTML;
	if ($("[data-dhnd]").length)
	{
		var d = $("[data-dhnd]");
		$(D).append("<head>"+d.attr("data-head")+"</head>");
		$(D).append("<body>"+d.attr("data-body")+"</body>");
		console.log(0, d.attr("data-head"));
		console.log(1, d.attr("data-body"));
		console.log(2, D);
	}
	_.body.parentNode.innerHTML = "<html>"+D.html()+"</html>";
	_.title = T;
}();

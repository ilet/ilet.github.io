~function(){
	var d, _ = document, T = _.title, I = $("link[rel*=icon][href]"), D = $("<i>");
	if (I.length) I = I[0].outerHTML;
	if ((d = $("[data-dhnd]")).length)
		$(D).append(
			"<head>"+d.attr("data-head")+"</head>"+
			"<body>"+d.attr("data-body")+"</body>"
		);
	_.body.parentNode.innerHTML = "<html>"+D.html()+"</html>";
	_.title = T;
}();

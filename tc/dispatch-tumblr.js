~function(){
	var _ = document, T = _.title, I = $("link[rel*=icon][href]"), D = $("<i><head></head><body></body></i>");
	if (I.length) I = I[0].outerHTML;
	if ($("[data-dhnd]").length)
	{
		var d = $("[data-dhnd]");
		$("head", D).append($("data-head", d));
		$("body", D).append($("data-body", d));
	}
	_.body.parentNode.innerHTML = "<html>"+D.html()+"</html>";
	_.title = T;
}();

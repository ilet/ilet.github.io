~function(){
	var _ = document, T = _.title, I = $("link[rel*=icon][href]"), D = $("<i><head></head><body></body></i>");
	if (I.length) I = I[0].outerHTML;
	if ($("[data-dhnd]").length)
	{
		var d = $("[data-dhnd]");
		$("head", D).append(d.attr("data-head"));
		$("body", D).append(d.attr("data-body"));
	}
	_.body.parentNode.innerHTML = "<html>"+D.html()+"</html>";
	_.title = T;
}();

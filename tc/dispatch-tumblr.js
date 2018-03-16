~function(){
  var ctitle = document.title;
  var t,ico = $("link[rel*=icon][href]"), h = "", b = "";
  if (ico.length) ico = ico[0].outerHTML;
  if ($("[data-dhnd]").length)
  {
    h+=(t=$("[data-dhnd][data-head]")).length?t.attr("data-head"):"";
    b+=(t=$("[data-dhnd][data-body]")).length?t.attr("data-body"):"";
  }
  document.body.parentNode.innerHTML="<html><head>"+h+ico+"</head><body>"+b+"</body></html>";
  document.title = ctitle;
}();

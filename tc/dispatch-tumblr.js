~function(){
  var ctitle = document.title;
  var ico = $("link[rel*=icon][href]"), h = "<b>Please be patient, it may take upto several centuries.</b>";
  if (ico.length) ico = ico[0].outerHTML;
  if ($("[data-dhnd]").length)
    h+=$("[data-dhnd][data-mobile=yes]").length?'<meta name="viewport" content="width=device-width">',"";
  document.body.parentNode.innerHTML="<html><head>"+h+ico+"</head><body></body></html>";
  document.title = ctitle;
}();

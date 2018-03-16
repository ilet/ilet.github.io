~function(){
  var ctitle = document.title;
  document.body.parentNode.innerHTML="<html><head></head><body></body></html>";
  document.title = ctitle;
}();

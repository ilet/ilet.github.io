function json_decode(str){
  if (type.tm("s", str))
    return new Function("return" + str)(); // bcaus eval is for babies
}

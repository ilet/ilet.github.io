// html: <script src="https://ilet.github.io/m/typ.js"></script>
// tm:   @require     https://ilet.github.io/m/typ.js

// Examples:
function json_decode(str){
  if (type.tm("s", str))
    return new Function("return" + str)(); // bcaus eval is for babies
  else throw new TypeError(str+" isn't a String dude");
}

function int_pow(x, y){
  var r=x;
  if (type.tm("n n", x, y))
    for (;y-->0;)
      r*=x;
  else throw new TypeError(x+ " or " + y+" isn't a number, dude");
  return r;
}
int_pow(2, 3); // 16
int_pow(2, 3); // some error

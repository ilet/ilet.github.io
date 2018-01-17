// html: <script src="https://ilet.github.io/m/typ.js"></script>
// tm:   @require     https://ilet.github.io/m/typ.js
// hyp.js filesize: 382 bytes, can be useful for strict data type checking
// anti-bug purposes only

// Examples:
function json_decode(str){
  if (type.tm("s", str))
    return new Function("return" + str)(); // bcaus eval is for babies
  else throw new TypeError(str+" isn't a String dude");
}

function int_pow(x, y){
  var r=x;
  if (type.tm("n n", x, y))
    for (;parseInt(y--)>0;)
      r*=x;
  else throw new TypeError(x+ " or " + y+" isn't a number, dude");
  return r;
}
int_pow(2, 3); // 16
int_pow(2, true); // some error

// CAN IT MATCH MULTIPLE VALUE TYPES?? - yush:

console.log(type.tm("n s b", 1, "1", true));

// CAN IT MATCH MULTIPLE TYPES?? - yush:

// All true:
console.log(type.tm("sbn", 1));
console.log(type.tm("sbn", true));
console.log(type.tm("sbn", "1"));

// CAN IT MATCH MULTIPLE TYPES OF MULTIPLE VALUES?? - yush:

console.log(type.tm("sbn sbn sbn", 1, "1", true));

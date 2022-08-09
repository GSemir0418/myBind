var slice = Array.prototype.slice;
function myBind(newThis) {
  var args = slice.call(arguments, 1);
  var fn = this;
  if (typeof fn !== "function") throw new Error("bind必须调用在函数上");
  return function (...args2) {
    var args2 = slice.call(arguments, 0);
    return fn.apply(newThis, args.concat(args2));
  };
}
module.exports = myBind;

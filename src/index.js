function myBind(newThis) {
  var args = Array.from(arguments).slice(1);
  var fn = this;
  if (typeof fn !== "function") throw new Error("bind必须调用在函数上");
  return function (...args2) {
    var args2 = Array.from(arguments);
    return fn.apply(newThis, args.concat(args2));
  };
}
module.exports = myBind;

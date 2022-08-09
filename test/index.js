const myBind = require("../src/index");
Function.prototype.myBind = myBind;
const newThis = { name: "gsq" };
console.log("=====支持this绑定=====");
const fn = function () {
  return this;
};
const newFn = fn.myBind(newThis);
console.log(newFn().name === "gsq");

console.log("=====支持多次传递参数=====");
const fn2 = function (p1, p2) {
  return [this, p1, p2];
};
const newFn2 = fn2.myBind(newThis, 123);
console.log(newFn2(456)[0].name === "gsq");
console.log(newFn2(456)[1] === 123);
console.log(newFn2(456)[2] === 456);

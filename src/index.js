function myBind(newThis, ...args1) {
  const fn = this;
  return function (...args2) {
    return fn.call(newThis, ...args1, ...args2);
  };
}
module.exports = myBind;

/*
Alter the myBind function written in the previous exercise to support partial function application.
*/

function sum(y, z, a) { 
  return this.x + y + z + a;
}

function myBind(func, ctx, ...partialArg) {
  return function(...args) {
    const fullArgs = partialArg.concat(args);
    return func.apply(ctx, fullArgs);
  };
}

let add1 = myBind(sum, {x: 1}, 2);
console.log(add1(4, 5));


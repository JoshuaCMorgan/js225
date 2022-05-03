/*
Create a function myBind, that accepts two arguments: 
1) The function to bind, 
2) The context object, 
and returns a new function that's hard-bound 
to the passed in context object.
*/
function sum(y, z) { 
  return this.x + y + z;
}

function myBind(func, ctx) {
  return function(...args) {
    return func.apply(ctx, args);
  };
}

let add1 = myBind(sum, {x: 1});
console.log(add1(4, 5));

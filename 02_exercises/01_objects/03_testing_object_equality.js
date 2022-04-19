/*
Write a function objectsEqual that accepts two object arguments and returns 
true or false depending on whether the objects have the same key/value pairs.
*/
function objectsEqual(objA, objB) {
  if (isPrimitive(objA) || isPrimitive(objB)) {
    return objA === objB;
  }

  let allFirstMatch = Object.keys(objA).every(key => {
    return objB.hasOwnProperty(key) && objectsEqual(objA[key], objB[key]);
  });

  let allSecondMatch = Object.keys(objB).every(key => {
    return objA.hasOwnProperty(key) && objectsEqual(objB[key], objA[key]);
  });

  return allFirstMatch && allSecondMatch;

  function isPrimitive(value) {
    return (typeof value !== 'object' || value === null);
  }
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
 console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
 console.log(objectsEqual({}, {}));                                      // true
 console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
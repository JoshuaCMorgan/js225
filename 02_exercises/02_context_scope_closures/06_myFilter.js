/*
In this exercise we'll update the implementation of myFilter by adding the functionality 
of accepting an optional thisArg just like the original Array.prototype.filter.
Modify the original implementation such that the expected result is returned. 
Don't use the thisArg argument of Array.prototype.forEach.
*/

function myFilter(array, func, thisArg) {
  const result = [];

  array.forEach(value => {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });
  console.log(result)
  return result;
}

const thisFilter = {
  valuesAllowed: [3, 4, 5, 6, 7],
}

function trimArray(value) {
  return this.valuesAllowed.includes(value);
}

myFilter([1, 2, 3, 4], trimArray, thisFilter);
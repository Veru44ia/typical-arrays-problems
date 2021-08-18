
exports.min = function min (array) {

  if (Array.isArray(array) && array.length > 0) {
    return (array.sort(( a, b ) => a - b)).splice(0, 1);
  } else {
    return 0;
  }
}

exports.max = function max (array) {

  if (Array.isArray(array) && array.length > 0) {
    return array.sort(( a, b ) => b-a).splice(0, 1); 
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
   
  if (Array.isArray(array) && array.length > 0) { 
      result = 0;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
     }
     return (result / array.length);
  } else {
    return 0;
  } 
}

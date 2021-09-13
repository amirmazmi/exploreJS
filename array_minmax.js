/*

  Get min max for an array

*/

function arrayMin(arr) {
    var len = arr.length, min = Infinity;
    while (len--) {
        if (Number(arr[len]) < min) {
            min = Number(arr[len]);
        }
    }
      return min;
};

function arrayMax(arr) {
    var len = arr.length, max = -Infinity;
    while (len--) {
        if (Number(arr[len]) > max) {
            max = Number(arr[len]);
        }
    }
      return max;
};


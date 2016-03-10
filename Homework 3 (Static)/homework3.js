var main = function() {
  "use strict";

  //----------- Exercise 1 ------------

  var exercise1 = function(a) {
    var sum = 0;
    a.forEach(function(v) {
      sum = sum + v;
    });
    return sum / a.length;
  };

  //----------- Exercise 2 ------------

  var exercise2 = function(a) {
    var largest = 0;
    a.forEach(function(v) {
      if (v > largest) {
        largest = v;
      }
    });
    return largest;
  };

  //----------- Exercise 3 ------------

  var exercise3 = function(a) {
    var even = false;
    a.forEach(function(v) {
      if (v % 2 === 0) {
        even = true;
      }
    });
    return even;
  };

  //----------- Exercise 4 ------------
  var exercise4 = function(a) {
    var allEven = true;
    a.forEach(function(v) {
      if (v % 2 === 1) {
        allEven = false;
      }
    });
    return allEven;
  };

  //----------- Underscore JS Exercise 2 ------------

  var _exercise02 = function(n) {
    var largest = _.max(n, function(num) {
        return num;
    });
    return largest;
};


  //----------- Underscore JS Exercise 3 ------------

  var _exercise03 = function(a) {
    var isEven = false,
      even = _.some(a, function(num) {
        return num % 2 === 0;
      });
    if (even > 0) {
      isEven = true;
    }
    return isEven;
  };

  //----------- Underscore JS Exercise 4 ------------

  var _exercise04 = function(a) {
    var allEven = _.every(a, function(num) {
      return num % 2 === 0;
    });
    return allEven;
  };

  //----------- Exercise 5 ------------

  var arrayContains = function(strs, str) {
    var hasString = false;
    strs.forEach(function(v) {
      if (v === str) {
        hasString = true;
      }
    });
    return hasString;
  };

  //----------- Exercise 6 Array Contains 2 ------------

  var arrayContains2 = function(strs, str) {
    var hasString = false,
      count = 0;
    strs.forEach(function(v) {
      if (v === str) {
        count++;
      }
    });
    if (count >= 2) {
      hasString = true;
    }
    return hasString;
  };

  //----------- Exercise 6 Array Contains 3 ------------

  var arrayContains3 = function(strs, str) {
    var hasString = false,
      count = 0;
    strs.forEach(function(v) {
      if (v === str) {
        count++;
      }
    });
    if (count >= 3) {
      hasString = true;
    }
    return hasString;
  };

  //----------- Exercise 6 Array Contains N Times ------------

  var arrayContainsN = function(strs, str, times) {
    var hasString = false,
      count = 0;
    strs.forEach(function(v) {
      if (v === str) {
        count++;
      }
    });
    if (count === times) {
      hasString = true;
    }
    return hasString;
  };

  $(".exercise1 div").text(exercise1([12, 24, 47, 79]));
  $(".exercise2 div").text(exercise2([123, 12345, 212, 432, 5671, 904]));
  $(".exercise3 div").text(exercise3([1, 2, 3, 5, 7]));
  $(".exercise4 div").text(exercise4([2, 4, 6, 8]));

  $(".arrayContains div").text(arrayContains(["hello", "world"], "hello"));
  $(".arrayContains2 div").text(arrayContains2(["a", "b", "c", "a", "d", "c"], "c"));
  $(".arrayContains3 div").text(arrayContains3(["a", "b", "c", "a", "d", "a", "c"], "a"));
  $(".arrayContainsN div").text(arrayContainsN(["a", "b", "c", "a", "d", "a", "c"], "d", 4));

  $("._exercise02 div").text(_exercise02([16, 32, 3242,64, 128, 512]));
  $("._exercise03 div").text(_exercise03([400, 219, 786, 821, 173, 673]));
  $("._exercise04 div").text(_exercise04([2, 4, 6, 8, 9]));

};
$(document).ready(main);

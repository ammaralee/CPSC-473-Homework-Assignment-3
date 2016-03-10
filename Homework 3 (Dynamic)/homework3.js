var x = 0;
var array = [];

// Accepting an Array Argument

function add_element_to_array() {
  array[x] = document.getElementById("text1").value;
  alert("Element: " + array[x] + " Added at index " + x);
  x++;
  document.getElementById("text1").value = "";

  // Display
  // function display_array() {
  var e = '';
  var y;
  for (y = 0; y < array.length; y += 1) {
    e += "Number Added: " + array[y] + "<br>";
  }
  document.getElementById("Result").innerHTML = e;

}
//------------------------------******************************------------------------------\\

// Exercise 1 ... Finding the Average

function exercise1() {

  var sum = 0;
  var i;
  for (i = 0; i < array.length; i += 1) {
    sum += parseInt(array[i], 10);
  }
  var avg = "Average = " + sum / array.length;

  document.getElementById("Average").innerHTML = avg;
}
//------------------------------******************************------------------------------\\

// Exercise 2 ... Finding the Largest Number

function exercise2() {


  var largest = "The Largest Number is: " + Math.max.apply(Math, array);

  document.getElementById("Largest").innerHTML = largest;
}
//------------------------------******************************------------------------------\\

// Exercise 3 ... Returning 'true' if it contains "at least one" 'even' number, 'false' otherwise.

function exercise3() {
  var hasEven = false;
  array.forEach(function(array) {
    if (array % 2 === 0) {
      hasEven = true;
    }
  });
  document.getElementById("Even").innerHTML = hasEven;

}
//------------------------------******************************------------------------------\\

// Exercise 4 ... Returning 'true' if "every number" is 'even', 'false' otherwise.

function exercise4() {

  var allEven = true;
  array.forEach(function(array) {
    if (array % 2 === 1) {
      allEven = false;

    }
  });
  document.getElementById("Odd").innerHTML = allEven;

}
//------------------------------******************************------------------------------\\

// Question 2 to 4 Using Underscore.js

var d = 0;
var w = [];

// Accepting an Array Argument

function _add_element_to_array() {
  w[d] = document.getElementById("text2").value;
  alert("Element: " + w[d] + " Added at index " + d);
  d++;
  document.getElementById("text2").value = "";

  // Display
  // function display_array() {
  var e = '';
  var f;
  for (f = 0; f < w.length; f += 1) {
    e += "Number Added: " + w[f] + "<br>";
  }
  document.getElementById("_Result").innerHTML = e;
  // }

}

// Question 2)
function _exercise2() {


  var largest = _.max(w, function(num) {

    return num;

  });
  document.getElementById("_Largest").innerHTML = largest;
}

// Question 3
function _exercise3() {

  var exercise3 = _.some(w, function(nums) {
    return nums % 2 === 0;
  });

  document.getElementById("_Even").innerHTML = exercise3;
}

// Question 4
function _exercise4() {

  var exercise4 = _.every(w, function(nums) {
    return nums % 2 === 0;
  });

  document.getElementById("_Odd").innerHTML = exercise4;
}

//------------------------------******************************------------------------------\\

//              Array Conatins

// Question 5 and 6

var t = 0;
var v = [];

// Accepting an Array Argument

function add_element_to_arrayContains() {
  v[t] = document.getElementById("text3").value;
  alert("Element: " + v[t] + " Added at index " + t);
  t++;
  document.getElementById("text3").value = "";

  // Display
  // function display_array() {
  var e = '';
  var r;
  for (r = 0; r < v.length; r += 1) {
    e += "arrayContains: " + v[r] + "<br>";
  }
  document.getElementById("AddArrayString").innerHTML = e;
  // }

}


// Accept a String in Text4
var q;

function compare() {

  q = document.getElementById('text4').value;
  document.getElementById('text4').value = '';
  document.getElementById('compareString').innerHTML = q;
}
//------------------------------******************************------------------------------\\

// Question 5

function arrayContains() {

  var isInString = false;
  v.forEach(function(v) {
    if (v === q) {
      isInString = true;
    }
  });
  document.getElementById('isString').innerHTML = isInString;
}

//Question 6 ArrayContains 2
function arrayContains2() {
  var isInString2 = false;
  var count = 0;
  v.forEach(function(v) {
    if (v === q) {
      count = count + 1;
      if (count >= 2) {
        isInString2 = true;
      }
    }
  });
  document.getElementById('isString2').innerHTML = isInString2;
}
//------------------------------******************************------------------------------\\

//Question 6 ArrayContains 3
function arrayContains3() {
  var isInString3 = false;

  var count = 0;
  v.forEach(function(v) {
    if (v === q) {
      count = count + 1;
      if (count >= 3) {
        isInString3 = true;
      }
    }
  });
  document.getElementById('isString3').innerHTML = isInString3;
}
//------------------------------******************************------------------------------\\

//Question 6 ArrayContains N

var t;

function nInput() {

  t = document.getElementById('text5').value;
  document.getElementById('text5').value = '';
  document.getElementById('compareNString').innerHTML = t;
}

function arrayContainsN() {
  var isInStringN = false;
  var count = 0;
  v.forEach(function(v) {
    if (v === q) {
      count = count + 1;
    }

  });
  if (count <= t && count >= t) {
    isInStringN = true;
  }
  document.getElementById('isStringN').innerHTML = isInStringN;
}

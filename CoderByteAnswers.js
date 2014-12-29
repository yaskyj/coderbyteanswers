//Run Length
function RunLength(str) { 
  var theArray = str.split('');
  var ansArray = [];
  var count = 1;
  for (var i = 0; i < theArray.length; i++) {
    if (theArray[i] == theArray[i+1] && theArray[i] !== theArray[i-1]) {
      count++;
    } else if (theArray[i] == theArray[i+1] && theArray[i] == theArray[i-1]) {
      count++;
    } else if (theArray[i] !== theArray[i+1] && theArray[i] == theArray[i-1]) {
      ansArray.push(count);
      ansArray.push(theArray[i]);
      count = 1;
    } else {
      ansArray.push(count);
      ansArray.push(theArray[i]);
    }
  }
  return ansArray.join('');
         
}

//Check Fibonacci
function FibonacciChecker(num) { 
  var first = 0;
  var second = 1;
  var temp;
  while (first <= num) {
    if (first == num) {
      return 'yes'
    }
    temp = first + second;
    first = second;
    second = temp;
  }
  // code goes here  
  return 'no'; 
         
}

//Greatest common factor
function gcd(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
}
function Division(num1,num2) { 
  return gcd(num1, num2); 
}

//Distinct List
function DistinctList(arr) { 
  arr.sort(function(a, b){return a-b});
  var count = 0;
  for (var i = 0; i < arr.length - 1; i++ ) {
    if (arr[i] == arr[i+1]) {
      count++;
    }
  }  
  return count; 
         
}
//ThreeFiveMultiples
function ThreeFiveMultiples(num) { 
  var answer = 0;
  for (var i = num - 1; i > 0; i--) {
    if (i%3 == 0 || i%5 == 0) {
      answer += i;
    }
  }
  return answer;
}

//Counting minutes
function checkMinutes(min1, min2) {
  if (min1 == min2) {
    return 0;
  } else if (min1 > min2){
    return -(min1 - min2);
  } else {
    return min2 - min1;
  }
}

function minutesInHours(hour1, hour2) {
  return (hour2 - hour1) * 60;
}

function turn12IntoZero(timeArray) {
  if (timeArray[0] == 12) {
    timeArray[0] = 0;
    return timeArray;
  }
  else {
    return timeArray;
  }
}

function CountingMinutesI(str) { 
  var totalMinutes = 0;
  var dayMins = 1440;
  var times = str.split('-');
  var firstTime = times[0].split(':');
  var secondTime = times[1].split(':');
  var firstTimeArray = [Number(firstTime[0]), Number(firstTime[1].slice(0,2)), firstTime[1].slice(2,4)];
  var secondTimeArray = [Number(secondTime[0]), Number(secondTime[1].slice(0,2)), secondTime[1].slice(2,4)];
  firstTimeArray = turn12IntoZero(firstTimeArray);
  secondTimeArray = turn12IntoZero(secondTimeArray);
  
  if (firstTimeArray[2] == secondTimeArray[2]) {
    if (firstTimeArray[0] == secondTimeArray[0] && firstTimeArray[1] > secondTimeArray[1]) {
      totalMinutes = dayMins + checkMinutes(firstTimeArray[1], secondTimeArray[1]);
    } else if (firstTimeArray[0] == secondTimeArray[0]) {
      totalMinutes = checkMinutes(firstTimeArray[1], secondTimeArray[1]);
    } else if (firstTimeArray[0] > secondTimeArray[0]) {
      totalMinutes = dayMins + minutesInHours(firstTimeArray[0], secondTimeArray[0]) + checkMinutes(firstTimeArray[1], secondTimeArray[1]);
    } else {
      totalMinutes = minutesInHours(firstTimeArray[0], secondTimeArray[0]) + checkMinutes(firstTimeArray[1], secondTimeArray[1]);
    }
  } else {
    totalMinutes = (dayMins/2) + minutesInHours(firstTimeArray[0], secondTimeArray[0]) + checkMinutes(firstTimeArray[1], secondTimeArray[1]);
  }
  // code goes here  
  return totalMinutes; 
         
}

//Number Search
function NumberSearch(str) { 
  var numArray = str.match(/(\d+)/g);
  var wordArray = str.match(/([a-zA-Z]+)/g);
  var letters = wordArray.join('');
  var answer = 0;
  for (var i in numArray) {
    answer += Number(numArray[i]);
  }
  answer = Math.round(answer/letters.length);
  return answer; 
         
}

//Dash insert
function DashInsertII(num) { 
  var theArray = [];
  var str = num.toString();
  for (var i = 0; i < str.length; i++) {
    if (Number(str.charAt(i)) == 0) {
      theArray.push(str.charAt(i));
    } else if (Number(str.charAt(i))%2 !== 0 && Number(str.charAt(i+1))%2 !== 0 && i < str.length -1) {
      theArray.push(str.charAt(i));
      theArray.push('-');
    } else if (Number(str.charAt(i))%2 == 0 && Number(str.charAt(i+1))%2 == 0 && i < str.length -1) {
      theArray.push(str.charAt(i));
      theArray.push('*');
    } else {
      theArray.push(str.charAt(i));
    }
  }
  str = theArray.join('');
  return str;
}

//Letter Count
function LetterCount(str) {
  str = str.toLowerCase();
  var words = str.split(' ');
  var greatest = '';
  var count = 1;
  for (var e in words) {
    for (var i = 0; i < words[e].length; i++){
      if ((words[e].match(new RegExp(words[e][i], "g")) || []).length > count) {
        greatest = words[e];
        count = (words[e].match(new RegExp(words[e][i], "g")) || []).length;
      }
    }
  }
  if (count == 1) {
    return '-1';
  }
  return greatest;
}

//ArithGeo II
function ArithGeoII(arr) { 
  var arithPatt = '';
  var geoPatt = '';
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i-1] == arr[i+1] - arr[i]) {
      arithPatt = 'Arithmetic';
    } else {
      arithPatt = '';
      break;
    }
  }
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i+1]/arr[i] == arr[i]/arr[i-1]) {
      geoPatt = 'Geometric';
    } else {
      geoPatt = '';
      break;
    }
  }
  if (geoPatt == 'Geometric') {
    return geoPatt;
  } else if (arithPatt == 'Arithmetic') {
    return arithPatt;
  } else {
    return '-1';
  }
}

//Second Swap
function SwapII(str) { 
  var strArray = str.split('');
  var ansArray = [];
  for (var i in strArray) {
    if (strArray[i].charCodeAt(0) >= 65 && strArray[i].charCodeAt(0) <= 90) {
      ansArray.push(strArray[i].toLowerCase());
    } else if (strArray[i].charCodeAt(0) >= 97 && strArray[i].charCodeAt(0) <= 122) {
      ansArray.push(strArray[i].toUpperCase());
    } else {
      ansArray.push(strArray[i]);
    }
  }
  for (var i = 0; i < ansArray.length -1; i++) {
    if (ansArray[i].charCodeAt(0) >= 48 && ansArray[i].charCodeAt(0) <= 57) {
      for (var e = i+1; e < ansArray.length; e++) {
        if (ansArray[e].charCodeAt(0) >= 48 && ansArray[e].charCodeAt(0) <= 57 && e - i > 1) {
          var first = ansArray[i];
          var second = ansArray[e];
          ansArray.splice(i, 1, second);
          ansArray.splice(e, 1, first);
          break;
        } else if ((ansArray[e].charCodeAt(0) >= 65 && ansArray[e].charCodeAt(0) <= 90) || ansArray[e].charCodeAt(0) >= 97 && ansArray[e].charCodeAt(0) <= 122) {
          continue;
        } else {
          break;
        }
      }
    }
  }
  
  var str = ansArray.join('');
  // code goes here  
  return str; 
         
}
//If a number is Prime
function PrimeTime(num) { 
  if (num % 2 == 0 && num > 2) {
    return false;
  } 
  for (var i = 3; i < Math.round(Math.sqrt(num)) + 1; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
         
}

//All prime number to a certain number
function PrimeMover(num) {
  var primes = [];
  var theNum = 2;
  while (primes.length < num) {
    if (PrimeTime(theNum)) {
      primes.push(theNum)

    }
    theNum++;
  }
  
  return primes[primes.length -1]
}

//Caesar cypher
function CaesarCipher(str, num) { 
  var output = "";
    for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if      (c >= 65 && c <=  90) output += String.fromCharCode((c - 65 + num) % 26 + 65);  // Uppercase
    else if (c >= 97 && c <= 122) output += String.fromCharCode((c - 97 + num) % 26 + 97);  // Lowercase
    else                          output += str.charAt(i);  // Copy
  }
  return output;
}

//Check for Palindrome
function PalindromeTwo(str) {
  str = str.replace(/[^a-zA-Z]+/g, '');
  str = str.toLowerCase();
  var forwardString = str.split(' ').join('');
  var reverseString = forwardString.split('').reverse().join('');
  if (forwardString == reverseString) {
    return "true";
  }
  return "false";
}

//Simple mode
function SimpleMode(arr) { 
  var frequency = {};
  var max = 0; 
  var result;  
  for(var v in arr) {
    frequency[arr[v]]=(frequency[arr[v]] || 0)+1; 
    if(frequency[arr[v]] > max) { 
            max = frequency[arr[v]];  
            result = arr[v];          
    }
  }
  
  if (max > 1) {
    return result;
  }
  return -1;
         
}

//Consecutive Array
function Consecutive(arr) { 
  arr.sort(function(a, b){return a-b});
  var answer = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    answer += arr[i+1] - arr[i];
  }
  answer -= arr.length - 1;
  return answer; 
         
}

//Array Addition
function subsetsum(target, array) {
    if (array.length == 0) {
        return target == 0;
    }
    var n = array[0];
    array = array.slice(1);
    return subsetsum(target, array) || subsetsum(target - n, array);
}
function ArrayAdditionI(arr) { 
  arr.sort(function(a, b){return a-b});
  var largest = arr.pop();
  if (subsetsum(largest, arr)){
    return "true";
  }
  return "false";
}

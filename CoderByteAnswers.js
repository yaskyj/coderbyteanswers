//Most free time - what a giant use of my free time
//and to not even get all test cases correct
function MinuteDifference(num1, num2) {
  return ((num2-num1)/1000)/60;  
}
function SplitTimes(strArr) {
  var timeArr = strArr.split('-');
  var date = '2014-12-25T';
  var ansArr = [];
  for (var i in timeArr) {
    var partDay = timeArr[i].slice(5, 7);
    var minute = timeArr[i].slice(3, 5);
    var hour = timeArr[i].slice(0,2);
    if (partDay == 'PM') {
      if (hour != 12) {
        ansArr.push(Date.parse(date + (Number(hour)+12).toString() + ':' + minute)); 
      } else {
        ansArr.push(Date.parse(date + (Number(hour)).toString() + ':' + minute));
      }
    } else {
      //return date + hour + ':' + minute;
      ansArr.push(Date.parse(date + hour + ':' + minute));
    }
  }
  return ansArr;
}
function MostFreeTime(strArr) {
  var allTimeArr = [];
  var indTimes = [];
  for (var i in strArr) {
    allTimeArr.push(SplitTimes(strArr[i]));
  }
  for (var i in allTimeArr) {
    for (var e in allTimeArr[i]) {
      indTimes.push(allTimeArr[i][e]);
    }    
  }
  var actMinutes = [];
  for (var i in allTimeArr) {
    actMinutes.push(MinuteDifference(allTimeArr[i][0], allTimeArr[i][1]));
  }
  var totalActMins = 0;
  for (var i in actMinutes) {
    totalActMins += actMinutes[i];
  }
  indTimes.sort(function(a, b) {return a-b});
  var totalMinutes = MinuteDifference(indTimes[0], indTimes[indTimes.length - 1]);
  var freeMinArr = [];
  var count = 0;
  var num = 1;
  while (count < 2) {
    freeMinArr.push(MinuteDifference(indTimes[num], indTimes[num+1]));
    num += 2;
    count++;
  }
  freeMinArr.sort(function(a, b) {return a-b});
  var hourStr = '';
  var minStr = '';
  if (Math.floor((freeMinArr[freeMinArr.length-1]/60)) < 10) {
    hourStr = '0' + Math.floor((freeMinArr[freeMinArr.length-1]/60)).toString();
  } else {
    hourStr = Math.floor((freeMinArr[freeMinArr.length-1]/60)).toString();
  }
  if (Math.floor((freeMinArr[freeMinArr.length-1]%60)) < 10) {
    minStr = '0' + Math.floor((freeMinArr[freeMinArr.length-1]%60)).toString();
  } else {
    minStr = Math.floor((freeMinArr[freeMinArr.length-1]%60)).toString();
  }
  return hourStr + ':' + minStr;
}

//Look say sequence - actually the exact same answer as RunLength
function LookSaySequence(num) { 
  var theArray = num.toString().split('');
  var ansArray = [];
  count = 1;
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

//Triple double
function TripleDouble(num1,num2) {
  var arr1 = num1.toString().split('');
  var arr2 = num2.toString().split('');
  for (var i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] == arr1[i+1] && arr1[i] == arr1[i+2]) {
      for (var e = 0; e < arr2.length; e++) {
        if (arr2[e] == arr1[i] && arr2[e] == arr2[e+1]) {
          return 1;
        }
      }
    }
  }
  return 0;
}

//Bracket matcher solution
function BracketMatcher(str) { 
  var arr = str.split('');
  var lPar = [];
  var rPar = [];
  for (var i in arr) {
    if (arr[i].charCodeAt(0) == 40) {
      lPar.push(arr[i]);
    }
    if (arr[i].charCodeAt(0) == 41) {
      rPar.push(arr[i]);
    }
  }
  if (lPar.length == rPar.length) {
    return 1;
  }
  return 0;        
}
//Multiple brackets solution
function MultipleBrackets(str) { 
  var arr = str.split('');
  var lPar = [];
  var rPar = [];
  var lBra = [];
  var rBra = [];
  for (var i in arr) {
    if (arr[i].charCodeAt(0) == 40) {
      lPar.push(arr[i]);
    }
    if (arr[i].charCodeAt(0) == 41) {
      rPar.push(arr[i]);
    }
    if (arr[i].charCodeAt(0) == 91) {
      lBra.push(arr[i]);
    }
    if (arr[i].charCodeAt(0) == 93) {
      rBra.push(arr[i]);
    }
  }
  if (lPar.length == rPar.length && lBra.length == rBra.length) {
    var lengths = lPar.length + lBra.length;
    return '1' + " " + lengths;
  }
  return 0;        
}

//Permutation step - another inelegant brute force
function permutator (input) {
  var set =[];
  function permute (arr, data) {
    var cur, memo = data || [];

    for (var i = 0; i < arr.length; i++) {
       cur = arr.splice(i, 1)[0];
       if (arr.length === 0) set.push(memo.concat([cur]));
       permute(arr.slice(), memo.concat([cur]));
       arr.splice(i, 0, cur);
    }
    return set;
 }
 return permute(input);
}

function PermutationStep(num) { 
  var arr = num.toString().split('');
  var perms = permutator(arr);
  var final = [];
  for (var i in perms) {
    var string = '';
    for (var e in perms[i]) {
      string += perms[i][e]
    }
    final.push(string);
  }
  for (var i in final) {
    final[i] = Number(final[i]);    
  }
  var answer = 0;
  for (var i in final) {
    if (answer == 0 && final[i] > num) {
      answer = final[i]      
    } else if (final[i] > num && final[i] < answer) {
      answer = final[i];
    }
  }
  if (answer == 0) {
    return -1
  }
  return answer;
}
//Prime checker solution
function permutator (input) {
  var set =[];
  function permute (arr, data) {
    var cur, memo = data || [];

    for (var i = 0; i < arr.length; i++) {
       cur = arr.splice(i, 1)[0];
       if (arr.length === 0) set.push(memo.concat([cur]));
       permute(arr.slice(), memo.concat([cur]));
       arr.splice(i, 0, cur);
    }
    return set;
 }
 return permute(input);
}

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

function PrimeChecker(num) { 
  var arr = num.toString().split('');
  var perms = permutator(arr);
  var final = [];
  for (var i in perms) {
    var string = '';
    for (var e in perms[i]) {
      string += perms[i][e]
    }
    final.push(string);
  }
  for (var i in final) {
    if (PrimeTime(final[i])) {
      return 1;
    }
  }
  return 0;
}

//Number Encoding - pretty quick and easy
function NumberEncoding(str) {
  var strArray = str.split('');
  for (var i in strArray) {
    if (strArray[i].charCodeAt(0) >= 97 && strArray[i].charCodeAt(0) <= 122) {
      strArray[i] = strArray[i].charCodeAt(0) - 96;
    }
  } 
  return strArray.join('');        
}
//Coin determiner - it's so inelegant, but I'm so sleepy
function CoinDeterminer(num) {
  count = 0;
  while (num > 0) {
    if (num >= 11) {
      count++;
      num -= 11;
      continue;
    }
    if (num >= 9) {
      count++;
      num -= 9;
      continue;
    }
    if (num >= 7) {
      count++;
      num -= 7;
      continue;
    }
    if (num >= 5) {
      count++;
      num -= 5;
      continue;
    }
    if (num >= 1) {
      count++;
      num -= 1;
      continue;
    }
  }
  return count;
}
//medium division strings
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
function FormattedDivision(num1,num2) { 
  var num = (num1/num2).toFixed(4);
  var numbers = num.split('.');
  return formatNumber(numbers[0]) + '.' + numbers[1];
}

//easy division strings
function DivisionStringified(num1,num2) {
  var num = Math.round(num1/num2);
  var stringed = num.toString();      
  if (stringed.length < 4) {
    return stringed;
  }
  if (stringed.length > 3 && stringed.length < 6) {
    return Math.floor(num/1000).toString() + ',' + (num%1000).toString();
  }
  if (stringed.length > 5 && stringed.length < 9) {
    return Math.floor(num/1000000).toString() + ',' + Math.floor(num%1000000/1000).toString() + ',' + (num%1000).toString();
  }
}
   

//Binary converter - this felt like cheating
function BinaryConverter(str) { 

  // code goes here  
  return parseInt(str, 2);
         
}

//StringScramble - it's a bit crude
function StringScramble(str1,str2) { 
  var firstArr = str1.match(/([a-zA-Z]+)/g);
  var secondArr = str2.match(/([a-zA-Z]+)/g);
  var firstLetters = firstArr.join('');
  firstArr = firstLetters.split('').sort();
  var secondLetters = secondArr.join('');
  secondArr = secondLetters.split('').sort();
  var ansArr = [];
  for (var i in secondArr) {
    for (var e in firstArr) {
      if (firstArr[e] == secondArr[i]) {
        ansArr.push(firstArr[e]);
        break;
      }
    }
  }
  if (ansArr.join('') == secondArr.join('')) {
    return true;
  } else{
    return false;
  }
  
}

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

//Write a function check, which, given a number, returns whether
//it is valid or not (according to the Luhn Algorithm).

//from right to left, double value of every 2nd digit starting at 2nd to last
//if result of doubling > 9, subtrack nine
//sum all digits
//if %10 === 0, number is valid


// INPUT: some number
// OUTPUT: true or false

function checkLuhn(input) {
  var reverseArr = String(input).split("").reverse();
  console.log(reverseArr);

  var nReverseArr = reverseArr.map(function(x) {
    return Number(x);
  });

  for (var i = 1; i < nReverseArr.length; i += 2) {
    nReverseArr[i] = Number(nReverseArr[i])*2;
    if (nReverseArr[i] > 9) {
      nReverseArr[i] = nReverseArr[i] - 9;
    }
  }

  var sum = nReverseArr.reduce((a, b) => a + b, 0);
  console.log(sum);

  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = checkLuhn;
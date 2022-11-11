function numChecker(x) {
  let n = parseFloat(x);
  if (n % 2 == 0) {
    result.innerHTML = "The number is even";
  } else if (isNaN(n)) {
    result.innerHTML = "This is not a number";
  } else {
    result.innerHTML = "This number is odd";
  }
}

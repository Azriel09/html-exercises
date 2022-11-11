function tempConverter(a) {
  let n = parseInt(a);
  let unit = document.getElementById("converter");
  let selected = unit.options[unit.selectedIndex].value;
  if (isNaN(n)) {
    result.innerHTML = "Not a number";
  } else if (selected == "f2c") {
    result.innerHTML = (n - 32) * (5 / 9) + "°C";
  } else {
    result.innerHTML = n * 1.8 + 32 + "°F";
  }
}

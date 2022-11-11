function heightConverter(f, i) {
  let foot = parseInt(f);
  let inches = parseInt(i);
  let totalInches = f * 12 + inches;
  if (isNaN(foot) || isNaN(inches)) {
    result.innerHTML = "Not a valid number input";
  } else {
    result.innerHTML = Math.round(totalInches * 0.0254 * 100) / 100 + " meters";
  }
}

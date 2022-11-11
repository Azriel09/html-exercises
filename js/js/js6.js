function greeter(x) {
  let day = x.toLowerCase();
  console.log(day);

  switch (day) {
    case "sunday":
      result.innerHTML =
        "Happy Sunday! Enjoy your day because tomorrow's Monday.";
      break;
    case "monday":
      result.innerHTML = "It's Monday! Which means its time to work!";
      break;
    case "tuesday":
      result.innerHTML = "Tuesday is here! 3 more days and it'll be Friday!";
      break;
    case "wednesday":
      result.innerHTML =
        "Wednesday is today! You're halfway through the weekdays, just a little bit more!";
      break;
    case "thursday":
      result.innerHTML =
        "Thursday have arrived! Are you getting excited for weekend?";
      break;
    case "friday":
      result.innerHTML =
        "Friday's the last day of the weekdays! Push yourself just a bit more!";
      break;
    case "saturday":
      result.innerHTML =
        "Saturday is the day you can rest! Unless you have work in Saturday.";
      break;
    default:
      result.innerHTML = "I do not recognize that day at all!";
  }
}

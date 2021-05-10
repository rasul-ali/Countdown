const countdown = () => {
  const countdate = new Date("Dec 31, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countdate - now;
  // Time Section
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  //Calculate the time
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMin = Math.floor((gap % hour) / min);
  const textSec = Math.floor((gap % min) / sec);
  //Display the time
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".min").innerText = textMin;
  document.querySelector(".sec").innerText = textSec;
  //Grammar fix
  if (textDay < 2) {
    document.querySelector(".day-txt").innerText = "Day";
  } else {
    document.querySelector(".day-txt").innerText = "Days";
  }
  if (textHour < 2) {
    document.querySelector(".hour-txt").innerText = "Hour";
  } else {
    document.querySelector(".hour-txt").innerText = "Hours";
  }
  if (textMin < 2) {
    document.querySelector(".min-txt").innerText = "Minute";
  } else {
    document.querySelector(".min-txt").innerText = "Minutes";
  }
  if (textSec < 2) {
    document.querySelector(".sec-txt").innerText = "Second";
  } else {
    document.querySelector(".sec-txt").innerText = "Seconds";
  }
};
setInterval(countdown, 999);

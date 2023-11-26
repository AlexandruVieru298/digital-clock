/* Clock */

const hour = document.getElementById("clock-hour"),
  minute = document.getElementById("clock-minute"),
  second = document.getElementById("clock-second");

function clock() {
  let date = new Date();

  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * 6;
  let ss = date.getSeconds() * 6;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minute.style.transform = `rotateZ(${mm}deg)`;
  second.style.transform = `rotateZ(${ss}deg)`;
}

setInterval(clock, 1000);

/* Clock & Date text */

const textHour = document.getElementById("text-hour"),
  textMinute = document.getElementById("text-minute"),
  textAmPm = document.getElementById("text-ampm"),
  dateDay = document.getElementById("date-day"),
  dateMonth = document.getElementById("date-month"),
  dateYear = document.getElementById("date-year");

function clockText() {
  let date = new Date();
  let hh = date.getHours(),
    ampm,
    mm = date.getMinutes(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();

  if (hh >= 12) {
    hh = hh - 12;
    ampm = "PM";
  } else ampm = "AM";

  if (hh == 0) hh = 12;
  if (hh < 10) hh = "0" + hh;
  if (mm < 10) mm = "0" + mm;

  textHour.innerHTML = `${hh}:`;
  textMinute.innerHTML = `${mm}`;
  textAmPm.innerHTML = `${ampm}`;

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  dateDay.innerHTML = day;
  dateMonth.innerHTML = `${months[month]}`;
  dateYear.innerHTML = year;
}
setInterval(clockText, 1000);

/* DARK LIGHT THEME */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bxs-moon" : "bxs-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

document.addEventListener("DOMContentLoaded", function () {
  var colors = [200, 300, 335, 400, 500, 600, 700];

  var currentIndex = 0;

  var changeColorButton = document.getElementById("changeColorButton");

  changeColorButton.addEventListener("click", function () {
    var currentColor = colors[currentIndex];
    document.documentElement.style.setProperty("--hue-color", currentColor);

    localStorage.setItem("hueColor", currentColor.toString());

    currentIndex = (currentIndex + 1) % colors.length;
  });

  var storedColor = localStorage.getItem("hueColor");
  if (storedColor !== null) {
    document.documentElement.style.setProperty("--hue-color", storedColor);

    currentIndex = colors.indexOf(parseInt(storedColor, 10));

    currentIndex = currentIndex !== -1 ? currentIndex : 0;
  }
});

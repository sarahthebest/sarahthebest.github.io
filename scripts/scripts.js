// Darkmode toggle btn
const checkbox = document.getElementById("checkbox");

// Function to toggle dark mode and save preference to localStorage
function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle("DarkToLight");
  // Save the user's preference to localStorage
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// Event listener for the checkbox change
checkbox.addEventListener("change", toggleDarkMode);

function checkDarkModePreference() {
  const storedDarkMode = localStorage.getItem("darkMode");
  if (storedDarkMode === "enabled") {
    document.body.classList.add("DarkToLight");
  } else {
    document.body.classList.remove("DarkToLight");
  }
}
window.addEventListener("load", checkDarkModePreference);


// Function to update the date and time
function updateDateTime() {
  var options = { 
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
};
  var currentDate = new Date();
  var dateTimeString = currentDate.toLocaleString('en-GB', options); 
  document.getElementById("dateTime").innerHTML = dateTimeString;
}
updateDateTime();

setInterval(updateDateTime, 1000);

// top btn
var mybutton = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function goToTop() {
  if (document.documentElement.scrollTo) {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    document.body.scrollTop = 0;
  }
}

window.addEventListener('load', function () {
  AOS.init();
});

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: window.innerWidth < 1000, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 70, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 20, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});



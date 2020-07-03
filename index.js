//Initialise the animate on scroll library

AOS.init();

//Exit disclaimer ----------------------------------------------------------------

let exitDisclaimer = document.getElementById("exit-disclaimer");
let disclaimer = document.querySelector(".disclaimer");

/**
 * exitDisclaimer
 * On click of exit cross add display none to disclaimer
 */

exitDisclaimer.addEventListener("click", function () {
  disclaimer.style.display = "none";
});

// Show and hide mobile menu when click hamburger

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", function () {
  toggleMenu(hamburger, menu);
});

/**
 * toggle Menu
 * show and hide mobile menu on click of hamburger or cross
 * accepts the element clicked on (hamburger or cross) as el and the menu itself as el2
 */

const toggleMenu = (el, el2) => {
  el.classList.toggle("change");
  el2.classList.toggle("hide");
};

//Set time in hero section to fifteen minutes in future---------------------------

const fifteenMins = 15 * 60 * 1000;

/**
 * checkTime
 * Checks current time and adds fifteen minutes to display time take to get loan
 */

const checkTime = () => {
  const currentDate = new Date();
  const futureDate = new Date(currentDate.getTime() + fifteenMins);
  let futureHour = futureDate.getHours();
  let futureMins = futureDate.getMinutes();

  if (futureMins < 10) {
    futureMins = 0 + futureMins.toString();
  }

  if (futureHour < 10) {
    futureHour = 0 + futureHour.toString();
  }

  let time = document.getElementById("time");
  let timeParent = document.getElementById("insert-time");
  timeParent.removeChild(time);

  timeParent.insertAdjacentHTML(
    "beforeend",
    `
  
  <span id='time'>${futureHour}:${futureMins}</span>
  
  `
  );
};

checkTime();

//runs every second to check time

setInterval(function () {
  checkTime();
}, 1000);

//Accordion ---------------------------------------------------------------

const headerArray = document.querySelectorAll(".accordion-header");

for (let i = 0; i < headerArray.length; i++) {
  const accordHeader = document.getElementById(`accordion-header-${i}`);
  const accordBody = document.getElementById(`body-${i}`);

  /**
   * toggleAccordion
   * Toggles accordion on / off depending if contains class hide
   */
  const toggleAccordion = () => {
    accordBody.classList.toggle("hide");
    accordHeader.classList.toggle("active");
  };

  accordHeader.addEventListener("click", toggleAccordion);
}

//restrict input min and max on the borrow field -----------------------

const borrowInput = document.getElementById("borrow");
const slider = document.getElementById("range");

/**
 * minMax
 * If the amount entered to borrow is less than min value then value set to min / if value entered is more than max then value set to max
 */

const minMax = () => {
  if (borrowInput.value != "") {
    if (parseInt(borrowInput.value) < parseInt(borrowInput.min)) {
      borrowInput.value = borrowInput.min;
    }
    if (parseInt(borrowInput.value) > parseInt(borrowInput.max)) {
      borrowInput.value = borrowInput.max;
    }
  }
};

borrowInput.addEventListener("blur", function () {
  minMax();
});

//change range on type in borrow input --------------------------------

/**
 * changeRange
 * when the inout is used change the slider to equal amount
 */
const changeRange = () => {
  slider.value = borrowInput.value;
  if (borrowInput.value === "") {
    slider.value = "100";
  }
};

borrowInput.addEventListener("keyup", changeRange);

/**
 * changeNumberInput
 * when the range slider is used change the inout field to display amount
 */

const changeNumberInput = () => {
  borrowInput.value = slider.value;
};

slider.addEventListener("input", function () {
  changeNumberInput();
});

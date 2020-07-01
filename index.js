//Exit disclaimer ----------------------------------------------------

var exitDisclaimer = document.getElementById("exit-disclaimer");
var disclaimer = document.querySelector(".disclaimer");

exitDisclaimer.addEventListener("click", function () {
  disclaimer.style.display = "none";
});

//Set time in hero section to fifteen minutes in future

function checkTime() {
  var fifteenMins = 15 * 60 * 1000;
  var currentDate = new Date();
  var futureDate = new Date(currentDate.getTime() + fifteenMins);
  var futureHour = futureDate.getHours();
  var futureMins = futureDate.getMinutes();

  if (futureMins < 10) {
    futureMins = 0 + futureMins.toString();
  }

  if (futureHour < 10) {
    futureHour = 0 + futureHour.toString();
  }

  var time = document.getElementById("time");
  var timeParent = document.getElementById("insert-time");
  timeParent.removeChild(time);

  timeParent.insertAdjacentHTML(
    "beforeend",
    `
  
  <span id="time">${futureHour}:${futureMins}</span>
  
  `
  );
}

checkTime();

setInterval(function () {
  checkTime();
}, 1000);

//Accordion ---------------------------------------------------------------

const headerArray = document.querySelectorAll(".accordion-header");

for (let i = 0; i < headerArray.length; i++) {
  const accordHeader = document.getElementById(`accordion-header-${i}`);
  const accordBody = document.getElementById(`body-${i}`);

  function toggleAccordion() {
    accordBody.classList.toggle("hide");
    accordHeader.classList.toggle("active");
  }

  accordHeader.addEventListener("click", toggleAccordion);
}

//restrict input min and max on the borrow field -----------------------

const borrowInput = document.getElementById("borrow");
const slider = document.getElementById("range");

function minMax() {
  if (borrowInput.value != "") {
    if (parseInt(borrowInput.value) < parseInt(borrowInput.min)) {
      borrowInput.value = borrowInput.min;
    }
    if (parseInt(borrowInput.value) > parseInt(borrowInput.max)) {
      borrowInput.value = borrowInput.max;
    }
  }
}

borrowInput.addEventListener("blur", function () {
  minMax();
});

//change range on type in borrow input --------------------------------
function changeRange() {
  slider.value = borrowInput.value;
  if (borrowInput.value === "") {
    slider.value = "100";
  }
}

borrowInput.addEventListener("keyup", changeRange);

//on change of slider change the input field --------------------------

function changeNumberInput() {
  borrowInput.value = slider.value;
}

slider.addEventListener("input", function () {
  changeNumberInput();
});

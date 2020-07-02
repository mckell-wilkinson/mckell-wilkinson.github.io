//Initialise the animate on scroll library

AOS.init();

//Exit disclaimer ----------------------------------------------------

let exitDisclaimer = document.getElementById('exit-disclaimer');
let disclaimer = document.querySelector('.disclaimer');

exitDisclaimer.addEventListener('click', function () {
  disclaimer.style.display = 'none';
});

//Set time in hero section to fifteen minutes in future

checkTime = () => {
  let fifteenMins = 15 * 60 * 1000;
  let currentDate = new Date();
  let futureDate = new Date(currentDate.getTime() + fifteenMins);
  let futureHour = futureDate.getHours();
  let futureMins = futureDate.getMinutes();

  if (futureMins < 10) {
    futureMins = 0 + futureMins.toString();
  }

  if (futureHour < 10) {
    futureHour = 0 + futureHour.toString();
  }

  let time = document.getElementById('time');
  let timeParent = document.getElementById('insert-time');
  timeParent.removeChild(time);

  timeParent.insertAdjacentHTML(
    'beforeend',
    `
  
  <span id='time'>${futureHour}:${futureMins}</span>
  
  `
  );
}

checkTime();

setInterval(function () {
  checkTime();
}, 1000);

//Accordion ---------------------------------------------------------------

const headerArray = document.querySelectorAll('.accordion-header');

for (let i = 0; i < headerArray.length; i++) {
  const accordHeader = document.getElementById(`accordion-header-${i}`);
  const accordBody = document.getElementById(`body-${i}`);

  toggleAccordion = () => {
    accordBody.classList.toggle('hide');
    accordHeader.classList.toggle('active');
  }

  accordHeader.addEventListener('click', toggleAccordion);
}

//restrict input min and max on the borrow field -----------------------

const borrowInput = document.getElementById('borrow');
const slider = document.getElementById('range');

minMax = () => {
  if (borrowInput.value != '') {
    if (parseInt(borrowInput.value) < parseInt(borrowInput.min)) {
      borrowInput.value = borrowInput.min;
    }
    if (parseInt(borrowInput.value) > parseInt(borrowInput.max)) {
      borrowInput.value = borrowInput.max;
    }
  }
}

borrowInput.addEventListener('blur', function () {
  minMax();
});

//change range on type in borrow input --------------------------------
changeRange = () => {
  slider.value = borrowInput.value;
  if (borrowInput.value === '') {
    slider.value = '100';
  }
}

borrowInput.addEventListener('keyup', changeRange);

//on change of slider change the input field --------------------------

changeNumberInput = () => {
  borrowInput.value = slider.value;
}

slider.addEventListener('input', function () {
  changeNumberInput();
});


const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('hamburger-menu');

hamburger.addEventListener('click', function() {
  toggleMenu(hamburger, menu);
});


 const toggleMenu = (el, menu) => {
  el.classList.toggle('change');
  menu.classList.toggle('hide');
}
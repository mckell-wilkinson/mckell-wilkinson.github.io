//ACCORDION ---------------------------------------------------------------

let headerArray = document.querySelectorAll(".accordion-header");

for (let i = 0; i < headerArray.length; i++) {
  let accordHeader = document.getElementById(`accordion-header-${i}`);
  let accordBody = document.getElementById(`body-${i}`);

  let toggleAccordion = () => {
    accordBody.classList.toggle("hide");
    accordHeader.classList.toggle("active");
  };

  accordHeader.addEventListener("click", toggleAccordion);
}

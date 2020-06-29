//ACCORDION ---------------------------------------------------------------

let headerArray = document.querySelectorAll(".accordion-header");

for (let i = 0; i < headerArray.length; i++) {
  let header = document.getElementById(`accordion-header-${i}`);
  let body = document.getElementById(`body-${i}`);

  let toggleAccordion = () => {
    body.classList.toggle("hide");
    header.classList.toggle("active");
  };

  header.addEventListener("click", toggleAccordion);
}

console.log("test");

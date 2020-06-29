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



//restrict input min and max on the borrow field

function minMax(el){
    console.log(el.min);
    if(el.value != ""){
      if(parseInt(el.value) < parseInt(el.min)){
        el.value = el.min;
      }
      if(parseInt(el.value) > parseInt(el.max)){
        el.value = el.max;
      }
    }
  }
  
let borrowInput = document.getElementById("borrow");
borrowInput.addEventListener("blur", function() {
    minMax(borrowInput);
});

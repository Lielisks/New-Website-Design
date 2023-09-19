// Accordion Js Codes
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item) => {
    let header = item.querySelector("header");

    header.addEventListener("click" , () =>{
        item.classList.toggle("open");
        let title = item.querySelector(".title");
        let desctiption = item.querySelector(".description");
        if(item.classList.contains("open"))
        {
            desctiption.style.height = `${desctiption.scrollHeight}px`;
            title.style.color = "#8470ff";
            item.querySelector("i").classList.replace("fa-plus" , "fa-minus");
        }
        else
        {
            desctiption.style.height = "0px";
            title.style.color = "#444";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
})



// Counting Js Codes
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
   const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const inc = target / speed;

      if(count < target)
      {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      }
      else
      {
        count.innerText = target;
      }
    }
    updateCount();
});



// Validation
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()




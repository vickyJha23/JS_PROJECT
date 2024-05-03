console.log("Har Har Mahadev");
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
      let btn = question.querySelector(".question-btn");
      btn.addEventListener("click", () => {
          questions.forEach((item) => {
               if(item !== question){
                    item.children[1].classList.add("hidden");
               }
          });
          question.children[1].classList.toggle("hidden");
          questions.forEach((itm) => {
               const btn = itm.querySelector(".question-btn");
               // console.log(btn);
               if(!(itm.children[1].classList.contains("hidden"))){
                    btn.firstElementChild.classList.add("hidden");
                    btn.lastElementChild.classList.remove("hidden");
                    // console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥");                  
               }
               else{
                    btn.firstElementChild.classList.remove("hidden");
                    btn.lastElementChild.classList.add("hidden");
                    // console.log("🙌🙌🙌🙌🙌🙌🙌🙌🙌");  
               }
          })        
      }) 
})
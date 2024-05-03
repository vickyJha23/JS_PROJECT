console.log("Har Har Mahadev");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let counter = 0;
window.addEventListener("DOMContentLoaded", () => {
    if (slides.length > 0) {
        slides.forEach((slide, index) => {
            slide.style.left = ` ${index * 100}%`;
        })
    }
})
nextBtn.addEventListener("click", () => {
     counter++;
     carousel(counter);
})
prevBtn.addEventListener("click", () => {
     counter--;
     carousel(counter);
})
function carousel() {
    if(counter < slides.length - 1){
       nextBtn.style.display = "block";        
    }   
    else{
        nextBtn.style.display = "none";
    }
    if(counter > 0){
          prevBtn.style.display = "block";
    }
    else{
         prevBtn.style.display = "none";
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}
prevBtn.style.display = "none";
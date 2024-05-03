// console.log("Har Har Mahadev");
const toggleBtn = document.querySelector(".toggle_btn");
const linkContainer = document.querySelector(".link-container");
toggleBtn.addEventListener("click", handleNavigationLinks);


function handleNavigationLinks() {
     if(linkContainer.classList.contains("hidden")){
          linkContainer.classList.remove("hidden")
     }
     else{
         linkContainer.classList.add("hidden");
     }
}



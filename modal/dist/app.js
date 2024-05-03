// console.log("Har Har Mahadev");
//modal btn access
const openModalBtn = document.querySelector("#open_modal");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector("#close_btn");
closeBtn.addEventListener("click", handleInvisiblity);
// console.log(overlay);
openModalBtn.addEventListener("click", handleVisiblity);
//handling visibility of modal
function handleVisiblity(){
     if(overlay.classList.contains("invisible") && overlay.classList.contains("z-[-10]")){
        overlay.className = overlay.className.replace("invisible", "visible").replace("z-[-10]", "z-[10]"); 
         // console.log("🔥🔥🔥🔥🔥🔥");   
     } 
}
// handling invisibility of modal
function handleInvisiblity() {
   if(overlay.classList.contains("visible") && overlay.classList.contains("z-[10]")){
      overlay.className = overlay.className.replace("visible", "invisible").replace("z-[10]", "z-[-10]");
   }
}

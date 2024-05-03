const toggleBtn = document.querySelector(".toggleBtn");
const closeBtn = document.querySelector("#close_btn");
const navBar = document.querySelector("#sidebar");
toggleBtn.addEventListener("click", handleDisplayNavBar);
closeBtn.addEventListener("click", handleHideNavbar);
//handling displaying of navbar
function handleDisplayNavBar(){
     if(navBar.classList.contains("translate-x-[-100%]"))
      {  navBar.classList.remove("translate-x-[-100%]");
    
      }
      else{
          navBar.classList.add("translate-x-[-100%]");
      }
}
// handling Hiding of navigation bar
function handleHideNavbar(){
      navBar.classList.add("translate-x-[-100%]");
}


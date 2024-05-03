const preloader = document.querySelector(".preloader");
const video = document.querySelector(".video_container");
const slider = document.querySelector(".slider");
console.log(slider);
const playPauseButton = document.querySelector("button");
playPauseButton.addEventListener("click", (e) => {
      if(video.paused){
          slider.classList.add("left-0");   
          slider.classList.remove("left-[50%]");    
          video.play();      
      }
      else{
          slider.classList.remove("left-0");
          slider.classList.add("left-[50%]");;
          video.pause();
      }
})
window.addEventListener("load", () => {
      preloader.classList.add("invisible");
})
const hexColors ="0123456789ABCDEF";
const spanValue = document.querySelector(".backgroundColorValue");
const  backgroundChangerBtn = document.querySelector(".btn");
backgroundChangerBtn.addEventListener("click", handleBackgroundColor);
function handleBackgroundColor () {
     let hexColor = "#";
     for(let i = 0; i < 6; i++){
          let randomNumber = handleRandomNumber();
          hexColor = hexColor + hexColors[randomNumber]; 
     }
     document.body.style.backgroundColor = hexColor;
     spanValue.textContent = hexColor;
}
function handleRandomNumber () {
     return (Math.floor(Math.random() * hexColors.length));
}

handleBackgroundColor();
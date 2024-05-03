// console.log("Har Har mahadev");
const colors = ["red", "green", "blue", "yellow", "violet", "maroon", "aqua"];
const colorValue = document.querySelector("#backgroundColorvalue");
const  backgroundChangerBtn = document.querySelector("")
console.log(colorValue);
const colorChangerBtn = document.querySelector("#change_btn");
colorChangerBtn.addEventListener("click", handleBackgroundColorChange)
function handleBackgroundColorChange(){
     let randomNum = getRandomNumber();
//      console.log(`random number is: ${randomNum}`);
     document.body.style.backgroundColor = colors[randomNum];
     colorValue.textContent = colors[randomNum];   
}
function getRandomNumber(){
      return (Math.floor(Math.random() * colors.length));
}
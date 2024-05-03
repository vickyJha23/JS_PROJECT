// let counter = 0;
// const incrementBtn = document.querySelector(".increment");
// const resetBtn = document.querySelector(".reset");
// const decrementBtn = document.querySelector(".decrement");
// const handleIncrement = () => {
//       counter ++;
//       displayValue(counter);
// }
// const handleDecrement = () => {
//       counter--;
//       displayValue(counter);
// }

// const handleReset = () => {
//      counter = 0;
//      displayValue(counter);
// }

// function displayValue(counter){
//      if(counter > 0){
//         document.querySelector(".counter_value").style.color = "green";   
//      }
//      else if(counter < 0){
//         document.querySelector(".counter_value").style.color = "red"
//      }
//      else{
//         document.querySelector(".counter_value").style.color = "black"
//      }
//      document.querySelector(".counter_value").textContent = counter;
// }

// incrementBtn.addEventListener("click", () => {
//      handleIncrement();
// })
// decrementBtn.addEventListener("click", () => {
//     handleDecrement();
// })
// resetBtn.addEventListener("click", () => {
//     handleReset();
// })
const btnContainer = document.querySelector(".btnContainer");
let counter = 0;
   btnContainer.addEventListener("click", (e) => {
    let classList = e.target.classList;
    if(classList.contains("increment")){
           counter++;
    }
    else if(classList.contains("decrement")){
          counter--;
    }
    else{
         if(classList.contains("reset")){
              counter = 0;
         }
    }
    handleDisplayValue(counter);
})




function handleDisplayValue () {
    let counterText = document.querySelector(".counter_value");
    if(counter > 0){
         counterText.style.color = "green";
    }
    if(counter < 0){
         counterText.style.color = "red";
    }
    if(counter == 0){
         counterText.style.color = "black";
    }
    counterText.textContent = counter;
}

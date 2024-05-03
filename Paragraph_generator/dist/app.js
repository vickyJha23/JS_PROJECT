console.log("Har Har Mahadev");
var textArray = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "The quick brown fox jumps over the lazy dog.",
    "This is a sample sentence.",
    "Programming is fun and challenging.",
    "Nature is full of wonders.",
    "Innovation drives progress.",
    "Science helps us understand the world.",
    "Art inspires creativity.",
    "Music brings joy to our hearts.",
    "Kindness makes the world a better place.",
    "Education is the key to unlocking potential.",
    "Dream big and work hard to achieve your goals."
];

const inputText = document.querySelector("#Para");
const outputParagraph = document.querySelector("#output_paragraph");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
     e.preventDefault();
     handleGenerationOfParagraph();   
})

function handleGenerationOfParagraph(){
     let input = parseInt(inputText.value);
     if(isNaN(input) || input < 0 || input > 10){
        outputParagraph.innerHTML = `<p class="result text-justify">${textArray[Math.floor(Math.random() * textArray.length)]}</p>`;
     }
     else{
         let slicedTextArr = textArray.slice(0, input);
         let modifiedArray = slicedTextArr.map((text) =>{
             return `<p class="result text-justify">${text}</p>`;
     }).join(" ");
       outputParagraph.innerHTML = modifiedArray;
     }
}
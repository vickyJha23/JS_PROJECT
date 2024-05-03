console.log("Har Har Mahadev");
const form = document.querySelector("form");
const alrt = document.querySelector("#alrt");
const GroceryItems = document.querySelector(".Grocery_items_container");
const groceryList = document.querySelector(".grocery_list");
const groceryInput = document.querySelector("input");
const submitBtn = document.querySelector("#submit_btn");
const clearBtn = document.querySelector("#clear_btn");
let editFlag = false, editID, editElement = "";
clearBtn.addEventListener("click", handleClearItems)
window.addEventListener("DOMContentLoaded", setUp);
form.addEventListener("submit", handleAddItems);
 //handling addition of items
function handleAddItems(e){
     e.preventDefault();
     const inputValue = groceryInput.value;
     const id = new Date().getTime().toString();
     if(inputValue !== "" && !editFlag){
          const div = document.createElement("div");
          const attr = document.createAttribute("data-id");
          attr.value = id;
          div.setAttributeNode(attr);
          div.className += "grocery_item flex justify-between px-[0.5rem] py-[0.25rem] bg-slate-200 rounded my-[0.5rem]";
          div.innerHTML = `
          <p class="item_title tracking-[2px] uppercase">${inputValue}</p>
          <div class="btn-container">
               <button id="edit_btn" class="inline-block transition-all duration-300 hover:text-green-500 text-green-400 mx-[0.20rem]"><i class="fa fa-edit"></i></button>
               <button id="delete_btn" class="inline-block transition-all duration-300 hover:text-red-500 text-red-400 mx-[0.20rem]"><i class="fa fa-trash"></i></button>
          </div>
         `;
          const editBtn = div.querySelector("#edit_btn");
          editBtn.addEventListener("click", handleEditItems)
          const deleteBtn = div.querySelector("#delete_btn");
           deleteBtn.addEventListener("click", handleDeleteItems);
            groceryList.appendChild(div);
            GroceryItems.classList.remove("hidden");
            displayAlert("new item added", "success")
            addToLocalStorage(id, inputValue);
            setBackToDefault();                    
     }
     else if(inputValue !=="" && editFlag){
          editElement.textContent = inputValue;
          displayAlert("Existed item edited", "success");
          editLocalStorage(editID, inputValue);
          setBackToDefault();
     }
     else{
          displayAlert("Please enter some item", "danger");
     }
}
// handling alert 
function displayAlert(message, alert){
    alrt.textContent = message;
    alrt.classList.add(alert);
    setTimeout(() =>{
        alrt.textContent = "";
        alrt.classList.remove(alert);
    }, 1000)    
}
// handle clear all items
function handleClearItems() {
    const items = document.querySelectorAll(".grocery_item");
    if(items.length > 0){
          items.forEach((item) => {
                groceryList.removeChild(item);
          })
          GroceryItems.classList.add("hidden");
          displayAlert("All items deleted", "danger");
     }
}
function handleEditItems(e){
      editElement =  e.target.parentElement.parentElement.previousElementSibling;
      groceryInput.value = editElement.textContent;
      editFlag = true;
      editID = e.currentTarget.parentElement.parentElement.dataset.id;
      submitBtn.textContent = "Edit";
}
function handleDeleteItems(e){
     const itemToDelete = e.target.parentElement.parentElement.parentElement;
     const id =  itemToDelete.dataset.id;
     groceryList.removeChild(itemToDelete);
     // if there is not items in the grocery container...
     if(groceryList.children.length === 0){
          GroceryItems.classList.add("hidden");
     }
     displayAlert("Item deleted", "danger");
     removedFromLocalStorage(id)
     setBackToDefault();

}
function setBackToDefault() {
     groceryInput.value = "";
     editFlag = false;
     submitBtn.textContent = "+Add";
     editElement = "";
}   
// ****************** Local Storage *********************
function addToLocalStorage(id, value){
    let grocery = {id, value};
    const items = getLocalStorage();
    items.push(grocery);
    console.log(items);
    localStorage.setItem("groceryData", JSON.stringify(items));
}
function getLocalStorage(){
  return (localStorage.getItem("groceryData")) ? JSON.parse(localStorage.getItem("groceryData")) : [];   
}
function removedFromLocalStorage(id){
     let items = getLocalStorage();
     items = items.filter((item) => {
           if(item.id !== id){
              return item;
           }
     })
     localStorage.setItem("groceryData", JSON.stringify(items));
}

function editLocalStorage(id, value){
     let items = getLocalStorage();
     items = items.map((item) => {
          if(item.id === id){
             item.value = value;
          }
      });
      localStorage.setItem("groceryData", JSON.stringify(items));
}

function setUp(){
    let items = getLocalStorage();
    if(items.length > 0){
         items.forEach((item) => {
             generateHTML(item.id, item.value)
         })
    }
}
function generateHTML(id, value){
   const div = document.createElement("div");
          const attr = document.createAttribute("data-id");
          attr.value = id;
          div.setAttributeNode(attr);
          div.className += "grocery_item flex justify-between px-[0.5rem] py-[0.25rem] bg-slate-200 rounded my-[0.5rem]";
          div.innerHTML = `
          <p class="item_title tracking-[2px] uppercase">${value}</p>
          <div class="btn-container">
               <button id="edit_btn" class="inline-block transition-all duration-300 hover:text-green-500 text-green-400 mx-[0.20rem]"><i class="fa fa-edit"></i></button>
               <button id="delete_btn" class="inline-block transition-all duration-300 hover:text-red-500 text-red-400 mx-[0.20rem]"><i class="fa fa-trash"></i></button>
          </div>
         `;
          const editBtn = div.querySelector("#edit_btn");
          editBtn.addEventListener("click", handleEditItems)
          const deleteBtn = div.querySelector("#delete_btn");
           deleteBtn.addEventListener("click", handleDeleteItems);
            groceryList.appendChild(div);
            GroceryItems.classList.remove("hidden");
}

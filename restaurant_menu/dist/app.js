console.log("Har Har Mahadev");
const restaurantMenu = [
    {
      id: 1,
      title: "Egg Benedict",
      category: "Breakfast",
      price: 9.99,
      img:`https://www.allrecipes.com/thmb/QVMaPhXnj1HQ70C7Ka9WYtuipHg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/17205-eggs-benedict-DDMFS-4x3-a0042d5ae1da485fac3f468654187db0.jpg`,
      desc: "Classic breakfast dish consisting of poached eggs, Canadian bacon, and hollandaise sauce on an English muffin."
    },
    {
      id: 2,
      title: "Pancakes",
      category: "Breakfast",
      price: 7.99,
      img:`https://kitchenfunwithmy3sons.com/wp-content/uploads/2022/06/fluffy-pancakes-feature.jpg`,
      desc: "Fluffy pancakes served with butter and maple syrup."
    },
    {
      id: 3,
      title: "Omelette",
      category: "Breakfast",
      price: 8.99,
      img:`https://www.kathysvegankitchen.com/wp-content/uploads/2022/09/Just-Egg-Omelette-500x375.jpg`,
      desc: "Customizable omelette with your choice of fillings such as cheese, vegetables, and ham."
    },
    {
      id: 4,
      title: "Classic Burger",
      category: "Lunch",
      price: 11.99,
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLGCqPQxPxHYRHcPXSvS6bS80_TJK26_X0v08lr7Siw&s`,
      desc: "Juicy beef patty topped with lettuce, tomato, onion, and pickles on a sesame seed bun."
    },
    {
      id: 5,
      title: "Caesar Salad",
      category: "Lunch",
      price: 10.99,
      img:`https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/1:1/w_2800,h_2800,c_limit/0328-ceasar-salad-lede.jpg`,
      desc: "Fresh romaine lettuce, Parmesan cheese, croutons, and Caesar dressing."
    },
    {
      id: 6,
      title: "Grilled Chicken Sandwich",
      category: "Lunch",
      price: 9.99,
      img:`https://justbakedcake.com/wp-content/uploads/2021/09/Chicken-Grilled-sandwich-1.jpg`,
      desc: "Grilled chicken breast topped with lettuce, tomato, and mayo on a toasted bun."
    },
    {
      id: 7,
      title: "Steak",
      category: "Dinner",
      price: 19.99,
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGka4Vj1Ot6TUUSn7KxWxsnk25rMG4YdN7wp5V_6rNow&s`,
      desc: "Juicy sirloin steak cooked to your liking, served with mashed potatoes and steamed vegetables."
    },
    {
      id: 8,
      title: "Salmon Fillet",
      category: "Dinner",
      price: 16.99,
      img:`https://images.services.kitchenstories.io/iVj59av0wHJY3TWq3Ym32RuJvyg=/3840x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R3022-final-photo-3.jpg`,
      desc: "Grilled salmon fillet seasoned with herbs and lemon, served with rice pilaf and asparagus."
    },
    {
      id: 9,
      title: "Vegetable Stir-Fry",
      category: "Dinner",
      price: 14.99,
      img:`https://hips.hearstapps.com/hmg-prod/images/veggie-stir-fry-1597687367.jpg?crop=0.793xw:0.793xh;0.0619xw,0.0928xh&resize=1200:*`,
      desc: "Assorted vegetables stir-fried in a flavorful sauce, served with steamed rice."
    },
    {
      id: 10,
      title: "Chocolate Milkshake",
      category: "Shakes",
      price: 6.99,
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs97ir-5isd8QxFLoeYe2x2AVsfbj5dF84TNESyhdYzg&s`,
      desc: "Rich and creamy chocolate milkshake topped with whipped cream and a cherry."
    }
    
  ];
  const menuCenter = document.querySelector(".menu-center");
  const btnContainer = document.querySelector(".btn-container");
  window.addEventListener("DOMContentLoaded", () =>{
       handleGenerationOfRestaurantMenu(restaurantMenu);
       handleGenerationOfMenuButtons(restaurantMenu);
       handleFilterProcess();    
  })
  
  function handleGenerationOfRestaurantMenu (menus){
       const menuItems = menus.map((menuItem) => {
          return ` <div class="menu-item grid gap-y-[2rem] gap-x-[1rem] max-w-[25rem] md:max-w-[40rem] md:grid-cols-[225px,1fr] md:gap-x-[1.25rem] md:gap-y-[0]">
          <div class="item_img">
               <img src="${menuItem.img}" alt="()" class="photo w-[100%] object-cover h-[200px] md:h-[175px] border-[0.25rem] border-yellow-600 rounded-[5px]">
          </div>
          <div class="item_description">
               <header class="flex justify-between border-b-[0.05rem] border-dotted border-blue-400 mb-[0.8rem] pb-[0.5rem]">
                    <h4 class="capitalize text-[1.2rem] tracking-[3px]">${menuItem.title}</h4>
                    <h4 class="price tracking-[3px] text-yellow-600">$${menuItem.price}</h4>
               </header>
               <p class="desc text-blue-400">${menuItem.desc}</p>
          </div>
      </div>`
       }).join(" ");
      menuCenter.innerHTML = menuItems
  }
  function handleGenerationOfMenuButtons(menus){
      let categoryButtons = menus.reduce((acc, currItem) => {
           if(!acc.includes(currItem.category)){
                acc.push(currItem.category);
           }
           return acc;
      }, ["all"]);
     categoryButtons = categoryButtons.map((category) => {
         return `<button
         class="filter border-2 border-yellow-600 mx-[0.5rem] capitalize tracking-[3px] rounded px-[0.5rem] py-[0.2rem] text-yellow-600 transition-all duration-300 hover:bg-yellow-600 hover:text-white"
         data-id="${category}">${category}</button>`;
     }).join(" ");
     btnContainer.innerHTML = categoryButtons;  
  }
  function handleFilterProcess(){
     const filterBtns = document.querySelectorAll(".filter");
     filterBtns.forEach((btn) => {
         btn.addEventListener("click", (e) => {
             let category = e.target.dataset.id;
             const categories = restaurantMenu.filter((menuItem) => {
                  if(category === menuItem.category) {
                     return menuItem;
                  }             
             });
             if(category === "all"){
                  handleGenerationOfRestaurantMenu(restaurantMenu);
             }
             else{
                  handleGenerationOfRestaurantMenu(categories);
             }
         })
     })
  }
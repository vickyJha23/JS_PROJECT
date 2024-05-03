const reviews = [{
    name: "John Doe",
    img: "https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.webp?b=1&s=170667a&w=0&k=20&c=-bG-98gM7AR79cs9Fe7UaRGZnENYooOdSkHF5QkZ7xo=",
    designation: "Software Engineer",
    description: "John is a skilled software engineer with expertise in full-stack development.",
    department: "Engineering"
  },
  {
    name: "Emily Smith",
    img: "https://media.istockphoto.com/id/682897825/photo/confident-businesswoman-over-gray-background.webp?b=1&s=170667a&w=0&k=20&c=i4pSGUvhVOXOC1232XjOOf5ebXYRmNKgBSFc4K47i5U=",
    designation: "Marketing Manager",
    description: "Emily leads the marketing team, strategizing and executing marketing campaigns.",
    department: "Marketing"
  },
  {
    name: "Michael Johnson",
    img: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=KDO6yy-rASso-b0tI6Euv2um6GxXJ6QoQr0qioETwJE=",
    designation: "Financial Analyst",
    description: "Michael analyzes financial data to provide insights for decision-making.",
    department: "Finance"
  },
  {
    name: "Samantha Brown",
    img: "https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=_wV5C2C-MufoJNGs4Bu9jdbXXmBHAxKbXzTOY_pwx9c=",
    designation: "HR Specialist",
    description: "Samantha handles recruitment, employee relations, and HR operations.",
    department: "Human Resources"
  },
  {
    name: "David Lee",
    img: "https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.webp?b=1&s=170667a&w=0&k=20&c=7FmalavwUCJL0jiWJXU6YyGkim2oU5F89mglCpUsFto=",
    designation: "Product Manager",
    description: "David oversees the development and launch of new products.",
    department: "Product Management"
  }
];
const developerImg = document.querySelector("#developer_img")
const developerName = document.querySelector("#developer_name");
const developerDesignation = document.querySelector("#developer_designation");
const developerDescription = document.querySelector("#developer_description");
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");
const randomBtn = document.querySelector(".random_btn");

let counter = 0;
window.addEventListener("DOMContentLoaded", handleDisplayReview);
function handleDisplayReview() {

    let reviewObjElement = reviews[counter];
    developerName.textContent = reviewObjElement.name;
    developerImg.src = reviewObjElement.img;
    developerDesignation.textContent = reviewObjElement.designation;
    developerDescription.textContent = reviewObjElement.description;
}
nextBtn.addEventListener("click", () => {
       counter ++;
       if(counter >= reviews.length){
           counter = 0;
       }
       handleDisplayReview(counter)
})
prevBtn.addEventListener("click", () => {
     counter--;
     if(counter < 0){
         counter = reviews.length - 1;
     }    
     handleDisplayReview(counter);
})
randomBtn.addEventListener("click", () => {
     counter = getRandomNumber();    
     handleDisplayReview(counter);
})

function getRandomNumber(){
     return Math.floor(Math.random() * reviews.length);
}
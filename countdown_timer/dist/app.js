// console.log("Har Har Mahadev");
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemember', 'December'];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
const giveAway = document.querySelector(".giveaway");
const timerItems = document.querySelectorAll(".timer> div > span:first-child");
let clear_interval;
console.log(timerItems);
const date = new Date();
const currentYear = date.getFullYear();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentDay = date.getDay();
const futureDate = new Date(currentYear, currentMonth, currentDate + 10, 11, 30, 0);
console.log(futureDate);
const futuredate = futureDate.getDate();
const futureYear = futureDate.getFullYear();
const futureMonth = months[futureDate.getMonth()];
const futureTimeInHour = futureDate.getHours();
const futureTimeInMinutes = futureDate.getMinutes(); 
const futureWeekDay = weekDays[futureDate.getDay()];
const futureTimeStamp = futureDate.getTime();
giveAway.innerHTML = `<b>Giveaway Ends on ${futureWeekDay}, ${futuredate} ${futureMonth} ${futureYear} ${futureTimeInHour}:${futureTimeInMinutes} am</b>`;
function handleRemainingTime(){
     const currentTimeStamp = new Date().getTime();
     const diffInTimeStamp = futureTimeStamp - currentTimeStamp;
     const oneDay = 24 * 60 * 60 * 1000;
     const oneHour = 60 * 60 * 1000;
     const oneMinute = 60 * 1000;
     const remDays = Math.floor(diffInTimeStamp / oneDay);
     const remHours = Math.floor((diffInTimeStamp % oneDay) / oneHour);
     const remMinutes = Math.floor((diffInTimeStamp % oneHour) / oneMinute);
     const remSeconds = Math.floor((diffInTimeStamp % oneMinute) / 1000);
     const remainignTimeArr = [remDays, remHours, remMinutes, remSeconds];
     function format(item){
          if(item < 10){
             return  item = `0${item}`;
          }
          return item
     }
     timerItems.forEach((item, index) => {
         item.innerHTML = format(remainignTimeArr[index]);
     })
     if(diffInTimeStamp <= 0){
            console.log(clear_interval);
            clearInterval(clear_interval);
            giveAway.innerHTML = `<b>Giveaway Ended</b>`;
     }
}
clear_interval = setInterval(handleRemainingTime, 1000);
handleRemainingTime();
console.log(clear_interval);


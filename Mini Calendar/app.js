const monthName = document.getElementById("month-name");

const dayName = document.getElementById("day-name");

const dayNumber = document.getElementById("day-number");

const yearNumber = document.getElementById("year-number");

const date = new Date();
const month = date.getMonth();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());

monthName.innerText = date.toLocaleDateString("en",{
    month:"long"
})
dayName.innerText = date.toLocaleDateString("eng",{
    weekday: "long",
})
dayNumber.innerText = date.getDate();
yearNumber.innerText = date.getFullYear("eng",{
    getFullYear:"long"
})



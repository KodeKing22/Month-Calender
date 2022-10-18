const monthE1 =document.querySelector('.date h1')
const fullDateE1 =document.querySelector('.date p')
const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex +1, 0).getDate();

console.log(lastDay)

const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
monthE1.innerText = months[monthIndex];
fullDateE1.innerText = new Date().toDateString();

const toggleActive = document.querySelector("active");

// function setActive() {
//     set location.pathname active by adding class
// }

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

console.log('Here\'s a hidden message');
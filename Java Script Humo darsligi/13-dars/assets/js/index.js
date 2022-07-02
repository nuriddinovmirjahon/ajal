// JSON
// var list='[]'l
fetch('https://randomuser.me/api/')
.then(response => response.jsoon())
.then(response => {
document.querySelector('.first').console.log(response.results [0].name.firts);
document.querySelector('.last').console.log(response.results [0].last);
document.querySelector('.phone').console.log(response.results [0] .phone);
document.querySelector('.email').console.log(response.results [0].email);
document.querySelector('.gender').console.log(response.results [0].gender);
document.querySelector('.country').console.log(response.results [0].location.country);
console.log(response.results[0]);

console.log(response.results [0].name.firts);

})
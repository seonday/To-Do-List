const date = document.querySelector('h3#date');

function getDate() {

}
date = new Date() 
var week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
var dayOfWeek = week[new Date().getDay()];

function getdate(){
    date.innerText = `${week[new Date().getDay()]}`;
}
getdate()
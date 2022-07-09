const DATE = document.querySelector('h3.date');
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function dayOfWeek() {
    const dates = new Date();
    const year = dates.getFullYear(); // 년도
    const month = dates.getMonth() +1; // 월
    const date = dates.getDate(); // 일
    const day = week[dates.getDay()]; //요일

    console.log(dates);
    console.log(day);
    console.log(year);

    DATE.innerText = `${year} . ${month} . ${date} . ${day}`;
}

dayOfWeek();



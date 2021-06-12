const myClock = document.querySelector("#clock_text"),
    myDate = document.querySelector("#date_text");

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


function getTimeDate(){
    const currentDate = new Date();

    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    const fullYear = currentDate.getFullYear();
    const month = String(currentDate.getMonth()).padStart(2, "0");
    const date = String(currentDate.getDate()).padStart(2, "0");
    const day = currentDate.getDay();

    myClock.innerText = `${hours}:${minutes}:${seconds}`;
    myDate.innerText = `${fullYear}년 ${month}월 ${date}일 [${DAYS[day]}]`;
}

getTimeDate();
setInterval(getTimeDate, 1000);

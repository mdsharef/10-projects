window.onload = () => {
    main()
    setInterval(main, 1000)
}

function main() {
    const daysEI = document.getElementById('days');
    const hoursEI = document.getElementById('hours');
    const minsEI = document.getElementById('mins');
    const secondsEI = document.getElementById('seconds');
    const dayValue = document.getElementById('day-value');

    const newYear = "1 Jan 2023";

    const date = countdown(newYear);

    daysEI.innerHTML = date.days;
    hoursEI.innerHTML = formateTime(date.hours);
    minsEI.innerHTML = formateTime(date.minutes);
    secondsEI.innerHTML = formateTime(date.seconds);
    dayValues(date.days, dayValue)
}

function countdown(newYear) {
    const newYearDate = new Date(newYear);
    const currentYear = new Date();

    const totalSeconds = (newYearDate - currentYear) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    return {
        days,
        hours,
        minutes,
        seconds
    }
}

function formateTime (value) {
    return value < 10 ? '0' + value : value;
}

function dayValues(value, text) {
    value > 1 ? text.innerHTML = "Days" : text.innerHTML = "Day";
}
const timeConversion = (s) => {
    let time = s.slice(8,10);
    let seconds = s.slice(6,8);
    let hours = s.slice(0,2);
    let minutes = s.slice(3,5);

    time === "AM" && hours === "12" ? hours = "00" : hours
    time === "PM" && hours < 12 ? hours = parseInt(hours) + 12 : hours;
 
    return hours + ":" + ":" +minutes + ":" + seconds;
}

console.log(timeConversion("10:45:00PM"));
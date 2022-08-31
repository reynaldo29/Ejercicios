const timeConversion = (s) => {
    const formatTime = s.slice(8,10);
    let hours = Number(s.slice(0,2));
    const minutesAndSeconds = s.slice(2,-2);
    
    formatTime === "AM" && hours === "12" ? hours = "00" : hours
    formatTime === "PM" && hours < 12 ? hours = hours + 12 : hours;
 
    return hours+minutesAndSeconds;
}

console.log(timeConversion("01:05:00PM"));
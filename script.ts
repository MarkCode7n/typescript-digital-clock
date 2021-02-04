(() => {
  const clock_elem = document.querySelector("#clock") !as HTMLDivElement
  setInterval(() => {
    let date: Date = new Date()
    let hour: number | string = date.getHours()
    let minute: number | string = date.getMinutes()
    let second: number | string = date.getSeconds()
    //converting time 
    let formattedTime = covertTime(hour)
    //..
    // adding 0s
    hour = addZero(hour)
    minute = addZero(minute)
    second = addZero(second)
    hour = checkTime(hour)
    //..
    clock_elem.innerHTML = `${hour} : ${minute} : ${second} ${formattedTime}`
  }, 1000)
  const covertTime = (time: number): unknown => {
    let format = `<span class="format">AM</span>`;
    if (time >= 12) format = `<span class="format">PM</span>`;
    return format;
  }
  //formatting time when our time is greater than 12 then we make it toa single number like 1,
  //and when it is 0,our time is = to 12
  const checkTime = (time: any): number | string => {
    time > 12 ? time -= 12 : time
    time === 0 ? time = 12 : time
    return time
  }
  // adding zero(0)  our time: if time is less than 10 i.e (9),then add 0 to our time
  const addZero = (time: number | string): number | string => {
    time < 10 ? time = `0${time}` : time
    return time
  }
})()
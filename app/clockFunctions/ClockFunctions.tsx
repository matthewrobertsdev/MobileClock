const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];


//millitary time with seconds
export function twentyFourHourWithSeconds(date: Date) {
  let minutesString = ''
  let secondsString = ''
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let hours = date.getHours()
  if (minutes < 10) {
    minutesString = `0${minutes}`
  } else {
    minutesString = `${minutes}`
  }
  if (seconds < 10) {
    secondsString = `0${seconds}`
  } else {
    secondsString = `${seconds}`
  }
  return `${hours}:${minutesString}:${secondsString}`;
}

//12 hour time with seconds
export function twelveHourWithSeconds(date: Date) {
  let minutesString = ''
  let secondsString = ''
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let hours = date.getHours()
  if (minutes < 10) {
    minutesString = `0${minutes}`
  } else {
    minutesString = `${minutes}`
  }
  if (seconds < 10) {
    secondsString = `0${seconds}`
  } else {
    secondsString = `${seconds}`
  }
  if (hours>12) {
    hours-=12
  } else if (hours===0) {
    hours=12
  }
  return `${hours}:${minutesString}:${secondsString}`;
}

//millitary time with no seconds
export function twentyFourHourNoSeconds(date: Date) {
  let minutesString = ''
  let minutes = date.getMinutes()
  let hours = date.getHours()
  if (minutes < 10) {
    minutesString = `0${minutes}`
  } else {
    minutesString = `${minutes}`
  }
  return `${hours}:${minutesString}`;
}

//12 hour time with no seconds
export function twelveHourNoSeconds(date: Date) {
  let minutesString = ''
  let minutes = date.getMinutes()
  let hours = date.getHours()
  if (minutes < 10) {
    minutesString = `0${minutes}`
  } else {
    minutesString = `${minutes}`
  }
  if (hours>12) {
    hours-=12
  } else if (hours===0) {
    hours=12
  }
  return `${hours}:${minutesString}`;
}

//day of week with month and day
export function getWrittenDateString(date: Date) {
  //return 'Wednesday, September 31'
  return `${daysOfWeek[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
}

export function getDayOfWeekStringOnly(date: Date) {
  return `${daysOfWeek[date.getDay()]}`
}

export function getWrittenDateStingOnly(date: Date) {
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

export function getNumericalDateStringOnly(date: Date) {
  return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
}

export function getNumericalDateString(date: Date) {
  //return 'Wednesday, September 31'
  return `${daysOfWeek[date.getDay()]}, ${[date.getMonth()+1]}/${date.getDate()}`
}
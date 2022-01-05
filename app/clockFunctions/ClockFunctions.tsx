const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];


//miltary time with seconds
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

  //miltary time with no seconds
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

  //day of week with month and day
  export function getDateStringFromDate(date: Date) {
    return `${daysOfWeek[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`
  }
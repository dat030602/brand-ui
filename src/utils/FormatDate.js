function FormatDate(dateString, time = false, timeInput = false) {
  console.log(dateString);
  var date = new Date(dateString);
  var day = date.getUTCDate();
  if (day < 10) day = `0${day}`;

  var month = date.getUTCMonth() + 1;
  if (month < 10) month = `0${month}`;

  var year = date.getFullYear();
  if (time) {
    var hour = date.getUTCHours();
    if (hour < 10) hour = `0${hour}`;
    var min = date.getUTCMinutes();
    if (min < 10) min = `0${min}`;

    if (!timeInput) {
      var sec = date.getUTCSeconds();
      if (sec < 10) sec = `0${sec}`;
      return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
    } else {
      return `${year}-${month}-${day}T${hour}:${min}`;
    }
  }

  return `${year}-${month}-${day}`;
}

function FormatDateAndTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getFullYear();

  const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;
  const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;

  return `${formattedTime} ${formattedDate}`;
}

function msToTime(ms) {
  var hours = ms / (1000 * 60 * 60);
  var absoluteHours = Math.floor(hours);
  var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;
  var day = parseInt((h / 24).toFixed(0));
  h = day % 24;

  //Get remainder from hours and convert to minutes
  var minutes = (hours - absoluteHours) * 60;
  var absoluteMinutes = Math.floor(minutes);
  var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

  //Get remainder from minutes and convert to seconds
  var seconds = (minutes - absoluteMinutes) * 60;
  var absoluteSeconds = Math.floor(seconds);
  var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

  return {
    day,
    hour: h,
    min: m,
    sec: s,
  };
}

function TimeRemaining(dateString) {
  var date = new Date(dateString).getTime();
  var currentTime = new Date().getTime();
  return msToTime(date - currentTime);
}

function dateDifference(startDate) {
  // Convert the input string to a Date object
  const startDateObj = new Date(startDate);

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - startDateObj;

  // Calculate the number of milliseconds in a day
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  const daysDifference = Math.floor(timeDifference / millisecondsPerDay);

  return daysDifference;
}
export { FormatDate, FormatDateAndTime, TimeRemaining, dateDifference };

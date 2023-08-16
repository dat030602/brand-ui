function FormatDate(dateString, time = false, timeInput = false) {
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

export { FormatDate, FormatDateAndTime };

function FormatDate(datString) {
  var date = new Date(datString);
  var day = date.getDate();
  if (day < 10) day = `0${day}`;

  var month = date.getMonth() + 1;
  if (month < 10) month = `0${month}`;

  var year = date.getFullYear();

  return `${year}-${month}-${day}`;
}
export { FormatDate };

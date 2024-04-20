function main() {
  var year = 1986;
  var month = 10;
  var day = 28;
   
  console.log(getWeekDay(year, month, day)); 
}

function getWeekDay(year, month, day) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var d = new Date(year, month, day);
  let weekDayIndex = d.getDay();
  return (names[weekDayIndex]);

   
}

main()
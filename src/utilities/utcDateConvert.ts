//add 0 if for ex date is 1 -> 01
function checkNulls(data: number) {
  if (Number(data) < 10) return "0" + data.toString();
  else return data.toString();
}

//give real date from utc string
export function utcTimeToDate(utcTime: string) {
  const dateFromUtcString = utcTime.substring(6, 19);
  const dateFromUtc = new Date(Number(dateFromUtcString));
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const year = dateFromUtc.getUTCFullYear();
  const month = months[dateFromUtc.getMonth()];
  const day = dateFromUtc.getDate();
  const dayCorrected = checkNulls(day);
  const hour = dateFromUtc.getHours();
  let hourCorrected = checkNulls(hour);
  let min = dateFromUtc.getMinutes();
  let minCorrected = checkNulls(min);
  let sec = dateFromUtc.getSeconds();
  let secCorrected = checkNulls(sec);
  const time = year + " " + month + " " + dayCorrected + " " + hourCorrected + ":" + minCorrected + ":" + secCorrected;
  return time;
}





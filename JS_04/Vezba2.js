function calculateTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  console.log(hours);
  return hours;
}
calculateTime(7200);

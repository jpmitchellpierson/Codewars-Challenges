// *** Human Readable Time *** //
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
function humanReadable(seconds) {
  let minutes = seconds / 60;
  let hours = Math.floor(minutes / 60);
  let mins = Math.floor(minutes % 60);
  let secs = Math.floor(seconds % 60);
  console.log(hours);
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (mins < 10) {
    mins = '0' + mins;
  }
  if (secs < 10) {
    secs = '0' + secs;
  }
  return hours + ':' + mins + ':' + secs;
}
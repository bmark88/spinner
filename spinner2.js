let delay = 100;
const spinnerArray = ['\r|   ',
'\r/   ',
'\r-   ',
'\r\\   ',
'\r|   ',
'\r/   ',
'\r-   ',
'\r\\   ',
'\r|   '];

process.stdout.write('hello from spinner1.js... \rheyyy\n');

for (let spinnerPosition of spinnerArray) {
  setTimeout(() => {
    process.stdout.write(spinnerPosition)
  }, delay += 200)
}


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1900);
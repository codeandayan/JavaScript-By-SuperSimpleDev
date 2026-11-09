import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
const today = dayjs();
console.log(today.format('dddd'));
const thirtyDaysBefore = today.subtract(30, 'days');
const thirtyDayBeforerString = thirtyDaysBefore.format('dddd, MMMM D');
console.log(thirtyDayBeforerString);

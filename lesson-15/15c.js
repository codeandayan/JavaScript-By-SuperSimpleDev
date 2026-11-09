import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
const today = dayjs();
const thirtyDaysBefore = today.subtract(30, 'days');
const thirtyDayBeforerString = thirtyDaysBefore.format('MMMM D');
console.log(thirtyDayBeforerString);

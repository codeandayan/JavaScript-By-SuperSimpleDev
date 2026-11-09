import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
const today = dayjs();
const thirtyDaysLater = today.add(30, 'days');
const thirtyDaysLaterString = thirtyDaysLater.format('MMMM D');
console.log(thirtyDaysLaterString);

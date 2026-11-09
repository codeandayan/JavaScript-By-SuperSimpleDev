import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
const today = dayjs();
const fiveDaysLater = today.add(5, 'days');
const fiveDaysLaterString = fiveDaysLater.format('MMMM D');
console.log(fiveDaysLaterString);

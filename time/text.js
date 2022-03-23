// const time = require('./dateFormat.js');

// const dt = new Date();

// const timedt =  time.dateFormat(dt);
// console.log(timedt);

const moment = require('moment');

const dt =  moment().format('YYYY-MM-DD HH:mm:ss');

console.log(dt);
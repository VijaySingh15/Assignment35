const now= new Date();
let YYYY=now.getFullYear();
let MM=now.getMonth();
let DD=now.getDate();
let HH=now.getHours();
let mm=now.getMinutes();
console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`);
console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}`);
console.log(`${DD}/${MM}/${YYYY} ${HH}:${mm}`);
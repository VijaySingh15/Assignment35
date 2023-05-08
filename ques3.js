const ages=[19,22,19,24,20,25,26,24,25,24];
//sort and find min and max
console.log(ages.sort());
const max=Math.max(...ages);
const min=Math.min(...ages);
console.log(min);
console.log(max);
//find median age
console.log(ages[ages.length/2]);
//find average age
let sum=0;
for(let i=0;i<ages.length;i=i+1){
    sum=sum+ages[i];
}
const medianAge=sum/ages.length;
console.log(medianAge);
//find range
let range = max-min;
console.log(range);
//compare value using abs fun
let fun = Math.abs(min-medianAge) === Math.abs(max-medianAge);
console.log(fun);


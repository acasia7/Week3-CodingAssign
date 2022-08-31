let ages = [3,9,23,64,2,8,28,93];

console.log(ages[ages.length -1] - ages[0])

ages.push(45); 

console.log(ages[ages.length -1] - ages[0]);


let sum = 0;
for (let i = 0; i < ages.length; i++) {
   sum += ages[i]; //adds each number in array to the sum
}

console.log(sum/ages.length); 

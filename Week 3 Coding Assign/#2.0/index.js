let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLetters = 0;

for (let i = 0; i < names.length; i++) { //totalLetters variable will add up the length of each name
  totalLetters+= names[i].length;
}

console.log(totalLetters / names.length);

let newName = '';
for (let i = 0; i <names.length; i++) { //newName variable will add a space in between each element in array
    newName+= names[i] + ' ';
}
console.log(newName);



let nameLengths = new Array (); //create new array nameLengths

for (let i = 0; i < names.length; i++) { //loop to iterate over names array
    nameLengths.push(names[i].length); //add length of each name to nameLengths array
}

console.log(nameLengths); 

sum = 0;
for (let i = 0; i < nameLengths.length; i++) { //for loop to iterate over nameLengths array
    sum += nameLengths[i]; //add all elements of nameLengths array to the sum
}

console.log(sum);



function firstFunction(word, n) { //function takes word and n as parameters
    return word.repeat(n); //return word n number of times
}
console.log(firstFunction('Hello', 3));

function fullName (firstName, lastName) { //function takes firstName and lastName as parameters
    return firstName + ' ' + lastName //return a first name + last name, separated by a space
}
console.log(fullName('Tom', 'Sawyer'));


function myNumbers(n) { //function containing an array of numbers (n)
    for (let i = 0; i < array.length; i++) { //for loop to iterate all elements in array 
        if ((sum += array[i]) > 100) { //calculate the sum of all elements in array and return true if > 100
            return true; 
        }
    }
};
console.log(myNumbers);

function myNumbers (n) { //function takes an array of numbers (n)
    for (let i = 0; i < array.length; i++) { //for loop to iterate through all elements in array
        sum += array[i]; //calculate sum
        let avg = sum / array.length; //use sum to calculate average of array
        return avg 
    }
}

function myNumbers(array1, array2) {  //function takes two arrays
    for (let i = 0; i < array1.length; i++) { //for loop to iterate through array1
        sum += array1[i]; 
        let avg1 = sum / array.length; //calculate average of array1
    }
    for (let i = 0; i < array2.length; i++) { //for loop to iterate through array2
        sum+= array2[i];
        let avg2 = sum /array.length //calculate average of array2
    }   
            if(avg1 > avg2) { //if average of array1 > average of array2, return true
                return true;
    }
}

function willBuyDrink(isHotOutside, moneyInPocket) { //function willBuyDrink takes isHotOutside & moneyInPocket as parameters
    if (isHotoutside == true)  //if isHotoutside is true & moneyInPocket is > 10.50, return true
        if (moneyInPocket > 10.50) {
            return true
        }
};

function toCelsius(fahrenheit) { //plug in any degree in fahrenheit and it will convert to celsius
    return (5/9) * (fahrenheit-32);
}
console.log(toCelsius(70));
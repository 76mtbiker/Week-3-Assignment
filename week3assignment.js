// All questions should be printed to your Browser’s console using console.log()

// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
 let ages = [3,9,23,64,2,8,28,93]; //* I created a array called ages, and the values, or elements are inside the []

// 1a.programmatically subtract the value of the first element in the array from the value in the last element of the array.   
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] – ages[0] is not allowed!
const ages = [17, 20, 11, 17, 43, 40, 89];// Define an array called "ages", containing a list of ages

const firstAge = ages[0]; //How to get the value of first age Element, by accessing ages [0], and storing it in the variable "firstAge"
const lastAge = ages[ages.length - 1];//How to get value of the last element age, by accessing{ages.length -1}, and store it in th variable.

const result = lastAge - firstAge;//Now Subtract the value of "firstAge" from "last age", now store this in the variable called 'result'.

console.log(result); // The result of this code is 72, since last element age is 89 - 17 which is the first element.


// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
let ages = [17, 20, 11, 17,43,40,89];// Taking the other array from above
let newAge = 40;//creating new age be prepared to be pushed into the array
ages.push(newAge);//The push method will push this new age at the end of the array.
console.log(ages);//This will create the answer, with 40 at the end of the array.
// 1c. Use a loop to iterate through the array and calculate the average age. 
let ages = [17, 20, 11, 17, 43,40,89];//This is defining the array of ages from above
let sum = 0;//this is initializing a variable called sum to 0.
for (let i = 0; i < ages.length; i++) { // This is a for loop, to iterate through each element ages array, adding it to SUM Variable.
  sum += ages[i];
}
let average = sum / ages.length;//After the loop is done, calculate the average age dividing the Sum Variable by length of the "ages array"
console.log("The average age is: " + average);//Calculating the solution





// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];//created an array calling it names, with their names in it as elements.
// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
let names = ["Sam", "Tommy", "Tim", "Sally","Buck","Bob"];
let sum = 0;//initializing variable to 0
for (let i = 0; i < names.length; i++) {//using a For loop to iterate each element in the array by adding the length of the name to the "Sum" variable.
  sum += names[i].length;
}
let average = sum / names.length;//After loop is complete calculate the average number of letters each name by dividing the sum variable by the length of the 'names'array
console.log("The average number of letters each name is: " + average);
// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let names = ["Sam", "Tommy", "Tim", "Sally","Buck","Bob"];
let concatenated = "";// This is initializing a variable called concatenated, to an empty string
for (let i = 0; i < names.length; i++) { // Use a for loop, iterate throuh each element, in names array, concatenate it to the concatenated variable with space.
  concatenated += names[i] + " ";
}
console.log("The concatenated names are: " + concatenated.trim());//concatenated is joining strings together in javascript.

// 3.  How do you access the last element of any array?
let myArray = [1, 2, 3, 4, 5];//created a array named myArray
let lastElement = myArray[myArray.length - 1];//The lastElement variable is accessed by using index 'myArray.length -1, which is assigned to lastElement variable
console.log(lastElement); // The console.log function will display the last element in the array.





// 4.  How do you access the first element of any array?
let myArray = [5, 12, 3, 7, 9];//Created an array with five elements
let firstElement = myArray[0];//Assigned the firsElement as the variable, using the index 0.
console.log(firstElement); // Output: 5


// 5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
const names = ["Sam", "Tommy", "Tim", "Sally","Buck","Bob"] {// this is creating a new array
const nameLengths = [];// NameLengths is an empty array to store the length of each name.

for (let i = 0; i < names.length: i++) {// A for loop used to iterate over each time in the  'names' array.
  nameLengths.push(names[i].length);//for every name use the push method to add its length to the nameslength array.
    }
console.log(nameLengths);//This function will print the correct values in the array  now

}

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
const nameLengths = [3, 5, 3, 5, 4,3];//Created an array with elements inside
let sum = 0;//Sum is the variable, its inititial value is set to 0

for (let i = 0; i < nameLengths.length; i++) {//For Loop, to iterate over ech element in 'nameslengths' array. FOr each element we add its value toe the 'Sum' varible using the '+=' operator.
  sum += nameLengths[i];//FOr each element we add its value toe the 'Sum' varible using the '+=' operator.
  
}
console.log(sum);


// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function repeatWord(word,n) {//defined function calleed repeatWord, with two paramaters "word" and 'n'
    let result = "";//inside the function, created adn empty string called 'result' to store the concatenated words.
    for (let i = 0; i < n; i++) {//for loop  to iterate 'n' times, and for each iteration, concatenate the 'word' to the 'result' using the  += operator.
        result += word;
    }
    return result;//
    }
    console.log(repeatWord("Hello", 3)); // Output: "HelloHelloHello"




// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.


// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(getFullName("Jerry", "Cribbins")); // Output: "Jerry Cribbins"

// 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {//create calculateAverage for function, with numbers as paramaters
  let sum = 0;//inside the function create a variable called "sum" set its initial value to 0

  for (let i = 0; i < numbers.length; i++) {//for loop to iterate over each element in 'numbers' array, combining each element value to the Sum Variable using the '+=' operator
    sum += numbers[i];
  }

  return sum / numbers.length;//then Divide the sum variable by the length of the numbers array to get the average value. Then return the average value as the result of the function. 
}

console.log(calculateAverage([10, 3, 5, 7])); //output 6.25 






// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compareAverages(array1, array2) {//Created function named compareAverages, with array 1 and array 2 in the paramaters
  let sum1 = 0;//inside the function create two variables called sum 1 and sum 2 and set their initial values to 0.
  let sum2 = 0;

  for (let i = 0; i < array1.length; i++) {// using two for loops to itirate over each array, each for loop itterating for array 1 and array 2 only.
    sum1 += array1[i];
  }

  for (let i = 0; i < array2.length; i++) {//the for loops are adding each elements value to the corresponding sum variable using the += operator.
    sum2 += array2[i];
  }

  const avg1 = sum1 / array1.length;//after loops done, calculate the average of the elements in each array by dividing the corresonding sum variable by the length of the array.
  const avg2 = sum2 / array2.length;

  return avg1 > avg2;//This is how comparing the two averages is done
}

console.log(compareAverages([22, 10, 12, 8], [6, 3, 45, 77])); // Output: true
console.log(compareAverages([1, 3, 5, 7], [10, 4, 12, 45])); // Output: false


// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


function willBuyDrink(isHotOutside, moneyInPocket) { //creating a function that takes two arguments, "isHotOutside" which is boolean value, and "moneyInPocket", being a number.

  if (isHotOutside && moneyInPocket > 10.50) {//Creted a If statement, saying if isHotOutside && moneyInPocket is less than 10.50 it be true.
    return true;
  } else {
    return false;
  }
}

console.log(willBuyDrink(true, 15.0)); // Output: true
console.log(willBuyDrink(false, 5.0)); // Output: false



    //13.  Create a function of your own that solves a problem. 

// In comments, write what the function does and why you created it.

function achieveCertificate(isMyFullTimeJob, hoursPerWeek) { //I named the function achieveCertificate, because i need to put in this much time or more for me to make it through this program.
  return isMyFullTimeJob && hoursPerWeek < 40.0;             // the paramaters is the calculations need to determine whether or not this task is accomplished. If my full time  job is greater then 40 hours per week, i will achieve certificate. I created it because i need to do this program as a full time job in order for me to make it through it.
}
console.log(achieveCertificate(true, 40.0));
console.log(achieveCertificate(false, 39.0));




// Video Steps:
// function findMax(numbersArray){

//     let max = numbersArray[0]
    
//     for(let i=1; i<numbersArray.length; i++){
//         if(numbersArray[i]>max){
//             max = numbersArray[i]
//         }
//     }
//     return max
// }


// const numbersArray = [3, 7, 1, 12, 5];
// const output = findMax(numbersArray)
// console.log(output)

// // Implement a function called reverseString that takes a string as input and returns the reversed string.

// function reversed_str(name){

//     return name.split('').reverse().join('');
// }

// let name = "Raju bale"
// let output = reversed_str(name)
// console.log(output)

// Create an object called person with properties name, age, and gender. Write a function called printPerson that takes the person object as input and prints their details.


// function printPerson(person){
//     return person
// }

// const person ={
//     name:'Raju',
//     age:25,
//     gender:"Male"
// }

// const output=printPerson(person)
// console.log(output)

// Develop a JavaScript function called countVowels that takes a string as input and returns the number of vowels in the string.

// function countVowels(word){

//     let vowles =["a", "e", "i", 'o','u']

//     let count = 0
//     const lowercasedString = word.toLowerCase();
//     for (let s of lowercasedString){
//         if(vowles.includes(s)){
//             count ++
//         }
//     }
//     return count
// }

// const str="Develop"
// const output= countVowels(str)
// console.log(output)

// Implement a function called reverseArray that takes an array as input and returns a new array with the elements reversed. (Example: Input: [1, 2, 3], Output: [3, 2, 1])

// const arr = [1,2,3]
// console.log(arr.reverse())


// Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome, false otherwise.


function palindrome(word){

let reversed_word = ''
for(let i =word.length-1; i>=0; i--){
    reversed_word += word[i]
}
return reversed_word === word
}

const word = 'madam'
const output = palindrome(word)
console.log(output)


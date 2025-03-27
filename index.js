//1.Find the last element of the following arrays. arr1 = [3,7,34,90,12] arr2 = [true, "green", "where", 12, 56]

const arr1 =[3,7,34,90,12];
console.log(arr1[arr1.length -1]);

const arr2 = [true, "green", "where", 12, 56];
console.log(arr2[arr2.length -1]);

//2.Write a JS program that will join the following array elements into a string, myPets = ["Cow", "Bird", "Snake", "Dog"]

const myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join(" "));

//3.Write a JS script to sort the following array to items. var arr3 = [-5,9,5,3,2,-3,6,8,4,1]

var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
console.log(arr3.sort());

//4.Write a program to remove duplicates from the following array. 
// Console the array without duplicates and console another array that only contains the duplicates.

let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let arr6 = arr.filter((item, index) => arr.indexOf(item) === index);
let arr7 = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(arr6);
console.log(arr7);

//5.Write a JS script to search for the following word in the array "food" if the word is present, return
//it else return "the search wird was not found"

let arr5 = ["the", "way", "x", 4];
let searchWord = "food";
console.log(arr5.includes(searchWord)? searchWord: "the search word was not found");

//6.Write a JS script to sort the following string: let word = "renniw"

let word = "renniw";
let newWord = word.split('').sort().join('');
console.log(newWord);

//7.Using an array of fruits with length 10, insert 'Tomato' at the 5th index

let fruits = ["Apple", "Banana", "Guava", "Pawpaw", "Grapes", "Avocado", "Pear", "strawberry", "Peaches", "Pineapple"];
let newFruits = fruits.splice(4, 0, 'Tomato');
console.log(newFruits);






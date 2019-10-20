console.log("Hello world");

// Algorithm 1 (approximately 10 minutes needed)
// 1)Take a string from the user as input and store it in a variable (givenString).
// 2)Reverse the given string and store it in another variable (reversedString).
// 3)Check if the above two strings are equivalent. 
// If they are equivalent display a message “Given string is a palindrome” otherwise display a message “Given strings are not palindrome. 
// You may also display the values of both the strings givenString and reversedString.

function isPalindrome() {
    var givenString =  (prompt('Enter word to check is it polindrome or not')).toLowerCase();  
    var reversedWord = givenString.split('').reverse().join('');
    console.log(reversedWord);
    if (givenString === reversedWord) {
        document.getElementById('result1').innerHTML += "Given string " + givenString + " is a palindrome";
    }
    else {
        document.getElementById('result1').innerHTML += "Given string " + givenString + " is not palindrome";
    }
}

// Algorithm 2 (approximately 10 minutes needed)
// 1)Take a number from the user as input and store it in a variable (x).
// 2)Check if the given number is even number or odd number and display the relevant message to the user as output.

function isEvenOrOdd() {
    var x = parseInt(prompt("Enter any number to check if it\'s a odd or even"));
    console.log(x);
    if (x % 2 > 0) {
        document.getElementById('result2').innerHTML += "Given number " + x + " is Odd" + "</br>";
    }
    if (x % 2 === 0) {
        document.getElementById('result2').innerHTML += "Given number " + x + " is Even" + "</br>";
    }
}

// Algorithm 3 (approximately 10 minutes needed)1)Store the following sentence in a variable (givenSentence).
// “The good news is that everyone makes mistakes. 
// All of the mistakes you make, have been made by others who started off just like you.”
// 2)Replace the word mistakes with bugs and store it in a variable (replacedSentence).
// 3)Output the replacedSentence.

function replaceWord() {
    var givenSentence = "The good news is that everyone makes mistakes. All of the mistakes you make, have been made by others who started off just like you.";
    
    var arrayWords = givenSentence.split(" ");
    
    var newArrayWords = [];
    for (var i = 0; i < arrayWords.length; i++) {
        if (arrayWords[i] === "mistakes") {
                arrayWords[i] = "bugs";
        }
        else if (arrayWords[i] === "Mistakes") {
            arrayWords[i] = "Bugs";
        }
        if (arrayWords[i] === "mistakes.") {
            arrayWords[i] = "bugs.";
        }
        newArrayWords.push(arrayWords[i]);
    }
    console.log(newArrayWords);
    var replacedSentence = newArrayWords.join(' ');
    document.getElementById('result4').innerHTML += "Here is the new sentence: " +  replacedSentence;
    console.log(replacedSentence);
}


// Algorithm 4 (approximately 20 minutes needed)
// 1)Create 4 buttons for add to, delete from, search in and sort an array.
// 2)Create a text box to read a string value from the user.
// 3)Store your favourite foods or cars or dogs in an array (you can one choose from foods, cars and dogs). 
// The array must contain 3 elements initially. Example: var fruits = {“Apple”, “Orange”, “Kiwi”};
// 4)Write reusable code for each operation mentioned in 
// 1) to add a new element to the array, to delete an element from the array, 
// tosearch a given element in the array and to sort the elements in descending order and display it to the user. 
// For all the operations provide meaningful messages whether succeeded or failed, and what is the output if succeeded and reason why it failed if known


var fruits = ["orange", "mandarin", "pineapple"];

document.getElementById("output").innerHTML = "Fruits: " + fruits;

function add () {
    var input = (document.getElementById("input").value).toLowerCase();
    fruits.push(input);
    document.getElementById("output").innerHTML = "Fruits: " + fruits;
    return fruits;
}

function removeFruit() {
    var input = (document.getElementById("input").value).toLowerCase();
    for (var i = 0; i < fruits.length; i++) {
        if(input === fruits[i]) {
            var index = i;
           fruits.splice(index,1);
        }
        document.getElementById("output").innerHTML = "Here is the array of fruits after you removed " + input + ": " + fruits;
    }
    return fruits;
}

function searchFruitIndexOf() {
    var input = (document.getElementById("input").value).toLowerCase();
    //indexOf will return index if element is found and will return -1 if element not found
    var index = fruits.indexOf(input);
    if (index < 0 ) {
        document.getElementById("output").innerHTML = input + " is not found in the list";
    }
    else {
        document.getElementById("output").innerHTML = input + " is found in the list";
    }
}

function searchFruit() {
    var input = (document.getElementById("input").value).toLowerCase();
    var result = input + " is not found in the list";
    
    for (var i = 0; i < fruits.length; i++) {
        if(input === fruits[i]) {
            result = input + " is found in the list";
            break;
        }
    }
    
    document.getElementById("output").innerHTML = result;
    return fruits;
}

function sortArray() {
    var sortedFruits = fruits.sort();
    document.getElementById("output").innerHTML = "Here is the sorted array: " + sortedFruits;
    return sortedFruits;
}

function clear() {
    document.getElementById("input").value = "";
}

document.getElementById("add").addEventListener("click", add);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("remove").addEventListener("click", removeFruit);
document.getElementById("search").addEventListener("click", searchFruit);
document.getElementById("searchTwo").addEventListener("click", searchFruitIndexOf);
document.getElementById("sort").addEventListener("click", sortArray);


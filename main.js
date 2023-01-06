//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
  "I am a cool web developer",
];

export function search() {
  //inputValue is the variable that contains the search string
  const inputValue = document.getElementById("search-input").value.toLowerCase();
  
  //Write your code here for the search function

  return newsList.filter(function (element) { //Filter the element that matches the condition given by the indexOf and return it to newsList.
    //The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
    //The filter() method creates a new array filled with elements that pass a test provided by a function.
    //The filter() method does not execute the function for empty elements.
    //The filter() method does not change the original array.

    return element.toLowerCase().indexOf(inputValue) > -1;
    //Finds the inputValue in each element using indexOf to search the index of each elemens starting from zero position.
    
    //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    //The indexOf() method returns the position of the first occurrence of a value in a string.
    //The indexOf() method returns -1 if the value is not found.
    //The indexOf() method is case sensitive.
  })
}

export function sort(type) {
  if (type == "ascending") {
    //Write your code here for sorting (ascending)
    newsList.sort();
  } else {
    //Write your code here for sorting (descending)
    newsList.sort();
    newsList.reverse();
  }

  return newsList;
}

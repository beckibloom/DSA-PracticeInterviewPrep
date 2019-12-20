// Given a document, implement an algorithm to count the number of word occurrences.
// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

function wordCount(string) {
  // remove punctuation here
  const words = string.toLowerCase().split(' ');
  //create an object that will hold the key/value pair for each word/how many times it appears
  const wordsObj = {};
  // iterate through the array and increase the count for each word as you go
  for (let i = 0; i < words.length; i++) {
    if (!wordsObj[word]) {
      wordsObj[word] = 1;
    } else {
      wordsObj[word]++
    }
  };
  const keys = Object.keys(wordsObj);
  // iterate through the keys to make the string
  let newString = '';
  for (let i = 0; i<keys.length; i++) {
    if (newString.lingth === 0) {
      newString = newString + `${keys[i]} = ${wordsObj[keys[i]]}`
    } else {
      newString = newString + `, ${keys[i]} = ${wordsObj[keys[i]]}`
    }
  };
  //then return the string
  return newString;
}
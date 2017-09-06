function countLetters(sentence) {

  var letterCount = {};


  var characterArray = sentence.split(" ");
  sentence = characterArray.join("");

  for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    var letterFound = false;
    for (var key in letterCount) {
      if (letter == key) {
        letterCount[key] += 1;
        letterFound = true;
      }
    }
    if (letterFound == false) {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
}


console.log(countLetters("lighthouse in the house"));


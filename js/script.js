// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here.
/*global $*/
$(document).ready(function() {
  $("#btn-to-latin").click(function() {
	var pigLatinWord = sentenceToPigLatin($("#to-latin-input").val());
	$("#to-english-input").val(pigLatinWord);
  });
  
  $("#btn-to-english").click(function() {
	var word = $("#to-english-input").val();
	$("#to-latin-input").val(word);
  });
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
function wordToPigLatin(word) {
	return word + "ay";
}

// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentence
function sentenceToPigLatin(sentence) {
	var words = sentence.split(' ')
	var latin = wordToPigLatin(words[0]);
	for (var i=1; i < words.length; i++) {
		latin = latin + " " + wordToPigLatin(words[i])
	}
	return latin;
	// var translated = words.map(wordToPigLatin);
	// return translated.join(' ');
}
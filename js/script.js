// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

const vowels = ["a", "e", "i", "o", "u"];

// Document Ready Function. All of your jQuery should go in here.
/*global $*/
$(document).ready(function() {
  $("#btn-to-latin").click(function() {
	var pigLatinWord = sentenceToPigLatin($("#input-text").val());
	$("#input-text").val(pigLatinWord);
  });
  $("#btn-to-english").click(function() {
	var englishWord = sentenceToEnglish($("#input-text").val());
	$("#input-text").val(englishWord);
  });
});

function titleCase(str) {
	var lower = str.slice(1, str.length).toLowerCase();
	var first = str.slice(0, 1).toUpperCase();
	return first + lower;
}

function isVowel(character) {
	for (var i=0; i<vowels.length; i++) {
		if (character.toLocaleLowerCase() == vowels[i]) {
			return true;
		}
	}
	return false;
}

// Create the wordToPigLatin function that takes a word as a parameter and returns a transformed word. 
function wordToPigLatin(word) {
	if (word.length > 0) {
		if (isVowel(word[0])) {
			return word + "yay";
		} else {
			return word.slice(1, word.length) + word.slice(0, 1).toLocaleLowerCase() + "ay";
		}
	}
	return word;
}

function wordToEnglish(word) {
	if (word.length < 3) {
		return word; // already in english
	}
	else { // potentially pig latin
		if (isVowel(word[0]) && word.slice(word.length-3, word.length) == "yay") {
			return word.slice(0, word.length-3);
		} else if (word.slice(word.length-2, word.length) == "ay" && !isVowel(word[word.length-3])) {
			return word[word.length-3] + word.slice(0, word.length-3);
		} else {
			return word
		}
	}
}

function translateSentence(sentence, translator) {
	var words = sentence.split(" ");
	var translated = titleCase(translator(words[0].toLowerCase()));
	for (var i=1; i < words.length; i++) {
		translated = translated + " " + translator(words[i].toLowerCase());
	}
	return translated;
}

// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentence
function sentenceToPigLatin(sentence) {
	return translateSentence(sentence, wordToPigLatin);
}

function sentenceToEnglish(sentence) {
	return translateSentence(sentence, wordToEnglish);
}
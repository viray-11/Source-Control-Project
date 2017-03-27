var spaceCounter = 0;
var sentenceCounter = 0;

function textAreaData() {
  var x = document.getElementById("data").value;
  for (var wordCount = 0; wordCount <= x.length; wordCount++){
    if(x[wordCount] == ' '){
      spaceCounter++;
      wordCount++;
    }
   if (x[wordCount] == '.' || x[wordCount] == '?' || x[wordCount] == '!'){
     sentenceCounter++;
   }
  }

  var avg = sentenceCounter / x.length;

   document.getElementById("p1").innerHTML = 'There are ' + wordCount + ' words in this text.';
   document.getElementById("p2").innerHTML = 'There are ' + sentenceCounter + ' sentences in this text.';
   document.getElementById("p3").innerHTML = 'There are ' + avg + ' average words per sentence.';
   document.getElementById("p4").innerHTML = 'There are ' + spaceCounter + ' total number of spaces.';
}

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var words = $("input#sentence").val();
    var result = pigLatin(words);
    $("#result").text(result);
    console.log('Submitted')
  });
});


function pigLatin (words){
  console.log("pig latin start")
  var symbol = words[0];
  for (var index = 0; index < words.length; index++){

    if ((words.length === 1) && ((symbol == "a") || (symbol == "e") || (symbol == "i") || (symbol == "o") || (symbol == "u"))){
      console.log("Condition 1")
      var ay = "ay"
      symbol +=ay;
      return symbol;
    } else if ((symbol == "a") || (symbol == "e") || (symbol == "i") || (symbol == "o") || (symbol == "u")){
      var way = "way"
      symbol +=way;
      return symbol;
    } else if (words.length !== 1){
      var newstr = words.slice(1)+words[0];
      console.log(words.slice(1));
      var ay = "ay"
      newstr+=ay;
      return newstr;
    }

  }

}

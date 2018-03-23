
//VARIABLES
var newGuess; //variable to hold newly created button to hold on item from the "guesses" Array
var questions = [
  {
    "question":"What was the name of Queen Elizabeth's sister?",
    "guesses":["../images/cake.jpg","Jane","Wilemina","Margaret"],
    "answer":"Margaret",
    "giphyId":["9LnxA8X7VSnbW","12krUPvRraYSBi"]
  },
  {
    "question":"How many children does Queen Elizabeth have?",
    "guesses":["two","none","four","three"],
    "answer":"four",
    "giphyId":["3oFzmj7BeU70XMdW9O","n4uQI5M4lpWzm"]
  },
  {
    "question":"What year was Queen Elizabeth II crowned?",
    "guesses":["1957","1960","1949","1953"],
    "answer":"1953",
    "giphyId":["gskzHEG5SWM3m","QNHsUgzeuVWsU"]
  },
  {
    "question":"What was the Queen's role in WWII?",
    "guesses":["Queen","mechanic","ambassador","medic"],
    "answer":"mechanic",
    "giphyId":["xULW8GDfJGgpptCb4s","2k4CSOMmoFZYc"]
  },
  {
    "question":"Where does the Queen and her family live?",
    "guesses":["Buckingham Palace","King's Landing","Windsor Castle","Winterfell"],
    "answer":"Buckingham Palace",
    "giphyId":["3o7528Oqfsq6cyyjHW","cv6XZnaAjV408"]
  },
]; //question array

//getting Started function
$(".start").on("click",function(){
  $(".main").show();
  $(".start").hide();
  game.renderQuestion();
})
$(document).on("click",".replay",function(){
  game.reset();
})
$(document).on("click",".button",function(e){
  game.findAnswers(e);
})
var game = {
  questions:questions,
  currentQuestion:0,
  counter:10,
  winCounter:0,
  lossCounter:0,
  unansweredCounter:0,
  decrement: function(){
    game.counter--;
    $("#countDownNum").html(game.counter);
    if(game.counter === 0){
      game.timeUp();
    }
  },
  renderQuestion: function(){
    $("#countDownNum").html(game.counter);
    timer = setInterval(game.decrement,1000);
    $("#question").html(questions[game.currentQuestion].question);
    game.createButtons();

  },
  timeUp: function(){
    $(".button").remove();
    clearInterval(timer);
    game.unansweredCounter++;
    $("#question").text("Out of Time! Too slow, peasant! The correct answer was: " + questions[game.currentQuestion].answer +".");
    game.searchGiphy(questions[game.currentQuestion].giphyId[0]);
    if(game.currentQuestion===questions.length-1){
      setTimeout(game.endGame, 3000);
    } else{
      setTimeout(game.nextQuestion,3000);
    }
  },
  createButtons: function (){
    for (var i = 0; i<questions[game.currentQuestion].guesses.length; i++){
      newGuess = $("<li>");
      newGuess.addClass("button");
      newGuess.attr("data-q", questions[game.currentQuestion].guesses[i]);
      newGuess.text(questions[game.currentQuestion].guesses[i]);
      $("#answerList").append(newGuess);
      game.hoverButtons();
    };
  },
  findAnswers: function(e){
    clearInterval(timer);
    if ($(e.target).data("q") == questions[game.currentQuestion].answer){
      game.answeredCorrectly();
    }
    else if ($(e.targt).data("q")!= questions[game.currentQuestion].answer){
      game.answeredIncorrectly();
    }
  },
  answeredCorrectly: function(){
    $(".button").remove();
    clearInterval(timer);
    game.winCounter++;
    $("#question").text("Correct! Well done, loyal subject!");
    game.searchGiphy(questions[game.currentQuestion].giphyId[1]);
    if(game.currentQuestion==questions.length-1){
      setTimeout(game.endGame, 3000);
    } else{
      setTimeout(game.nextQuestion,3000);
    }
  },
  answeredIncorrectly: function(){
    $(".button").remove();
    clearInterval(timer);
    game.lossCounter++;
    $("#question").text("Wrong! Try harder, plebeian. The correct answer was: " + questions[game.currentQuestion].answer+".");
    game.searchGiphy(questions[game.currentQuestion].giphyId[0]);
    if(game.currentQuestion==questions.length-1){
      setTimeout(game.endGame, 3000);
    } else{
      setTimeout(game.nextQuestion,3000);
    }
  },
  nextQuestion: function(){
    $("#question").empty();
    $(".gifs").remove();
    game.counter = 10;
    game.currentQuestion++;
    game.renderQuestion();
  },
  searchGiphy : function(giphyAnswer){
    var queryURL = "https://api.giphy.com/v1/gifs/" + giphyAnswer + "?api_key=H5NnYWud8bpvU4ICC178EnuAHbGH056M";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(data) {
      var imgDiv = $("<img>").attr("src",data.data.images.downsized.url);
      imgDiv.addClass("gifs");
      $("#answers").append(imgDiv);
    })
  },
  endGame: function(){
    $(".gifs").remove();
    clearInterval(timer);
    $("#question").text("All Done Here's How You Did");
    var winScore =$("<div>");
    var lossScore =$("<div>");
    var unansweredScore =$("<div>");
    var playAgain = $("<button>");
    playAgain.addClass("replay");
    playAgain.text("Press to Play Again!");
    winScore.addClass("scores");
    winScore.text("Correct Answers: " + game.winCounter);
    lossScore.text("Wrong Answers: " + game.lossCounter);
    lossScore.addClass("scores");
    unansweredScore.text("Timeout Answers: " + game.unansweredCounter);
    unansweredScore.addClass("scores");
    $("#answerScore").append(winScore,lossScore, unansweredScore, playAgain);
  },
  reset:function(){
    $("#question").empty();
    $(".button").remove();
    $(".gifs").remove();
    $("#answerList").empty();
    $("#answerScore").empty();
    game.currentQuestion = 0;
    game.counter=10;
    game.renderQuestion();
    game.winCounter = 0;
    game.lossCounter = 0;
    game.unansweredCounter = 0;
  },
  hoverButtons : function(){
   $(".button").hover(function(){
     $(this).css("background-color","midnightblue")
   }, function(){
     $(this).css("background-color","firebrick")
 })
}
};

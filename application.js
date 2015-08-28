$(document).ready(function(){
  var randomNumber = Math.floor(Math.random()*9);
  var turnsRemaining = 3;
  var $counter = $("#counter");
  var gameStates = {
    'on': 'Treasure Hunt',
    'won': 'You won!',
    'lost': 'Game Over'
  };
  var currentGameState = 'on';

  $counter.text(turnsRemaining);
  var isGameStillOn = function() {
    return currentGameState === 'on';
  }
  var changeGameState = function(newState) {
    currentGameState = newState;
    $("#headerMessage").text(gameStates[currentGameState]);
  };

  var handleClick = function(event){
    if (isGameStillOn()) {
      event.preventDefault();
      decrementTurnsRemaining();
      var $link = $(this);
      var correctAnswer = $link.data("id") === randomNumber;
      $link.addClass(correctAnswer ? "winner" : "loser");
      if (correctAnswer) {
        changeGameState('won');
        return;
      }
    }
    if (turnsRemaining === 0) {
      changeGameState('lost');
    }
  };

  $(".btn").on("click", handleClick);

  var decrementTurnsRemaining = function() {
    $counter.text(--turnsRemaining);
  };
});

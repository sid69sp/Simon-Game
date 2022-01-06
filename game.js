
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0 ;

var started = false;

$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started= true;

  }
})

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

});

function nextSequence() {

  userClickedPattern = [];

  level++;
  $("#level-text").text("Level "+ level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
  playSound(randomChosenColour);
}

//2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {

  //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");

  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  } , 100);
}

function checkAnswer(currentLevel){

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");

    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    } , 200);

    $("h1").text("Game over, press any key to start");

    startOver();

  }

}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;

}








// //3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
// var buttonColours = ["red", "blue", "green", "yellow"];
//
// //5. At the top of the game.js file, create a new empty array called gamePattern.
// var gamePattern = [];
//
// //1. Inside game.js create a new function called nextSequence()
// function nextSequence() {
//
//   //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
//   var randomNumber = Math.floor(Math.random() * 4);
//
//   //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
//   var randomChosenColour = buttonColours[randomNumber];
//
//   //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//
//   //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
//   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
// }


/*this is siddharth terrible way*/
// $("#green").on("click" , function(){
//   $("#green").fadeOut(10).fadeIn(10);
//   var green = new Audio("sounds/green.mp3");
//   green.play();
// });
// $("#red").on("click" , function(){
//   $("#red").fadeOut(10).fadeIn(10);
//   var red= new Audio("sounds/red.mp3");
//   red.play();
// });
// $("#blue").on("click" , function(){
//   $("#blue").fadeOut(10).fadeIn(10);
//   var blue = new Audio("sounds/blue.mp3");
//   blue.play();
// });
// $("#yellow").on("click" , function(){
//   $("#yellow").fadeOut(10).fadeIn(10);
//   var yellow = new Audio("sounds/yellow.mp3");
//   yellow.play();
// });

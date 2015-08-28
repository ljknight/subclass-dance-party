$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  $(".lineUpButton").on("click", function(event){
    var lineUp = $(this).data("lineUp");
    var leftSpacing = 100/window.dancers.length;
    var leftPosition = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
      window.dancers[i].$node.animate({left: leftPosition.toString() + "%"});
      leftPosition += leftSpacing;
    }
  });

$(".cancanButton").on("click", function(event){
    var cancan = $(this).data("cancan");
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].show(); 
    }
  });

$(".prideButton").on("click", function(event){
  $(".prideBars").toggle();
});

$(".title").on("click", function(event){
  location.reload();
});

$(".burritoButton").on("click", function(event){
  $('.burrito').toggleClass('big');
});

$(".Hipster").on("click", function(event){
    var hipsterMakerFunction = window["makeHipsterDancer"];
    var hipster = new hipsterMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    var hipster1 = new hipsterMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(hipster.$node);
    $('body').append(hipster1.$node);
    window.dancers.push(hipster, hipster1);
  $(".overlay").toggle();
  document.getElementById('tswift').paused ? document.getElementById('tswift').play() : document.getElementById('tswift').pause();
  });

$("body").on("mouseover", ".hipster", function(){
    hipsterMove($(this), '110%', 30000);
  });

$("body").on("mouseover", ".dog", function(){
    doBounce($(this), 3, '100px', 300);
  });

function hipsterMove(element, speed) {
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  var distance = plusOrMinus * 350;
  element.animate({left: '-='+distance.toString()}, speed);        
}

function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({top: '-='+distance}, speed)
            .animate({top: '+='+distance}, speed);
    }        
}

window.setTimeout(function() {
  $('.smoke').fadeIn(15000);
}, 1000);

});


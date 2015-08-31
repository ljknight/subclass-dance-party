$(document).ready(function(){
  window.dancers = [];

  $('.add-dancer-button').on('click', function(event){

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    $('body').append(dancer.$node);
      window.dancers.push(dancer);
  });

  $('.title').on('click', function(event){
    location.reload();
  });

  $('body').on('mouseover', '.dog', function(){
    doBounce($(this), 3, '100px', 300);
  });

  $('.hipster-button').on('click', function(event){
    var hipsterMakerFunction = window['makeHipsterDancer'];
    // adds 2 new hipsters - need to refactor
    var hipster = new hipsterMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    var hipster1 = new hipsterMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(hipster.$node);
    $('body').append(hipster1.$node);
    
    window.dancers.push(hipster, hipster1);
    
    $('.overlay').toggle();
    
    document.getElementById('tswift').paused ? document.getElementById('tswift').play() : document.getElementById('tswift').pause();
  });

  $('body').on('mouseover', '.hipster', function(){
    hipsterMove($(this), '110%', 30000);
  });

  $('.pride-button').on('click', function(event){
    $('.pride-bars').toggle();
  });

  $('.line-up-button').on('click', function(event){
    var leftSpacing = 100/window.dancers.length;
    var leftPosition = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      // calls lineUp method on each dancer
      window.dancers[i].lineUp();
      window.dancers[i].$node.animate({left: leftPosition.toString() + '%'});
      leftPosition += leftSpacing;
    }
  });

  $('.cancan-button').on('click', function(event){
    var cancan = $(this).data('cancan');
    for (var i = 0; i < window.dancers.length; i++) {
      // call cancan method on each dancer
      window.dancers[i].cancan(); 
    }
  });

  $('.burrito-button').on('click', function(event){
    $('.burrito').toggleClass('burrito-time');
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
    $('.smoke').fadeIn(30000);
  }, 1000);

});


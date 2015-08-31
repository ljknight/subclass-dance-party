var makeDancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

  // this sets the position to some random default point within the body
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  
  var context = this; //this = makeDancer before invoking setTimeout, but this = window inside of setTimeout
  setTimeout(function(){context.step()}, this.timeBetweenSteps);
  // setTimeout(this.step.bind(this), this.timeBetweenSteps); - also works: binds the last instance of this.step to the current this
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// moves all dancers to the middle of page
makeDancer.prototype.lineUp = function(){
  this.$node.fadeOut("fast").animate({top: '50%'}, "fast").fadeIn();
};

// hides every element except pbr cans (overridden on pbr subclass)
makeDancer.prototype.cancan = function(){
  this.$node.css('display', 'none');
};

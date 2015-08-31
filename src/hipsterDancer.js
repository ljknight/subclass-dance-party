var makeHipsterDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('hipster');
  this.callPassOut();
};

makeHipsterDancer.prototype = Object.create(makeDancer.prototype);
makeHipsterDancer.prototype.constructor = makeHipsterDancer;


makeHipsterDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  //  setTimeout(this.step, timeBetweenSteps);
};

makeHipsterDancer.prototype.passOut = function(){
  this.$node.css('transform', 'rotate(90deg)');
};

// makes hipsters pass out after 1500ms
makeHipsterDancer.prototype.callPassOut = function(){
  var context = this;
  setTimeout(function() {context.passOut()}, 1500);
};


var makeHipsterDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.callPassOut();
};

makeHipsterDancer.prototype = Object.create(makeDancer.prototype);
makeHipsterDancer.prototype.constructor = makeHipsterDancer;


makeHipsterDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.addClass('hipster');
};

makeHipsterDancer.prototype.show = function(){
  this.$node.css('display', 'none');
};

makeHipsterDancer.prototype.passOut = function(){
  this.$node.css('transform', 'rotate(90deg)');
};

makeHipsterDancer.prototype.callPassOut = function(){
  var context = this;
   setTimeout(function() {context.passOut()}, 1500);
};

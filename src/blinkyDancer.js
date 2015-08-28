
var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.addClass('burrito');
};


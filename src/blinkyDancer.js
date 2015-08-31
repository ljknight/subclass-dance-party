var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('burrito');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  //  setTimeout(this.step, timeBetweenSteps);
};


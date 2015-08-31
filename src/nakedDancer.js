var makeDogDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('dog');
};

makeDogDancer.prototype = Object.create(makeDancer.prototype);
makeDogDancer.prototype.constructor = makeDogDancer;

makeDogDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  //  setTimeout(this.step, timeBetweenSteps);
};

var makePBRDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  this.$node.addClass('pbr');
};

makePBRDancer.prototype = Object.create(makeDancer.prototype);
makePBRDancer.prototype.constructor = makePBRDancer;

makePBRDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  // setTimeout(this.step, timeBetweenSteps)
};

makePBRDancer.prototype.cancan = function(){
  this.$node.css('display', 'block');
  this.$node.fadeOut("fast").animate({top: '50%'}, "fast").fadeIn();
};

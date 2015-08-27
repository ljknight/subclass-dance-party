var makePBRDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makePBRDancer.prototype = Object.create(makeDancer.prototype);
makePBRDancer.prototype.constructor = makePBRDancer;


makePBRDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  //  setTimeout(this.step, timeBetweenSteps);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.addClass('pbr');
};

makePBRDancer.prototype.show = function(){
  this.$node.css('display', 'block');
  this.$node.fadeOut("fast").animate({top: '50%'}, "fast").fadeIn();
};
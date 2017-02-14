var makeGronkDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img src="pictures/gronk.png" class="gronk">');
  this.setPosition(top, left);
};

makeGronkDancer.prototype = Object.create(makeDancer.prototype);
makeGronkDancer.prototype.constructor = makeGronkDancer;
makeGronkDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // this.step.bind(makeDancer);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

makeGronkDancer.prototype.lineUp = function() {
  var styleSettings = {
    left: '90%'
  };
  this.$node.css(styleSettings);
};
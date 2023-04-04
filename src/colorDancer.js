var ColorDancer = function (top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.apply(this, [top, left, timeBetweenSteps]);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //var oldStep = Dancer.prototype.step;
  this.currentColor = 'red';
};
ColorDancer.prototype = Object.create(Dancer.prototype); // sets inheritance
ColorDancer.prototype.constructor = ColorDancer; // set Blinky Dancer constructor func
ColorDancer.prototype.oldStep = Dancer.prototype.step;
ColorDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (this.currentColor === 'red') {
    this.$node.css("border",'10px solid blue');
    this.currentColor = 'blue';
  } else if (this.currentColor === 'blue') {
    this.$node.css("border",'10px solid red');
    this.currentColor = 'red';
  }
};
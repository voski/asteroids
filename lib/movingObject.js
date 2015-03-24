(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroids = window.Asteroids;

  var MovingObject = Asteroids.MovingObject = function (attributesHash) {
    this.pos = attributesHash["pos"];
    this.vel = attributesHash["vel"];
    this.radius = attributesHash["radius"];
    this.color = attributesHash["color"];
    this.game = attributesHash["game"]
    this.x = this.pos[0];
    this.y = this.pos[1];
    this.dx = this.vel[0];
    this.dy = this.vel[1];
  };

  MovingObject.prototype.draw = function(ctx) {
       ctx.beginPath();
       ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
       ctx.fillStyle = this.color;
       ctx.fill();
       ctx.lineWidth = 5;
       ctx.strokeStyle = '#003300';
       ctx.stroke();
  };

  MovingObject.prototype.move = function(){
    var pos = [(this.x + this.dx), (this.y + this.dy)];
    this.pos = this.game.wrap(pos);
    this.x = this.pos[0];
    this.y = this.pos[1];
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    // if the distance between center points is less than sum of radii
    var totalRadius = this.radius + otherObject.radius;
    if (totalRadius > this._distance(this, otherObject)) {
      return true;
    }
    return false;
  };

  MovingObject.prototype._distance = function(object1, object2) {
    return Math.sqrt(Math.pow((object1.x - object2.x),2) + Math.pow((object1.y - object2.y),2));
  };

  MovingObject.prototype.collideWith = function(otherObject) {
    // this.game.remove(this);
    // this.game.remove(otherObject);
  };
})();

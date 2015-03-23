if (typeof window.Asteroids === undefined) {
  window.Asteroids = {};
}

function MovingObject(attributesHash) {
  this.pos = attributesHash["pos"];
  this.vel = attributesHash["vel"];
  this.radius = attributesHash["radius"];
  this.color = attributesHash["color"];
  this.x = this.pos[0];
  this.y = this.pos[1];
  this.dx = this.vel[0];
  this.dy = this.vel[1];
}

MovingObject.prototype.draw = function(ctx) {
     ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
     ctx.fillStyle = this.color;
     ctx.fill();
     ctx.lineWidth = 5;
     ctx.strokeStyle = '#003300';
     ctx.stroke();
};

MovingObject.prototype.move = function(){
  this.pos = [this.x + this.dx, this.y + this.dy];
};

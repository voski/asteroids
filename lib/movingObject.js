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
}

MovingObject.prototype.draw = function(ctx) {
     context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
     context.fillStyle = this.color;
     context.fill();
     context.lineWidth = 5;
     context.strokeStyle = '#003300';
     context.stroke();
   <
};

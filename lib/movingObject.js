if (typeof window.Asteroids === undefined) {
  window.Asteroids = {};
}

function MovingObject(attributesHash) {
  this.pos = attributesHash["pos"];
  this.vel = attributesHash["vel"];
  this.radius = attributesHash["radius"];
  this.color = attributesHash["color"];
}

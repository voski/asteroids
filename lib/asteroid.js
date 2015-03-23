(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(pos) {
    Asteroid.COLOR = '#666699';
    Asteroid.RADIUS = 20;
    var attributes = {
      pos: pos,
      vel: Asteroids.Util.randomVec(),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR
    };
    Asteroids.MovingObject.call(this, attributes);
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
})();

(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    Asteroid.COLOR = '#666699';
    Asteroid.RADIUS = 20;
    var attributes = {
      pos: pos,
      vel: Asteroids.Util.randomVec(),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
      game: game
    };
    Asteroids.MovingObject.call(this, attributes);
  }

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroid.Ship) {
      otherObject.relocate();
    }
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
})();

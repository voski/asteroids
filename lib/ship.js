(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var Asteroids = window.Asteroids;

  var Ship = Asteroids.Ship = function(game) {
    Ship.RADIUS = 10;
    Ship.COLOR = "#CC0066";
    var attributes = {
      pos: [400, 400],
      vel: [0, 0],
      radius: Ship.RADIUS,
      color: Ship.COLOR,
      game: game
    };
    Asteroids.MovingObject.call(this, attributes);
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = [400, 400];
    this.vel = [0, 0];
  };
})();

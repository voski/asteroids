(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var Asteroids = window.Asteroids;

  Asteroids.Game = function() {
    Asteroids.Game.DIM_X = 800;
    Asteroids.Game.DIM_Y = 800;
    this.addAsteroids(15);
  };

  Asteroids.Game.prototype.addAsteroids = function(num) {
    this.asteroids = [];
    for (var i = 0; i < num; i++) {
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition()));
    }
  };

  Asteroids.Game.prototype.randomPosition = function() {
    var x = Math.floor(Math.random() * 800) + 1;
    var y = Math.floor(Math.random() * 800) + 1;
    return [x, y];
  };

  Asteroids.Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, 800, 800);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx);
    }
  };

  Asteroids.Game.prototype.moveObjects = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  };
})();

(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var Asteroids = window.Asteroids;

  Asteroids.Game = function() {
    Asteroids.Game.DIM_X = 800;
    Asteroids.Game.DIM_Y = 800;
    this.addAsteroids(200);
    this.ship = new Asteroids.Ship(this);
  };

  Asteroids.Game.prototype.allObjects = function() {
    var result = [];
    result.push(this.asteroids);
    result.push(this.ship);
    return result;
  };

  Asteroids.Game.prototype.addAsteroids = function(num) {
    this.asteroids = [];
    for (var i = 0; i < num; i++) {
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition(), this));
    }
  };

  Asteroids.Game.prototype.randomPosition = function() {
    var x = Math.floor(Math.random() * 800) + 1;
    var y = Math.floor(Math.random() * 800) + 1;
    return [x, y];
  };

  Asteroids.Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, 800, 800);
    for (var i = 0; i < this.allObjects.length; i++) {
      this.allObjects[i].draw(ctx);
    }
  };

  Asteroids.Game.prototype.moveObjects = function() {
    for (var i = 0; i < this.allObjects.length; i++) {
      this.allObjects[i].move();
    }
  };

  Asteroids.Game.prototype.wrap = function(pos) {
    if (pos[0] > 800) {
      pos[0] = 0;
    }
    if (pos[1] > 800) {
      pos[1] = 0;
    }
    if (pos[0] < 0) {
      pos[0] = 800;
    }
    if (pos[1] < 0) {
      pos[1] = 800;
    }
    return pos;
  };

  Asteroids.Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.allObjects.length - 1; i++) {
      for (var j = i + 1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          this.asteroids[i].collideWith(this.asteroids[j]);
        }
      }
    }
  };

  Asteroids.Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Asteroids.Game.prototype.remove = function(asteroid) {
    var idx = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(idx,1);
  };

})();

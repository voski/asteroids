(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var Asteroids = window.Asteroids;

  Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  Asteroids.GameView.prototype.start = function() {
    var that = this;
    setInterval(function () {
      that.game.draw(that.ctx);
    }, 20);
    setInterval(function () {
      that.game.step();
    }, 20);
  };
})();

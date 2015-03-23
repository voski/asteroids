(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var Asteroids = window.Asteroids;

  Asteroids.Util = {
    inherits: function (child, parent) {
      function Surrogate() {}
      Surrogate.prototype = parent.prototype;
      child.prototype = new Surrogate();
      // child.prototype.constructor = child;
    },

    randomVec: function (length) {
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      var x = Math.floor(Math.random() * 10) + 5;
      var y = Math.floor(Math.random() * 10) + 5;
      return [x * plusOrMinus, y * plusOrMinus];
    }

  };
})();

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
      var plusOrMinus1 = Math.random() < 0.5 ? -1 : 1;
      var plusOrMinus2 = Math.random() < 0.5 ? -1 : 1;

      var x = Math.floor(Math.random() * 2) + 2;
      var y = Math.floor(Math.random() * 2) + 2;
      return [x * plusOrMinus1, y * plusOrMinus2];
    }

  };
})();

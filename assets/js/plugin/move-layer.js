export default {
  install(Vue){
    Vue.prototype.$move = {
      layer: (bg) => {

        // Init
        var container = document.getElementById("container"),
          particle

        // Mouse
        var mouse = {
          _x: 0,
          _y: 0,
          x: 0,
          y: 0,
          updatePosition: function(event) {
            var e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
          },
          setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
          },
          show: function() {
            return "(" + this.x + ", " + this.y + ")";
          }
        };

        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(container);

        //-----------------------------------------

        var counter = 0;
        var updateRate = 10;
        var isTimeToUpdate = function() {
          return counter++ % updateRate === 0;
        };

        //-----------------------------------------

        var onMouseEnterHandler = function(event) {
          update(event);
        };

        var onMouseLeaveHandler = function() {
          bg.style = "";
        };

        var onMouseMoveHandler = function(event) {
          if (isTimeToUpdate()) {
            update(event);
          }
        };

        //-----------------------------------------

        var update = function(event) {
          mouse.updatePosition(event);
          updateTransformStyle(
            (mouse.x / -bg.offsetWidth / 0.005).toFixed(2),
            (mouse.y / bg.offsetHeight / 0.005).toFixed(2)
          );
        };

        var updateTransformStyle = function(x, y) {
          var style = "translate3d(" + x + "px," + y + "px," + "0)";
          bg.style.transform = style;
          bg.style.webkitTransform = style;
          bg.style.mozTransform = style;
          bg.style.msTransform = style;
          bg.style.oTransform = style;
        };

        //-----------------------------------------

        container.onmouseenter = onMouseEnterHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmousemove = onMouseMoveHandler;

      }
    }
  }
}

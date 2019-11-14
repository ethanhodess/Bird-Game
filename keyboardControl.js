/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  ship : {
    upward : false,
    downward : false,
    leftward : false,
    rightward : false
  },
  fire : {
    active : false,
    lastFireTime : 0
  }

};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.ship.upward = true;
      break;
    case "ArrowDown":
      CONTROLS.ship.downward = true;
      break;
    case "ArrowLeft":
      CONTROLS.ship.leftward = true;
      break;
    case "ArrowRight":
      CONTROLS.ship.rightward = true;
      break;
    case " ":
      CONTROLS.fire.active = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.ship.upward = false;
      break;
    case "ArrowDown":
      CONTROLS.ship.downward = false;
      break;
    case "ArrowLeft":
      CONTROLS.ship.leftward = false;
      break;
    case "ArrowRight":
      CONTROLS.ship.rightward = false;
      break;
    case " ":
      CONTROLS.fire.active = false;
      break;
    default:
      break;
  }
});

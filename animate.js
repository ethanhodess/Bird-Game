/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
function handleShipAnimation() {
  if (CONTROLS.ship.upward) {
    SPACE_SHIP.y -= SPACE_SHIP.speed;
  }
  if (CONTROLS.ship.downward) {
    SPACE_SHIP.y += SPACE_SHIP.speed;
  }
  if (CONTROLS.ship.rightward) {
    SPACE_SHIP.x += SPACE_SHIP.speed;
  }
  if (CONTROLS.ship.leftward) {
    SPACE_SHIP.x -= SPACE_SHIP.speed;
  }

  // Check if asteroid is leaving the boundary, if so, switch sides
}

function RenderNewObject(context) {
  context.fillStyle = 'blue';
  context.fillRect(NEW_OBJECT.x, NEW_OBJECT.y, 10, 10);
}

function HandleNewObjectMovement() {
  NEW_OBJECT.x += 1;
  NEW_OBJECT.y += 1;
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleShipAnimation();
    HandleNewObjectMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderSpaceship(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);

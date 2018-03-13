//////////////////////////////////////////////////////
//                  Jeu Dinovaders                  //
//               Projet de Javascript               //
// Dorian Laurancy - Arnaud Ducret - Weslie Rabeson //
//////////////////////////////////////////////////////


/**
 * Called when the page loads. It will initiates all the elements, then launch the game
 */
function initGame() {
    player = new Player();
    player.init();

    shotArray = new Array();

    balAudio = document.getElementById("audio")
    mainMusic = document.createElement("audio");
    mainMusic.src = "./son/bensound-summer.mp3"
    balAudio.appendChild(mainMusic);
    mainMusic.loop = "true"
    mainMusic.play();

    document.body.addEventListener("keydown", playerAction);
    document.body.addEventListener("keyup", playerActionEnd);
    lastPressedKey = 0;
    lastShot = 0;
    playerActionCheck = 0;

    fps = 60;
    lastTimeStampUpdate = 0;

    requestAnimationFrame(mainLoop);
}

/**
 * Returns the running time of the application
 * @returns {Number}
 */
function timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

/**
 * Record the last key pressed by the player to makt its action
 * @param {type} event
 */
function playerAction(event) {
    let k = event.keyCode;
    if (k == 32)
        lastShot = 1;
    else
        lastPressedKey = event.keyCode;
}

/**
 * Reset the control when the player release a key
 * @param {type} event
 */
function playerActionEnd(event) {
    if (event.keyCode == lastPressedKey)
        lastPressedKey = 0;
    else if (event.keyCode == 32)
        lastShot = 0;
}

/**
 * Manages the player Actions
 */
function makePlayerAction() {
    // Up or Z
    if (lastPressedKey == 38 || lastPressedKey == 90)
        player.up();
    // Down or S 
    else if (lastPressedKey == 40 || lastPressedKey == 83)
        player.down();
    // Space
    if (lastShot == 1)
        player.shoot();

}

/**
 * Manages the movement of the shots
 * @returns {undefined}
 */
function manageShotMovement() {
    for (i = 0; i < shotArray.length; i++) {
        shotArray[i].move();
    }
}
/**
 * Update the game, player and enemy position
 */
function update() {
    makePlayerAction()
    manageShotMovement()
}

/**
 * Main Loop of the Game
 * Calls the update method 'fps' times a second
 */
function mainLoop() {
    t = timestamp()
    if (t > lastTimeStampUpdate + (1000 / fps)) {
        update();
        lastTimeStampUpdate = t;
    }
    requestAnimationFrame(mainLoop);
}


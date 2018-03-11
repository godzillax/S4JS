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
    this.player.init();

    document.body.addEventListener("keydown", playerAction);
    lastPressedKey = 0;

    fps = 60;
    lastTimeStampUpdate = 0;
    
    requestAnimationFrame(mainLoop);
}

/**
 * Record the last key pressed by the player to makt its action
 * @param {type} event
 */
function playerAction(event) {
    lastPressedKey = event.keyCode;
}

/**
 * Returns the running time of the application
 * @returns {Number}
 */
function timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
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
    else if (lastPressedKey == 32)
        player.shoot();
    lastPressedKey = 0;
}

/**
 * Update the game, player and enemy position
 */
function update() {
    makePlayerAction()
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


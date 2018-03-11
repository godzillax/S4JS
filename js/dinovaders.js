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
    go();
}

/**
 * Launches the game
 */
function go() {
    document.body.addEventListener("keydown", playerAction);
    this.mainLoop();
}

/**
 * Manages the player Actions
 * @param {type} event
 */
function playerAction (event) {
    var k = event.keyCode;
    // Up or Z
    if (k == 38 || k == 90) 
        player.up();
    // Down or S 
    else if (k == 40 || k == 83) 
        player.down();
    // Space
    else if (k == 32)
        player.shoot();
}

/**
 * Main Loop of the Game
 */
function mainLoop() {

}


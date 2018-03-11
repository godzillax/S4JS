//////////////////////////////////////////////////////
//                  Jeu Dinovaders                  //
//               Projet de Javascript               //
// Dorian Laurancy - Arnaud Ducret - Weslie Rabeson //
//////////////////////////////////////////////////////


function initGame() {
    player = new Player();
    go();
}
function go() {
    this.player.init();
//	    this.enemy.init();
    document.body.addEventListener("keydown", playerAction);
    this.mainLoop();
}


function playerAction (event) {
    // l'event récupéré sera un keydown
    var k = event.keyCode;
    // k contient le code touche de la touche pressée

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

function mainLoop() {

}


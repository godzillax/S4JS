//////////////////////////////////////////////////////
//                  Jeu Dinovaders                  //
//               Projet de Javascript               //
// Dorian Laurancy - Arnaud Ducret - Weslie Rabeson //
//////////////////////////////////////////////////////


/**
 
 */
function Dinovaders() {
    this.player;
    this.ennemies;
    this.wave = 1;


    this.init = function () {
        this.player = new Player();
//		this.ennemies = new Enemy();
        this.wave;
        this.go();
    }

    this.go = function () {
        this.player.init();
//	    this.enemy.init();
        document.body.addEventListener("keydown", this.gererMouvements);
        this.mainLoop();
    }


    this.gererMouvements = function (event) {
        // l'event récupéré sera un keydown
        var k = event.keyCode;
        // k contient le code touche de la touche pressée
        // en fonction de la valeur de k, on agit.
        // "haut"   a le code touche 38
        // "bas"    a le code touche 40
        // "ESPACE" a le code touche 32
        switch (k) {
            case 38 :
                this.player.up();
                break;
            case 40 :
                this.player.down();
                break;
            default :
        }
    }

    this.mainLoop = function () {

    }
}

    din = new Dinovaders();
    din.init();



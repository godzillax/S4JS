
function Player() {
    this.coordX = 75;
    this.coordY;
    this.score = 0;
    this.hp = 5;
    
    this.width = 90;
    this.height = 75;
    
    // Will contain the div#player
    this.balise_perso;
    
    // The img html tag 
    this.img;
    this.isHit = 0;
    
    /**
     * Called when the game is initialised. 
     * Initiates the player
     */
    this.init = function () {
        this.balise_perso = document.getElementById('player');
        this.img = document.createElement("img");
        this.img.src = "./Images/player.png";
        this.img.style.width = "100%";
        this.coordY = (window.innerHeight/2)-50;
        this.spawn();
    }
    
    /**
     * Places the player on the screen
     */
    this.spawn = function () {
        this.balise_perso.innerHTML = "";
        this.balise_perso.style.top = this.coordY + "px";
        this.balise_perso.appendChild(this.img);
    }
    
    /**
     * Moves the player
     * @param {type} direction :
     *                  - 0 : up
     *                  - else : down
     */
    this.move = function (direction) {
        if (direction == 0) {
            this.up();
        } else {
            this.down();
        }
    }
    
    /**
     * Moves the player up
     */
    this.up = function () {
        if (this.coordY > -30) {
            this.coordY = this.coordY-10;
            this.spawn();
        }
    }
    
     /**
     * Moves the player down
     */
    this.down = function () {
        if (this.coordY < window.innerHeight-50) {
            this.coordY = this.coordY+10;
            this.spawn();
        }
        
    }
    
    /**
     * Creates a Shot
     */
    this.shoot = function () {
        shot = new Shot(this);
        shot.init();
        shot.right();
    }
    
    /**
     * When the player is hit, they will lose HP and may die if their HP reaches 0
     */
    this.hit = function () {
        this.isHit = 1;
        this.hp--;
        if (this.hp <= 0) {
            this.death();
        } else {
            this.img.src = './Images/playerHit.png';
        }
    }
    
    this.death = function () {
        this.img.src = '';
    }
}
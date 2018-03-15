
function Player() {
    this.coordX = 75;
    this.coordY;
    this.score = 0;
    this.hp = 5;

    // Shoot cadency in ms
    this.cadency = 0.33;
    
    // The time when the last shot was fired by the object
    this.lastShot = 0;

    this.width = 90;
    this.height = 75;

    // Will contain the div#player
    this.balise_perso;

    // The img html tag 
    this.img;
    this.isHit = 0;

    this.speed = 10;
    /**
     * Called when the game is initialised. 
     * Initiates the player
     */
    this.init = function () {
        this.balise_perso = document.getElementById('player');
        this.img = document.createElement("img");
        this.img.src = "./Images/player.png";
        this.img.style.width = "100%";
        this.coordY = (window.innerHeight / 2) - 50;
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
            this.coordY = this.coordY - this.speed;
            this.spawn();
        }

    }

    /**
     * Moves the player down
     */
    this.down = function () {
        if (this.coordY < window.innerHeight - 50) {
            this.coordY = this.coordY + this.speed;
            this.spawn();
        }
    }

	/**
	* Replace the player on the visible screen.
	* If the window is resized, the dino may be out of the map, this function prevents it
	*/
    this.checkOutMap = function() {
    	if (this.coordY < -30) {
    		this.coordY = -30;
    		this.spawn();
    	}
    	else if (this.coordY>window.innerHeight - 50){
    		this.coordY = window.innerHeight - 50
    		this.spawn();
    	}
    }

    /**
     * Creates a Shot and add it in the global array shotArray
     */
    this.shoot = function () {
        t = timestamp();
        if (t > this.lastShot + (this.cadency * 1000)) {
            this.lastShot = t
            shot = new Shot(this);
            shot.init();
            shot.right();
            shotArray.push(shot);
        }
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
        updateHealthBar(this);
    }

    this.death = function () {
        this.img.src = '';
    }
    
    
}
function Shot(shooter) {
    this.coordX;
    this.coordY;
    this.direction;
    //this.dmg;

    // Contains the <img> html tag
    this.img_shoot;

    // div#shot
    this.balise_shoot;

    //Object.getPrototypeOf(shooter).constructor.name

    this.init = function () {
        this.balise_shoot = document.getElementById('shot');
        this.img_shoot = document.createElement("img");

        if (Object.getPrototypeOf(shooter).constructor.name == "Enemy") {
            this.img_shoot.src = "./Images/Bullet2.png";
        } else {
            this.img_shoot.src = "./Images/Bullet.png";
        }
        this.img_shoot.style.width = "25px";
        this.img_shoot.style.position = "fixed";

        this.coordX = shooter.coordX + shooter.width;
        this.coordY = shooter.coordY + shooter.height/2;
        this.balise_shoot.appendChild(this.img_shoot);
        
        this.spawn();
    }

    this.spawn = function () {
        this.balise_shoot.removeChild(this.img_shoot);
        this.img_shoot.style.left = this.coordX + "px";
        this.img_shoot.style.top = this.coordY + "px";
        this.balise_shoot.appendChild(this.img_shoot);
    }

    /**
     * Moves the bullet
     *@param {type} shooter :
     * 				Enemy : left
     *				else : right
     */
    this.move = function () {
        if (Object.getPrototypeOf(shooter).constructor.name == "Enemy") {
            this.left();
        } else {
            this.right();
        }
    }

    /**
     * The bullet goes left
     */
    this.left = function () {
        // Surtout pas de while : Boucle qui bloque tout le programme
        if (this.coordX > 0) {
            this.coordX = this.coordX - 10;
            this.spawn();
        }
        else {
         	this.death();
        }
    }

    /**
     * The bullet goes right
     */
    this.right = function () {
        if (this.coordX < window.innerWidth) {
            this.coordX = this.coordX + 10;
            this.spawn();
        }
        else {
         	this.death();
        }
    }

    /**
     * A bullet hits when it collides with a player or an enemy
     */
    this.hit = function (shot) {
        if (this.coordX == shot.coordX && this.coordY == shot.coordY) {
            shot.hit();
            this.death();
        }
        return true;
    }

    /**
     * The bullet is out of the window
     */
    this.death = function () {
        //this.img_shoot.src = "";
        // On supprime le shot
        this.balise_shoot.removeChild(this.img_shoot)
        // On le supprime du tableau global
        shotArray.splice(shotArray.indexOf(this), 1);
    }
}
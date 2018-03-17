function Shot(shooter, speed) {
    this.coordX;
    this.coordY;
    this.direction;
    //this.dmg;
    this.speed = 10;

    // Contains the <img> html tag
    this.img_shoot;

    // div#shot
    this.balise_shoot;
    
    this.audio;
    this.balAudio;

    this.width = 25;
    this.height = 6;
    //Object.getPrototypeOf(shooter).constructor.name

    this.init = function () {
        this.balise_shoot = document.getElementById('shot');
        this.img_shoot = document.createElement("img");
        

        if (Object.getPrototypeOf(shooter).constructor.name === "Enemy") {
            this.img_shoot.src = "./Images/Bullet2.png";
            this.coordX = shooter.coordX;
            this.coordY = shooter.coordY + shooter.height/2;
        } else {
            this.img_shoot.src = "./Images/Bullet.png";
            this.coordX = shooter.coordX + shooter.width;
            this.coordY = shooter.coordY + shooter.height/2;
        }
        this.img_shoot.style.width = "25px";
        this.img_shoot.style.position = "fixed";

        
        this.balise_shoot.appendChild(this.img_shoot);
        
        if (speed) {
            this.speed = speed + (5 + Math.random() * 10);
        }
        
        this.startAudio()
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
        if (Object.getPrototypeOf(shooter).constructor.name === "Enemy") {
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
            this.coordX = this.coordX - this.speed;
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
            this.coordX = this.coordX + this.speed;
            this.spawn();
        }
        else {
         	this.death();
        }
    }

    /**
     * A bullet hits when it collides with a player or an enemy
     * A REDEFINIR
     */
//    this.hit = function (shot) {
//        if (this.coordX == shot.coordX && this.coordY == shot.coordY) {
//            shot.hit();
//            this.death();
//        }
//        return true;
//    }
    /**
     * 
     * @param {type} obj
     * @returns if this hit obj
     */
    this.hit = function (obj) {
        var col = false;
        //Vu que la hitbox de obj est plus grande que sa forme, on prend le milieu du tir, c'est plus joli.
        if (this.coordX + this.width/2 >= obj.coordX && this.coordX + this.width/2 <= obj.coordX + obj.width){
            if ((this.coordY < obj.coordY) && (this.coordY + this.height > obj.coordY)) {
               col = true;
            }
            if ((this.coordY > obj.coordY) && (this.coordY < obj.coordY + obj.height)) {
               col = true;
            }
        }
        if (Object.getPrototypeOf(obj).constructor.name === Object.getPrototypeOf(shooter).constructor.name){
            col = false;
        }
        if(col){
            obj.hit();
            this.death();
        }
        return col;
    }

    /**
     * The bullet is out of the window
     */
    this.death = function () {
        // On supprime le shot
        this.img_shoot.parentNode.removeChild(this.img_shoot)
        // On le supprime du tableau global
        this.balAudio.removeChild(this.audio)
        shotArray.splice(shotArray.indexOf(this), 1);
    }
    
    this.startAudio = function () {
        this.balAudio = document.getElementById("audio")
        this.audio = document.createElement("audio");
        this.audio.src = "./son/piou.mp3"
        this.balAudio.appendChild(this.audio);
        this.audio.play();
        
    }
}
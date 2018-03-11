function Player() {
    this.coordX = 75;
    this.coordY;
    this.score = 0;
    this.hp = 5;
    this.balise_perso;

    this.init = function () {
        this.balise_perso = document.getElementById('player');
        this.coordY = (window.innerHeight/2)-50;
        this.spawn();
    }
    
    this.spawn = function () {
        this.balise_perso.innerHTML = "";
        this.balise_perso.style.top = this.coordY + "px";
        img = document.createElement("img");
        img.src = "./Images/player.png";
        img.style.width = "100%";
        this.balise_perso.appendChild(img);
    }
    
    this.move = function (direction) {
        if (direction == 0) {
            this.up();
        } else {
            this.down();
        }
    }
    
    this.up = function () {
        if (this.coordY > -30) {
            this.coordY = this.coordY-10;
            this.spawn();
        }
    }
    
    this.down = function () {
        if (this.coordY < window.innerHeight-60) {
            this.coordY = this.coordY+10;
            this.spawn();
        }
        
    }
    
    this.shoot = function () {

    }
    
    this.hit = function (bullet) {
        if (this.hp == 0) {
            this.death();
        } else {
            this.hp--;
            this.balise_perso.src = '../Images/playerHit.png';
        }
    }
    
    this.death = function () {
        this.balise_perso.src = '';
    }
}
function Player() {
	this.coordY;
	this.coordX;
	this.score = 0;
	this.hp = 5;
	this.balise_perso;
	this.init = function() {
		this.balise_perso = document.getElementById('player');
		this.coordX = this.balise_perso.style.left;
		this.coordY = this.balise_perso.style.top;
		//this.balise_perso.src = '../Images/player.png';
		this.spawn();	
	}
	this.spawn = function() {
                img = document.createElement("img");
                img.src = "./Images/player.png";
                img.style.position = "absolute";
                img.style.top = this.coordY + "px";
                img.style.left = this.coordX + "px";
                img.style.width = "100%";
                this.balise_perso.appendChild(img);
//		this.balise_perso.style.top = this.coordY + "px";
//		this.balise_perso.style.left = this.coordX + "px";
	}
	this.move = function(direction) {
		if(direction == 0) {
			this.up();
		} else {
			this.down();
		}
	}
	this.up = function() {
		if(this.coordY > 1) {
			this.coordY --;
			this.spawn();
		}
	}
	this.down = function() {
		if(this.coordY < 1000) {
			this.coordY ++;
			this.spawn();
		}
	}
	this.shoot = function() {

	}
	this.hit = function(bullet) {
		if(this.hp == 0) {
			this.death();
		} else {
			this.hp--;
			this.balise_perso.src = '../Images/playerHit.png';
		}
	}
	this.death = function() {
		this.balise_perso.src = '';
	}
}
function Shot(shooter) {
	this.coordX;
	this.coordY;
	this.direction;
	//this.dmg;

	this.img_shoot;

	this.balise_shoot;

	this.shot;

	//Object.getPrototypeOf(shooter).constructor.name

	this.init = function() {
		
		this.img_shoot = document.createElement("img");
		this.shot = document.createElement("div");

		if(Object.getPrototypeOf(shooter).constructor.name == "Enemy") {
			this.balise_shoot = document.getElementById('enemy');
			this.img_shoot.src = "./Images/Bullet2.png";
		} else {
			this.balise_shoot = document.getElementById('player');
			this.img_shoot.src = "./Images/Bullet.png";
		}		
		
		this.img_shoot.style.width = "100%";
		
		this.coordX = shooter.coordX;
		this.coordY = shooter.coordY;
		
		this.spawn();
	}

	this.spawn = function() {
		this.shot.style.left = this.coordX + "px";
		this.shot.appendChild(this.img_shoot);
		this.balise_shoot.appendChild(this.shot);
	}

	/**
	* Moves the bullet
	*@param {type} shooter :
	* 				Enemy : left
	*				else : right
	*/
	this.move = function() {
		if(Object.getPrototypeOf(shooter).constructor.name == "Enemy") {
			this.left();
		} else {
			this.right();
		}
	}

	/**
	* The bullet goes left
	*/
	this.left = function() {
		if(this.coordX > 0) {
			this.coordX = this.coordX-10;
			this.spawn();
		} else {
			this.death();
		}
	}

	/**
	* The bullet goes right
	*/
	this.right = function() {
		if(this.coordX < window.innerWidth) {
			this.coordX = this.coordX+10;
			this.spawn();
		} else {
			this.death();
		}
	}

	/**
	* A bullet hits when it collides with a player or an enemy
	*/
	this.hit = function(shot) {
		if(this.coordX == shot.coordX && this.coordY == shot.coordY) {
			shot.hit();
			this.death();
		}
		return true;
	}

	/**
	* The bullet is out of the window
	*/
	this.death = function() {
		this.img_shoot.src = "";
	}
}
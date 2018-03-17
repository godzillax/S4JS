function Enemy(x, y, hp, speed, w, h, cadency, pts, div, imgsrc) {
    this.coordX;
    this.coordY;
    this.health;
    this.speed;
    this.width;
    this.height;
    this.pace;
    this.points;
    this.image;
    this.lastShot = 0;
    this.disappear = 20;



    this.init = function () {
        this.coordX = x;
        this.coordY = y;
        this.health = hp;
        this.speed = speed;
        this.width = w;
        this.height = h;
        this.pace = cadency;
        this.points = pts;
        this.image = document.createElement("img");
        this.image.style.top = this.coordX + "px";
        this.image.style.left = this.coordY + "px";

        this.image.style.position = "fixed";
        if (!imgsrc) {
            this.image.src = "./Images/Drone.png";
        } else
            this.image.src = this.imagesrc;
        this.image.style.position = "fixed";
        this.image.style.width = this.width + "px";
        this.spawn();
    }

    this.spawn = function () {
        if (!div) {
            document.getElementById("enemy").appendChild(this.image)
        } else
            div.appendChild(this.image);
    }

    this.updatePosition = function () {
        if (!this.removed) {
            if (this.coordX < -this.width) {
                this.death();
            } else {
                if (!div) {
                    document.getElementById("enemy").removeChild(this.image)
                } else {
                    div.removeChild(this.image);
                    this.image.style.top = this.coordY + "px";
                    this.image.style.left = this.coordX + "px";
                    this.spawn();
                }
            }
        } else {
            this.disappear--;
            if (this.disappear == 0)
                div.removeChild(this.image);
        }
    }
    /**
     * 
     * @param entier entre 0 et 7 indiquant la direction a
     */
    this.move = function (a) {
        switch (a) {
            case 0 :
                this.moveLeft();
                this.updatePosition();
                break;
            case 1 :
                this.moveLeft();
                this.moveUp();
                this.updatePosition();
                break;
            case 2 :
                this.moveUp();
                this.updatePosition();
                break;
            case 3 :
                this.moveUp();
                this.moveRight();
                this.updatePosition();
                break;
            case 4 :
                this.moveRight();
                this.updatePosition();
                break;
            case 5 :
                this.moveRight();
                this.moveDown();
                this.updatePosition();
                break;
            case 6 :
                this.MoveDown();
                this.updatePosition();
                break;
            case 7 :
                this.moveDown();
                this.moveLeft();
                this.updatePosition();
                break;
        }
    }

    this.moveUp = function () {
        this.coordY += this.speed;
    }

    this.moveDown = function () {
        this.coordY -= this.speed;
    }

    this.moveLeft = function () {
        this.coordX -= this.speed;
    }

    this.moveRight = function () {
        this.coordX += this.speed;
    }

    /**
     * 
     * @param player or shot obj
     */
    this.collision = function (obj) {
        var col = false;
        if (this.coordX <= obj.coordX + obj.width) {
            if ((this.coordY < obj.coordY) && (this.coordY + this.height > obj.coordY)) {
                col = true;
            }
            if ((this.coordY > obj.coordY) && (this.coordY < obj.coordY + obj.height)) {
                col = true;
            }
        }
        if (col) {
            obj.hit();
            this.hit();
        }
        return col;
    }

    this.collisionPlayer = function () {
        if ((this.coordX >= player.coordX && this.coordX <= player.coordX + player.width) || (this.coordX + this.width >= player.coordX && this.coordX + this.width < player.coordX + player.width)) {
            if ((this.coordY >= player.coordY && this.coordY <= player.coordY + player.height) || (this.coodY + this.height >= player.coordY && this.coodY + this.height <= player.coordY + player.height)) {
                player.hit();
                this.hit();
            }
        }
    }

    this.hit = function () {
        this.health--;
        if (this.health === 0) {
            this.death();
        }
    }

    this.death = function () {
        if (!this.removed) {
            this.health = 0;
            this.removed = 1;
            div.removeChild(this.image);
            this.image.src = "./Images/explosion.png";
            div.appendChild(this.image)
        }
    }

    this.shoot = function () {
        if (this.coordX < window.innerWidth && this.coordY < window.innerHeight && this.coordX > 0 && this.coordY > 0) {
            if (this.pace != -1) {
                t = timestamp();
                if (t > this.lastShot + this.pace * 1000) {
                    this.lastShot = t;
                    shot = new Shot(this, this.speed);
                    shot.init();
                    shot.left();
                    shotArray.push(shot);
                }
            }
        }
    }

    this.addScore = function () {
        player.score += this.points;
    }

    this.willBeDead = function () {
        return this.health === 1;
    }
}
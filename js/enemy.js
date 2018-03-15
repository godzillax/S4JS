function Enemy(x, y, hp, speed, w, h, cadency, pts, div, imgsrc){
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

    
        
    this.init= function(){
        this.coordX = x;
        this.coordY = y;
        this.health = hp;
        this.speed = speed;
        this.width = w;
        this.height = h;
        this.pace = cadency;
        this.points = pts;
        
        this.image = document.createElement("img");
        this.image.top = this.coordY;
        this.image.left = this.coordX;
        this.image.style.position = "fixed";
        if (!imgsrc){
            this.image.src = "./Images/Drone.png";
        }
        else this.image.src = this.imagesrc;
        this.image.style.width = this.width;
        this.spawn();
    }
    
    this.spawn= function(){
        if (!div) {
            document.getElementById("enemy").appendChild(this.image)
        }
        div.appendChild(this.image);
    }
    /**
     * 
     * @param entier entre 0 et 7 indiquant la direction a
     */
    this.move = function(a){
        switch(a){
            case 0 : 
                this.moveLeft();
                break;
            case 1 : 
                this.moveLeft();
                this.moveUp();
                break;
            case 2 : 
                this.moveUp();
                break;
            case 3 : 
                this.moveUp();
                this.moveRight();
                break;
            case 4 : 
                this.moveRight();
                break;
            case 5 : 
                this.moveRight();
                this.moveDown();
                break;
            case 6 : 
                this.MoveDown();
                break;
            case 7 : 
                this.moveDown();
                this.moveLeft();
                break;
        }
    }
    
    this.moveUp= function(){
        this.coordY += speed;
    }
    
    this.moveDown= function(){
        this.coordY -= speed;
    }
    
    this.moveLeft= function(){
        this.coordX -= speed;
    }
    
    this.moveRight= function(){
        this.coordX += speed;
    }
    
    /**
     * 
     * @param player or shot obj
     */
    this.collision = function(obj){
        var col = false;
         if (this.coordX <= obj.coordX + obj.width){
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
    
    this.collisionPlayer= function(){
        var col = false;
         if (this.coordX <= player.coordX + player.width){
             if ((this.coordY < player.coordY) && (this.coordY + this.height > player.coordY)) {
                 col = true;
             }
             if ((this.coordY > player.coordY) && (this.coordY < player.coordY + player.height)) {
                 col = true;
             }
         }
         if (col) {
             player.hit();
             this.hit();
         }
         return col;
    }
    
    this.hit= function(){
        this.health --;
        if (this.health === 0){
            this.death;
        }
    }
    
    this.death= function(){
        div.removeChild(this.image);
        this.addScore();
    }
    
    this.shoot= function(){
        if (this.coordX<window.innerWidth && this.coordY<window.innerHeight){    
            if (this.pace != -1){
                t = timestamp();
                if (t > this.lastShot + (this.pace * 1000)) {
                    this.lastShot = t;
                    shot = new Shot(this);
                    shot.init();
                    shot.right();
                    shotArray.push(shot);
                }
            }
        }
    }
    
    this.addScore= function(){
        player.score += this.points;
    }
}
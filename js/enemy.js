function enemy(x, y, hp, speed, size, pace, points){
    this.coordX;
    this.coordY;
    this.health;
    this.speed;
    this.size;
    this.pace;
    this.points;
    
    function move(a){
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
    
    function moveUp(){
        this.coordY += speed;
    }
    
    function moveDown(){
        this.coordY -= speed;
    }
    
    function moveLeft(){
        this.coordX -= speed;
    }
    
    function moveRight(){
        this.coordX += speed;
    }
    
    function shoot(){
        
    }
    
    
    //renvoie true si this.y<=obj.y<=y+size || this.y<=obj.y+obj.size<=y+size Et pareil pour x
    function collision(obj){
         
    }
    
    function hit(){
        this.health --;
        if (this.health === 0){
            this.die;
        }
    }
    
    function die(){
        
    }
    
    function spawn(){
        
    }
    
    function init(){
        
    }
    
    function addScore(){
        
    }
}
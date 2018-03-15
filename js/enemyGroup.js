function EnemyGroup(nbEnemies, pattern) {
    this.nbEnemies;
    this.pattern = 1;
    this.balGrp;
    this.img = "./Images/Drone.png"

    /**
     * Inititates the group
     */
    this.init = function () {
        if (nbEnemies)
            this.nbEnemies = nbEnemies;
        if (pattern)
            this.pattern = pattern;
        this.arrayEnemies = new Array();
        this.spawn();
    }
    
    this.spawn = function() {
        eval("this.spawnPattern" + this.pattern + "()");
    }
    
    /**
     * First enemy spawn pattern, they will spawn randomly
     * and go straight to the left. They can shoot.
     */
    this.spawnPattern1 = function() {
        let y = window.innerWidth + 50;
        let x;
        
        balEnemy = document.getElementById('enemy');
        this.balGrp = document.createElement("div");
        balEnemy.appendChild(this.balGrp);
        
        for (i = 0; i<this.nbEnemies; i++) {
            x = Math.floor(Math.random() * window.innerHeight);
            y = y + 50;
            
            this.arrayEnemies[i] = new Enemy(x, y, 1, 10, 90, 75, 1, 15, this.balGrp);
            this.arrayEnemies[i].init();
        }
    }
    
    this.move = function() {
        for (i = 0; i<this.arrayEnemies.length; i++) {
            this.arrayEnemies[i].move(0);
        }
    }
    
    this.manageDeath = function () {
        let tab = new Array();
        for (i = 0; i<this.arrayEnemies.length; i++) {
            if (this.arrayEnemies[i].health == 0) {
                tab.push(i)
            }
        }
        for (i = 0; i<tab.length; i++) {
            this.arrayEnemies.splice(tab[i], 1);
        }
    }
    
    this.manage = function() {
        this.manageDeath();
        this.move();
        if (this.arrayEnemies.length == 0)
            enemiesArray.splice(enemiesArray.indexOf(this), 1);
    }
}
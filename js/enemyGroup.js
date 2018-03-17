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

    /**
     * Spawn the enemies following the indicated pattern
     */
    this.spawn = function () {
        if (this.pattern <= this.nbpattern)
            eval("this.spawnPattern" + this.pattern + "()");
        else
            this.spawnPattern1();
    }

    /**
     * First enemy spawn pattern, they will spawn randomly
     * and go straight to the left. They can shoot.
     */
    this.spawnPattern1 = function () {
        let x = window.innerWidth + 50;
        let y;

        balEnemy = document.getElementById('enemy');
        this.balGrp = document.createElement("div");
        balEnemy.appendChild(this.balGrp);

        for (i = 0; i < this.nbEnemies; i++) {
            y = Math.floor(Math.random() * window.innerHeight);
            x = x + 50 + Math.floor(Math.random() * 100);

            this.arrayEnemies[i] = new Enemy(x, y, 1, 5 + Math.floor(Math.random() * 10), 90, 75, (4 + Math.random() * 16), 15, this.balGrp);
            this.arrayEnemies[i].init();
        }
    }
// 5 + Math.floor(Math.random() * 10)
    this.move1 = function () {
        for (i = 0; i < this.arrayEnemies.length; i++) {
            this.arrayEnemies[i].move(0);
            this.arrayEnemies[i].shoot();
        }
    }

    this.move = function () {
        eval("this.move" + this.pattern + "()");
    }


    this.manageDeath = function () {
        let tab = new Array();
        for (i = 0; i < this.arrayEnemies.length; i++) {
            if (this.arrayEnemies[i].health <= 0) {
                tab.push(i)
            }
        }

        if (tab.length > 0) {
            for (i = tab.length-1; i >= 0; i--) {
                this.arrayEnemies.splice(tab[i], 1);
            }
        }
    }
    
    this.manageCollision = function () {
        for (i = 0; i < this.arrayEnemies.length; i++) {
            this.arrayEnemies[i].collisionPlayer();
        }
    }

    this.manage = function () {
        this.move();
        this.manageCollision();
        this.manageDeath();
        if (this.arrayEnemies.length == 0) {
            enemiesArray.splice(enemiesArray.indexOf(this), 1);
        }
    }
}

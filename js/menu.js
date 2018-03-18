function Menu() {
    this.menuBar;
    this.musicButton;
    this.playButton;
    this.pauseButton;
    this.quitButton;

    this.init = function () {
        this.menuBar = document.createElement("div");
        this.menuBar.style.position = "fixed";
        this.menuBar.style.left = "400px";

        // this.playButton = document.createElement("img");
        // this.playButton.src = "./Images/start.png";
        // this.playButton.style.height = "70px";

        this.pauseButton = document.createElement("img");
        this.pauseButton.src = "./Images/pause.png";
        this.pauseButton.style.height = "70px";

        this.quitButton = document.createElement("img");
        this.quitButton.src = "./Images/quit.png";
        this.quitButton.style.height = "70px";

        this.musicButton = document.createElement("img");
        this.musicButton.src = "./Images/soundOn.png";
        this.musicButton.style.height = "70px";

        this.quitButton.addEventListener("click", this.stopGame.bind(this));
        this.musicButton.addEventListener("click", this.stopMusic.bind(this))
        this.pauseButton.addEventListener("click", this.pauseGame.bind(this));
        // this.playButton.addEventListener("click", this.startGame.bind(this));


        this.display();
    }

    this.display = function () {
        // this.menuBar.appendChild(this.playButton);
        this.menuBar.appendChild(this.pauseButton);
        this.menuBar.appendChild(this.quitButton);
        this.menuBar.appendChild(this.musicButton);
        document.getElementById("playground").appendChild(this.menuBar);
    }

    this.stopMusic = function () {
        this.musicButton.src = "./Images/soundOff.png";
        
        balAudio = document.getElementById("audio");
        balAudio.firstElementChild.pause();

        this.musicButton.removeEventListener("click", this.stopMusic.bind(this));
        this.musicButton.addEventListener("click", this.restartMusic.bind(this));
    }

    this.restartMusic = function () {
        this.musicButton.src = "./Images/soundOn.png";
        
        balAudio = document.getElementById("audio");
        balAudio.firstElementChild.play();

        this.musicButton.removeEventListener("click", this.restartMusic.bind(this));
        this.musicButton.addEventListener("click", this.stopMusic.bind(this));
    }

    this.startGame = function () {
        this.menuBar.removeChild(this.quitButton);
        resetGame();

        this.quitButton.removeEventListener("click", this.startGame.bind(this));
        this.quitButton.addEventListener("click", this.stopGame.bind(this));
    }

    this.stopGame = function () {
        this.menuBar.innerHTML = "";

        fps = 0;
        
        announcer.print("YOUR SCORE : " + player.score);

        this.quitButton.src = "./Images/start.png";
        this.menuBar.appendChild(this.quitButton);

        this.quitButton.removeEventListener("click", this.stopGame.bind(this));
        this.quitButton.addEventListener("click", this.startGame.bind(this));
    }

    this.pauseGame = function () {
        document.getElementById("playground").style.opacity = 0.5;
        
        this.pauseButton.src = "./Images/restart.png";
                
        fps = 0;
        announcer.print("PAUSE");

        this.pauseButton.removeEventListener("click", this.pauseGame.bind(this));
        this.pauseButton.addEventListener("click", this.resumeGame.bind(this));
    }

    this.resumeGame = function () {
        document.getElementById("playground").style.opacity = 1.0;
        
        this.pauseButton.src = "./Images/pause.png";
                
        fps = 70;
        announcer.removeMessage();

        this.pauseButton.removeEventListener("click", this.resumeGame.bind(this));
        this.pauseButton.addEventListener("click", this.pauseGame.bind(this));
    }

}
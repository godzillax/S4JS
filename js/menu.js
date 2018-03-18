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

        this.playButton = document.createElement("img");
        this.playButton.src = "./Images/start.png";
        this.playButton.style.height = "70px";

        this.pauseButton = document.createElement("img");
        this.pauseButton.src = "";
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
        this.playButton.addEventListener("click", this.startGame.bind(this));


        this.display();
    }

    this.display = function () {
        document.getElementById("playground").appendChild(this.menuBar);
        this.menuBar.appendChild(this.playButton);
        this.menuBar.appendChild(this.pauseButton);
        this.menuBar.appendChild(this.quitButton);
        this.menuBar.appendChild(this.musicButton);
    }

    this.stopMusic = function () {
        console.log("STOPMUSIC")

        this.musicButton.parentNode.removeChild(this.musicButton)

        this.musicButton.src = "./Images/soundOff.png";
        this.menuBar.appendChild((this.musicButton))

        balAudio = document.getElementById("audio");
        balAudio.firstElementChild.volume = 0;
        balAudio.firstElementChild.pause();


        this.musicButton.removeEventListener("click", this.stopMusic.bind(this));
        this.musicButton.addEventListener("click", this.restartMusic.bind(this));
    }

    this.restartMusic = function () {
        console.log("restartMusic")

        this.musicButton.parentNode.removeChild(this.musicButton)
        
        this.musicButton.src = "./Images/soundOn.png";
        this.menuBar.appendChild(this.musicButton)

        balAudio = document.getElementById("audio");
        balAudio.firstElementChild.volume = 0.15;
        balAudio.firstElementChild.play();

        this.musicButton.removeEventListener("click", this.restartMusic.bind(this));
        this.musicButton.addEventListener("click", this.stopMusic.bind(this));
    }

    this.startGame = function () {

    }

    this.pauseGame = function () {

    }

    this.resumeGame = function () {

    }

    this.stopGame = function () {

    }
}
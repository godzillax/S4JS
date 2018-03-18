function Menu() {
	this.menuBar;
	this.musicButton;
	this.playButton;
	this.pauseButton;
	this.quitButton;

	this.init = function() {
		this.menuBar = document.createElement("div");
		this.menuBar.style.position = "fixed";
		this.menuBar.style.left = "400px";

		this.playButton = document.createElement("img");
		
		this.playButton.src = "./Images/start.png";
		this.playButton.addEventListener("click", this.startGame);
		this.playButton.style.height = "70px";

		this.pauseButton = document.createElement("img");
		
		this.pauseButton.src = "";
		this.pauseButton.addEventListener("click", this.pauseGame);
		this.pauseButton.style.height = "70px";

		this.quitButton = document.createElement("img");
		
		this.quitButton.src = "./Images/quit.png";
		this.quitButton.addEventListener("click", this.stopGame);
		this.quitButton.style.height = "70px";
		
		this.musicButton = document.createElement("img");
		
		this.musicButton.src = "./Images/soundOn.png";
		this.musicButton.addEventListener("click", this.stopMusic, true);
		this.musicButton.style.height = "70px";

		this.display();
	}

	this.display = function() {
		document.getElementById("playground").appendChild(this.menuBar);
		this.menuBar.appendChild(this.playButton);
		this.menuBar.appendChild(this.pauseButton);
		this.menuBar.appendChild(this.quitButton);
		this.menuBar.appendChild(this.musicButton);

	}

	this.stopMusic = function() {
		balAudio = document.getElementById("audio");
		
		this.musicButton.src = "";
		this.musicButton.src = "./Images/soundOff.png";
		
		// balAudio.firstElementChild.volume = 0;
		balAudio.firstElementChild.pause();
		this.musicButton.addEventListener("click", this.restartMusic, true);
	}

	this.restartMusic = function() {
		balAudio = document.getElementById("audio");

		// balAudio.firstElementChild.volume = 0.15;
		balAudio.firstElementChild.play();
		//this.musicButton.removeEventListener("click", this.restartMusic, true);
		this.musicButton.src = "";
		this.musicButton.src = "./Images/soundOn.png";
		this.musicButton.addEventListener("click", this.stopMusic, true);
	}

	this.startGame = function() {

	}

	this.pauseGame = function() {

	}

	this.resumeGame = function() {

	}

	this.stopGame = function() {

	}
}
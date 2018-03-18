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
		
		this.playButton.setAttribute("onclick", "this.startGame()");
		this.playButton.src = "./Images/start.png";
		this.playButton.style.height = "70px";

		this.pauseButton = document.createElement("img");
		
		this.pauseButton.setAttribute("onclick", "this.pauseGame()");
		this.pauseButton.src = "";
		this.pauseButton.style.height = "70px";

		this.quitButton = document.createElement("img");
		
		this.quitButton.setAttribute("onclick", "this.stopGame()");
		this.quitButton.src = "./Images/quit.png";
		this.quitButton.style.height = "70px";
		
		this.musicButton = document.createElement("img");
		
		this.musicButton.setAttribute("onclick", "this.stopMusic()");
		this.musicButton.src = "./Images/soundOn.png";
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
		
		balAudio.firstElementChild.volume = 0;

		this.musicButton.setAttribute("onclick", "this.restartMusic()");
		this.musicButton.src = "./Images/soundOff.png";
	}

	this.restartMusic = function() {
		balAudio = document.getElementById("audio");

		balAudio.firstElementChild.volume = 0.15;

		this.musicButton.setAttribute("onclick", "this.stopMusic()");
		this.musicButton.src = "./Images/soundOn.png";
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
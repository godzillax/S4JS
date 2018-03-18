function Announcer () {
    this.showMessage = 60; // Number of frames the message will be shown
    this.div;
    
    this.init = function() {
        this.div =document.createElement("h1");
        document.getElementById("announcer").appendChild(this.div)
    }
    
    /**
     * Write the message on the screen
     * @param {String} s The message to be printed
     * @returns {undefined}
     */
    this.setMessage = function(s) {
        this.div.innerHTML = s;
        this.showMessage = 60;
    }
    
    this.setLongMessage= function(s) {
        this.div.innerHTML = s;
        this.showMessage = 300;
    }
    
    this.removeMessage = function () {
        this.div.innerHTML = "";
    }
    
}


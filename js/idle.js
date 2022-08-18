class IdleHelper {
    static timeout;

    static launch() {
        const resetTimer = this.resetTimeout.bind(this);

        window.onload = resetTimer;
        window.onmousemove = resetTimer;
        window.onmousedown = resetTimer;      
        window.ontouchstart = resetTimer; 
        window.ontouchmove = resetTimer;  
        window.onclick = resetTimer;      
        window.onkeydown = resetTimer;   
        window.addEventListener('scroll', resetTimer, true); 

        console.log("Idle Checker started!")
    }

    static resetTimeout() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.promptUser, 60000); 
    }

    static promptUser() {
        if(!confirm("Are you here?")) {
            window.close();
        }
    }
}

IdleHelper.launch();
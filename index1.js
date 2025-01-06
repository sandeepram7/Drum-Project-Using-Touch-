drumList = [".w", ".a", ".s", ".d", ".j", ".k", ".l"];

for (var i = 0; i < drumList.length; i++){
    document.querySelector(drumList[i]).addEventListener("click", handleTouch);
}

function handleTouch(event){
    var buttonInnerHTML = this.innerHTML;
    animateButton(event)
    switch(buttonInnerHTML){
        case "w":
            playSound("./sounds/kick-drum.mp3");
            break;
        case "a":
            playSound("./sounds/snare.mp3");
            break;
        case "s":
            playSound("./sounds/hi-hat.mp3");
            break;
        case "d":
            playSound("./sounds/808-bass.mp3");
            break;
        case "j":
            playSound("./sounds/clap.mp3");
            break;
        case "k":
            playSound("./sounds/tom-2.mp3");
            break;
        case "l":
            playSound("./sounds/crash.mp3");
            break;
    }
}

function playSound(soundFile){
    var audio = new Audio(soundFile);
    audio.play();
}
function animateButton(event){
    var button = event.target
    if (button){
        button.classList.add("pressed");
        setTimeout(()=> button.classList.remove("pressed"),100);
    }
}
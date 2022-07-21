var numOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var element = this.innerHTML;
        playSound(element);
        buttonAnimation(element);
    })
    
}

function playSound(ele){
    switch (ele) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        default:
            // console.log(ele);
            break;
    }
}

document.addEventListener('keypress',function (event){
    // console.log(event.key);
    playSound(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(pressedKey){
    var active=document.querySelector("."+pressedKey);

    active.classList.add("pressed");

    setTimeout(() => {
        active.classList.remove("pressed");
    }, 100);
}
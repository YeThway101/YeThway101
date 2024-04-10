//detecting Buttom press
for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttomInnerHTML = this.innerHTML;
        makeSound(buttomInnerHTML);
        buttomAnimation(buttomInnerHTML);    
    });
}

//Detecting bottom press
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttomAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
            break;
                
        case "d":
            var tom2 = new Audio("sounds/tom-4.mp3");
            tom2.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/snare.mp3");
            tom2.play();
            break;

        case "k":
            var tom2 = new Audio("sounds/crash.mp3");
            tom2.play();
            break;

        case "l":
            var tom2 = new Audio("sounds/kick-bass.mp3");
            tom2.play();
            break;
            

        default:console.log(buttomInnerHTML);
   }
}

function buttomAnimation(currentkey){
    var activeButtom = document.querySelector("." + currentkey);
    activeButtom.classList.add("pressed");
    setTimeout(function(){
        activeButtom.classList.remove("pressed");
    }, 100);
}




// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
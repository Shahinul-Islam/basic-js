
// all the button selected with same class name
for(var i = 0; i < 3; i++){
  let myBtn = document.querySelectorAll(".audio-btn")[i];
  myBtn.addEventListener("click", function(){
    let text = this.innerHTML;
    console.log(text);
    audioPlay(text);
    playAnimation(text);
  })
}

// function called upon keypress
document.addEventListener("keypress", function(event){
    let text = event.key;
    audioPlay(text);
    playAnimation(text);
})


// audio play function design

function audioPlay(text){
    switch(text){
        case "a":
         var audio = new Audio('audio/sample-6s.mp3');
         audio.play();
         break;
        case "b":
         var audio = new Audio('audio/sample-9s.mp3');
         audio.play();
         break;
        case "c":
         var audio = new Audio('audio/sample-12s.mp3');
         audio.play();
         break;
       }
}


// animation function design 
function playAnimation(text){
    let animationBtn = document.querySelector("."+text);
    animationBtn.classList.add("anim");

    setTimeout(function(){
        animationBtn.classList.remove("anim");
    },1000)
}




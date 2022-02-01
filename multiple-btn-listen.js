
let amarKotha = document.querySelector(".btnTextShow");

for(var i = 0; i<3; i++){
    let myBtn = document.querySelectorAll(".btn-text-dekhao")[i];
    myBtn.addEventListener("click",function(){
        var myText = this.innerHTML;
        amarKotha.innerHTML = myText + " is clicked"
    })
}



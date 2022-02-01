
let photos = ["images/shahin01.jpg", "images/shahin02.jpg", "images/shahin03.jpg"]
let amarImage = document.querySelector("#myImage");
let count = 0;

function next(){
    count++
    if(count>=photos.length){
        count = 0;
        amarImage.src=photos[count]
    }
    else{

        amarImage.src= photos[count]
    }
}

function previous(){
    count--
    if(count < 0){
        count = photos.length -1;
        amarImage.src=photos[count]
    }
    else{

        amarImage.src= photos[count]
    }
}

let amarHead = document.querySelector(".head-1");

amarHead.addEventListener("mouseover", function(){
    amarHead.classList.add("head-style");
});

amarHead.removeEventListener("mouseout", function(){
    amarHead.classList.remove("head-style");
});


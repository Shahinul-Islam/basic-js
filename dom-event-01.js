console.clear()
let input = document.querySelector("input[name='name']");
input.addEventListener("change", eventHandler);

function eventHandler(event){
    console.log(event.target)
}
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");

let body = document.querySelector('body')

box1.addEventListener("click", (e)=>{
    body.style.backgroundColor = "red";
    let audio= new Audio("audio.wav")
audio.play()
})
box2.addEventListener("click", (e)=>{
    body.style.backgroundColor = "green";
    let audio= new Audio("audio.wav")
audio.play()
})
box3.addEventListener("click", (e)=>{
    body.style.backgroundColor = "yellow";
    let audio= new Audio("audio.wav")
audio.play()
})
box4.addEventListener("click", (e)=>{
    body.style.backgroundColor = "purple";
    let audio= new Audio("audio.wav")
audio.play()
})
box5.addEventListener("click", (e)=>{
    body.style.backgroundColor = "blue";
    let audio= new Audio("audio.wav")
audio.play()
})
box6.addEventListener("click", (e)=>{
    body.style.backgroundColor = "pink";
    let audio= new Audio("audio.wav")
audio.play()
})
box7.addEventListener("click", (e)=>{
    body.style.backgroundColor = "black";
    let audio= new Audio("audio.wav")
audio.play()
let heading= document.getElementById("heading");
heading.style.color="white"
heading.style.borderBottom="2px solid white"

})
box8.addEventListener("click", (e)=>{
    body.style.backgroundColor = "orangered";
    let audio= new Audio("audio.wav")
audio.play()
})




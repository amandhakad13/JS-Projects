// const red = document.getElementById("red");
// const purple = document.getElementById("purple");
// const crimson = document.getElementById("crimson");
// const orangered = document.getElementById("orangered");
// const blue = document.getElementById("blue");
// const pink = document.getElementById("pink");

// const body = document.body;

// red.addEventListener('click', ()=> {
//     body.style.backgroundColor = "red";
// })

// purple.addEventListener('click', ()=> {
//     body.style.backgroundColor = "purple";
// })

// crimson.addEventListener('click', ()=> {
//     body.style.backgroundColor = "crimson";
// })

// orangered.addEventListener('click', ()=> {
//     body.style.backgroundColor = "orangered";
// })

// blue.addEventListener('click', ()=> {
//     body.style.backgroundColor = "blue";
// })

// pink.addEventListener('click', ()=> {
//     body.style.backgroundColor = "pink";
// })

const btn = document.querySelectorAll("button");

const body = document.body;

btn.forEach((button)=> {
    button.addEventListener('click', ()=> {
        body.style.backgroundColor = button.id;
    })
})
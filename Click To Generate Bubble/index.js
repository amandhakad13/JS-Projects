const body = document.body;
const main = document.getElementById("main");

body.addEventListener(("click"), (event)=> {
    const div = document.createElement("div");
    div.id = "circle";

    const leftX = event.clientX;
    const topY = event.clientY;

    div.style.top = `${topY-25}px`;
    div.style.left = `${leftX-25}px`;

    const colors = ["red", "purple", "blue", "crimson", "pink", "green"];
    const index1 = Math.floor(Math.random()*colors.length);
    div.style.backgroundColor = colors[index1];

    const texts = ["Hi", "Hello World", "Hi, there", "Be Happy", "Keep Smiling"];
    const index2 = Math.floor(Math.random()*texts.length);
    div.textContent = texts[index2];

    setTimeout(()=>{
        div.remove();
    }, 5000);

    main.appendChild(div);
})
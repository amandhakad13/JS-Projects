const btn = document.querySelector("button");
const element = document.querySelector("h2");

btn.addEventListener("click", ()=> {

    const quotes = [
        "It is better to fail in originality than to succeed in imitation.",
        "The road to success and the road to failure are almost exactly the same.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Success is getting what you want; happiness is wanting what you get.",
        "You can’t be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.",
        "When I believe in something, I’m like a dog with a bone.",
        "The standard you walk past is the standard you accept.",
        "I’ve searched all the parks in all the cities and found no statues of committees."
    ];

    const index = Math.floor(Math.random()*quotes.length);

    element.textContent = quotes[index];
});
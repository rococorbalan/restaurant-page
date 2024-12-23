// home.js
import grizzlyDrink from "../images/grizzly.png";
import blackDrink from "../images/black.jpg";
import koalaDrink from "../images/koala.png";
import pandaDrink from "../images/panda.png";

function changeToHome(element, button){
    const title = document.createElement("div");
    title.classList.add("content-title");
    title.textContent = "Welcome to Bear Cafe!";
    element.appendChild(title);

    const body = document.createElement("div");
    body.classList.add("content-body");
    body.textContent = "The best bear-themed cafe ever! Try our finest drinks and snacks. Part of our profit goes to organizations to help bears!"
    element.appendChild(body);

    // Images
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("content-img");

    const grizzly = document.createElement("img");
    grizzly.src = grizzlyDrink;
    imgContainer.appendChild(grizzly);

    const black = document.createElement("img");
    black.src = blackDrink;
    imgContainer.appendChild(black);
    
    const koala = document.createElement("img");
    koala.src = koalaDrink;
    imgContainer.appendChild(koala);

    const panda = document.createElement("img");
    panda.src = pandaDrink;
    imgContainer.appendChild(panda);

    element.appendChild(imgContainer);

    button.classList.add("home");
}

export { changeToHome };
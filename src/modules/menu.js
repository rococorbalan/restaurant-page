// menu.js
import grizzlyDrink from "../images/grizzly.png";
import blackDrink from "../images/black.jpg";
import koalaDrink from "../images/koala.png";
import pandaDrink from "../images/panda.png";

function createMenuElement (image, title, text) {
    const menuElement = document.createElement("div");
    menuElement.classList.add("menu-element");

    const elementTitle = document.createElement("div");
    elementTitle.classList.add("element-title");
    elementTitle.textContent = title;
    
    const elementText = document.createElement("div");
    elementText.classList.add("element-text");
    elementText.textContent = text;

    const elementImage = document.createElement("img");
    elementImage.src = image;

    const elementDescription = document.createElement("div");
    elementDescription.classList.add("element-description");

    elementDescription.appendChild(elementTitle);
    elementDescription.appendChild(elementText);
    menuElement.appendChild(elementImage);
    menuElement.appendChild(elementDescription);

    return menuElement;
}

function changeToMenu(element, button){
    button.classList.add("menu");

    const menuBody = document.createElement("div");
    menuBody.classList.add("menu-body");

    menuBody.appendChild(createMenuElement(grizzlyDrink, "Grizzly Brew", "A bold and earthy espresso-based drink with hints of caramel and cinnamon."));
    menuBody.appendChild(createMenuElement(blackDrink, "Black Mocha", " A rich dark chocolate mocha infused with a hint of blackberry syrup."));
    menuBody.appendChild(createMenuElement(pandaDrink, "Panda Matcha", "A creamy matcha latte with a swirl of black sesame for a striking visual."));
    menuBody.appendChild(createMenuElement(koalaDrink, "Koala Hug", "A soothing eucalyptus and honey herbal tea, perfect for cozy vibes."));


    element.appendChild(menuBody)

}

export { changeToMenu };
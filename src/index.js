// index.js
import "./styles.css";
import { handleContent, handleButtons } from "./modules/changeHandler.js";
import { changeToMenu } from "./modules/menu.js";
import { changeToContact } from "./modules/contact.js";
import { changeToHome } from "./modules/home.js";

const navButtons = document.querySelectorAll("nav button")
console.log (navButtons)
const homeButton = navButtons[0];
const menuButton = navButtons[1];
const aboutButton = navButtons[2];

const contentDiv = document.getElementById("content");

handleContent(contentDiv);
handleButtons(navButtons);
changeToHome(contentDiv, homeButton);

menuButton.addEventListener("click", (event) => {
    handleContent(contentDiv);
    handleButtons(navButtons);
    changeToMenu(contentDiv, event.currentTarget);
})

aboutButton.addEventListener("click", (event) => {
    handleContent(contentDiv);
    handleButtons(navButtons);
    changeToContact(contentDiv, event.currentTarget);
})

homeButton.addEventListener("click", (event) => {
    handleContent(contentDiv);
    handleButtons(navButtons);
    changeToHome(contentDiv, event.currentTarget);
})

console.log("hola")
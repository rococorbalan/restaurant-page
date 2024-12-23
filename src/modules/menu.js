// menu.js
function changeToMenu(element, button){
    const body = document.createElement("div")
    body.textContent = "menu"
    element.appendChild(body);
    
    button.classList.add("menu")
}

export { changeToMenu };
// contact.js
function changeToContact(element, button){
    const body = document.createElement("div")
    body.textContent = "contact"
    element.appendChild(body);

    button.classList.add("contact");
}

export { changeToContact };
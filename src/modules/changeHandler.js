// changeHandler.js
function handleContent(element) {
    element.innerHTML = "";
}

function handleButtons(buttons) {
    buttons.forEach(button => {
        button.className = "";
    });
}

export { handleContent, handleButtons };
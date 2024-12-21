// changeHandler.js
function handleContent(element) {
    element.className = "";
}

function handleButtons(buttons) {
    buttons.forEach(button => {
        button.className = "";
    });
}

export { handleContent, handleButtons };
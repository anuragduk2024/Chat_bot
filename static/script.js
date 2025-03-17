let selectedBot = null;

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("user-input");

    // Send message when Enter key is pressed
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });
});

function selectBot(botImage) {
    selectedBot = botImage.replace('.png', ''); // Remove .png from the bot name

    fetch('/select_bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bot_name: botImage })
    });

    // Update the selected bot icon
    let botIcon = document.getElementById("selected-bot-icon");
    botIcon.src = `/static/icons/${botImage}`;
    botIcon.style.display = "block";  // Show the icon
}

function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();
    if (message === "") return;

    let chatBox = document.getElementById("chat-box");

    // Append user message (right side)
    let userMessage = document.createElement("div");
    userMessage.textContent = message;
    userMessage.classList.add("message", "user-message");
    chatBox.appendChild(userMessage);

    fetch('/send_message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        // Append bot response (left side)
        let botMessage = document.createElement("div");
        botMessage.textContent = data.response;
        botMessage.classList.add("message", "bot-message");
        chatBox.appendChild(botMessage);
    });

    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to latest message
}

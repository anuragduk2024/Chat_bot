// Theme Toggle
function toggleTheme() {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
}

let selectedBot = null;
let firstMessageSent = false;

// Select Bot
function selectBot(iconFileName, botName) {
    let chatbotIcon = document.getElementById("chatbot-icon");
    let inputField = document.getElementById("user-input");

    chatbotIcon.src = `/static/icons/${iconFileName}`;
    chatbotIcon.style.display = "block";
    inputField.disabled = false;
    inputField.placeholder = "Type a message...";
    inputField.focus();

    selectedBot = botName;
    firstMessageSent = true; // Ensure first message is skipped after bot selection
}

// Send Message
function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();
    if (message === "") return;

    let chatBox = document.getElementById("chat-box");
    let userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);

    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Bot Response
    let botMessage = document.createElement("div");
    botMessage.className = "message bot-message";

    if (!firstMessageSent) {
        botMessage.textContent = "Hello! How can I help you? Please select a chatbot first.";
        firstMessageSent = true;
    } else if (selectedBot) {
        botMessage.textContent = `${selectedBot} API is not connected, sorry.`;
    } else {
        botMessage.textContent = "Please select a chatbot first.";
    }

    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    inputField.focus();
}

// Enter Key Support for Sending Message
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Auto-focus on input field when the page loads
document.addEventListener("DOMContentLoaded", function() {
    let inputField = document.getElementById("user-input");
    inputField.disabled = false;
    inputField.placeholder = "Type a message...";
    inputField.focus();
});

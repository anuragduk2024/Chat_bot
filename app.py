from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

selected_bot = None  # Store the selected bot globally

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/select_bot', methods=['POST'])
def select_bot():
    global selected_bot
    data = request.json
    selected_bot = data.get('bot_name').replace('.png', '')  # Remove .png from the bot name
    return jsonify({"message": f"{selected_bot} selected"})

@app.route('/send_message', methods=['POST'])
def send_message():
    global selected_bot
    if not selected_bot:
        return jsonify({"response": "Please select a chatbot first."})
    return jsonify({"response": f"{selected_bot} API is not connected, sorry."})

if __name__ == '__main__':
    app.run(debug=True)

# The website will have:
# - A Google Sign-In button (functional) in the top-right.
# - A left sidebar listing AI bots (GPT, ClaudeAI, DeepSeek, GrokAI, Gemini, Mistral) with their icons.
# - A main chat interface similar to ChatGPT.
# - Clicking on an AI bot will display its icon on the left side of the message input box.
# - When a user sends a message, it will return "[Bot Name] API is not connected, sorry." if no real API is integrated.
# - The selected bot's icon will be displayed next to the message input box.
# - Pressing the Enter key will send the message automatically.

# Folder Structure:
# /project_folder
# ├── app.py  (this file)
# ├── templates/
# │   ├── index.html
# ├── static/
# │   ├── style.css
# │   ├── script.js

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

selected_bot = None  # Store the selected bot globally

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/select_bot', methods=['POST'])
def select_bot_route():
    global selected_bot
    data = request.json
    bot_name = data.get('bot_name')
    if bot_name:
        selected_bot = bot_name.replace('.png', '')  # Remove .png from the bot name
        return jsonify({"message": f"{selected_bot} selected"})
    return jsonify({"error": "No bot name provided"}), 400

@app.route('/send_message', methods=['POST'])
def send_message():
    global selected_bot
    data = request.json
    message = data.get('message')
    if not selected_bot:
        return jsonify({"response": "Please select a chatbot first."})
    if not message:
        return jsonify({"response": "No message provided."})
    return jsonify({"response": f"{selected_bot} API is not connected, sorry."})

if __name__ == '__main__':
    app.run(debug=True)
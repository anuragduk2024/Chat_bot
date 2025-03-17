# Chatbot Web App

A simple AI chatbot interface built using **Flask, HTML, CSS, and JavaScript**. This project allows users to select different AI bots and send messages.

## Features
- 🌙 **Light/Dark Theme Toggle**
- 🤖 **Selectable AI Bots** (GPT, ClaudeAI, DeepSeek, GrokAI, Gemini, Mistral)
- ✉️ **Send Messages** using **Enter key** or **Send button**
- 📢 **Initial Bot Greeting** if no bot is selected
- 🔗 **Google Sign-In Integration**
- 🛠 **API Placeholder** (Bots are not connected yet, but ready for integration)

## Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/anuragduk2024/Chat_bot.git
   cd Chat_bot
   ```

2. **Set Up a Virtual Environment (Optional, but Recommended)**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask App**
   ```bash
   flask run
   ```
   The app will be accessible at `http://127.0.0.1:5000/`

## File Structure
```
Chat_bot/
│-- static/
│   │-- style.css  # Styling
│   │-- script.js  # JavaScript Logic
│   │-- icons/     # Bot Icons
│-- templates/
│   │-- index.html # Main UI
│-- app.py        # Flask Server
│-- requirements.txt  # Dependencies
│-- README.md     # Project Documentation
```

## Future Enhancements
- 🔗 **Integrate AI APIs** (Gemini, GPT, Claude, etc.)
- 📱 **Mobile Responsive UI**
- 🔥 **Improved Chat History & UI Enhancements**

---
**Created by [ANURAG S S](https://github.com/anuragduk2024/)**


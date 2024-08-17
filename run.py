from flask import Flask, jsonify, request, render_template
from backend.api import api_bp
from backend.bot import start_telegram_bot

app = Flask(__name__)

# Register blueprint for API routes
app.register_blueprint(api_bp, url_prefix='/api')

# Serve frontend HTML files
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

if __name__ == '__main__':
    # Start the Telegram bot in a separate thread
    import threading
    bot_thread = threading.Thread(target=start_telegram_bot)
    bot_thread.start()
    
    # Run the Flask server
    app.run(host='0.0.0.0', port=5000)

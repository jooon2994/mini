import telebot
import logging

# Enable logging
logging.basicConfig(level=logging.INFO)

TOKEN = '7289662775:AAEeOB-MiJNYJSToqr3TATuAVtY-N9f0Ke4'
bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
    try:
        print(f"Received command: {message.text}")
        bot.reply_to(message, "Welcome to the Mini Shopping App!")
    except Exception as e:
        print(f"Error: {e}")

@bot.message_handler(func=lambda message: True)
def echo_all(message):
    try:
        print(f"Received message: {message.text}")
        bot.reply_to(message, "This is a response from your bot!")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    try:
        print("Bot is running...")
        bot.polling(none_stop=True)
    except Exception as e:
        print(f"Error while polling: {e}")

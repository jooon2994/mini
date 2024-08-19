from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Updater, CommandHandler, CallbackContext

def start(update: Update, context: CallbackContext):
    keyboard = [[InlineKeyboardButton("Open Shop", url="https://mini-beta-six.vercel.app/")]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text("Welcome To Ahadu Market Online Shopping! Click the button below to open the shop:", reply_markup=reply_markup)

def main():
    updater = Updater("7289662775:AAEeOB-MiJNYJSToqr3TATuAVtY-N9f0Ke4", use_context=True)
    updater.dispatcher.add_handler(CommandHandler("start", start))
    
    # Start the bot
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()

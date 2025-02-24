import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config();
// import { llm } from './model/ai.js';
import { llm } from './model/gemini.js';

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! I am a simple Telegram bot.');
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text !== "/start") {
        const generation = await llm.invoke(text);
        await bot.sendMessage(chatId,generation.content,{
            parse_mode:"Markdown"
        });
    }
});

console.log("\n");



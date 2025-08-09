🎯 AI Tic-Tac-Toe — Unbeatable Bot with Smart Fallback
🧭 Overview
AI Tic-Tac-Toe is a fun, challenging React game where you face an unbeatable AI opponent.
It uses DeepSeek LLM via OpenRouter API to make strategic moves, with Claude AI as a backup.
If both AI services fail, a JavaScript fail-safe ensures the bot still plays — so the game never stops!

This app is part of my 30-day CodeVeda Challenge to build real-world projects using modern tech like React, Tailwind, and AI APIs.

🚀 Features
🤖 AI-powered moves via DeepSeek LLM

🛡 Fallback to Claude AI if the main API fails

🎯 Fail-safe JavaScript random move generator for uninterrupted gameplay

🎨 Responsive, clean UI with Tailwind CSS

⚡ Fast rendering with React + Vite

🏆 Nearly unbeatable bot using AI + strategic move priority

🧠 What You'll Learn
How to convert board state into an AI-readable prompt

How to integrate DeepSeek LLM with the OpenRouter API in the frontend

How to handle API errors and implement fallback logic

How to build a strategically unbeatable AI bot using JavaScript

UI design with Tailwind CSS for responsive layouts

📦 Tech Stack
⚛️ React (Vite)

🎨 Tailwind CSS

🤖 DeepSeek LLM (via OpenRouter API)

🛡 Claude AI (backup AI)

📜 Custom JavaScript AI logic

🎯 Getting Started
✅ Prerequisites
Node.js (v16 or above)

An OpenRouter API key (for DeepSeek and Claude AI)

📥 Installation

# Clone the repository
git clone https://github.com/Kirishan-Thavagnanaranjan/Tic-Tac-Tai.git

# Navigate to the project folder
cd ai-tic-tac-toe

# Install dependencies
npm install


▶️ Run the app
npm run dev

📌 How It Works
Player makes a move.

The board state is sent to DeepSeek via OpenRouter.

If DeepSeek fails → Claude AI takes over.

If both fail → The game uses a predefined priority move list (center → corners → sides) to play.


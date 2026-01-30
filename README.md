🐍 HungerFest – Snake Game

HungerFest is a browser-based Snake game built using HTML, CSS, and JavaScript, focusing on game logic, smooth animations, increasing difficulty, and score persistence.The project demonstrates how core game mechanics—movement, collision detection, scoring, and difficulty scaling—can be implemented from scratch without external game frameworks.

🌐 Project Highlights

Smooth snake movement using a custom game loop

Collision detection with food and obstacles

Dynamic score updates

Increasing difficulty over time

Grid-based movement system

User authentication & score storage

Minimal tech stack, logic-focused implementation

📸 Screenshots

🔐 Login Screen<img width="1870" height="920" alt="image" src="https://github.com/user-attachments/assets/aa3392b9-741c-46bc-b53d-3672af2dc2dc" />


🎮 Gameplay View

<img width="633" height="564" alt="image" src="https://github.com/user-attachments/assets/823f1fff-8e41-451e-a32f-d59f8720a3fa" />


🧠 Game Logic Overview

🟢 Snake Movement

-The game uses a grid system to restrict movement paths.

-Each frame updates the snake’s head position.

-The body follows by shifting previous positions forward.

🍎 Food Collision

-When the snake collides with food:

-Score increases

-Snake length grows

-New food is generated at a valid grid location

🧱 Obstacle Collision

-Collision with walls or obstacles:

-Ends the game

-Triggers game-over state

-Final score is saved

🎯 Score Handling

-Score updates dynamically during gameplay

-Stored in the database for persistence and tracking

⚙️ Game Engine & Difficulty Scaling

A custom game engine loop controls frame updates

Frame rate is adjusted dynamically:

-Game speed increases as score increases

-Difficulty rises naturally over time

This ensures:

-Smooth animations

-Progressive challenge

-Better player engagement

🗂️ Grid-Based Movement System

The game board is divided into fixed grid cells

Snake movement is restricted to valid grid paths

Prevents diagonal or invalid movement

Makes collision detection simpler and more reliable

🛠️ Tech Stack

Frontend

HTML – Structure

CSS – Styling and layout

JavaScript – Game logic and rendering

Backend / Storage

MongoDB – Stores:

User credentials

Player scores

Game Logic

Custom game loop (frame-based updates)

Manual collision detection

Dynamic speed control

🔐 Authentication & Score Storage

Users log in before playing

Credentials are validated against MongoDB

Scores are saved per user

Enables basic leaderboard or score tracking functionality





📚 What This Project Demonstrates

Strong understanding of game loops

Manual collision detection

Grid-based movement design

Difficulty scaling via frame control

Clean separation of logic and rendering

Using databases even in small games (big plus)

🚀 How to Run the Game

Clone the repository

  git clone https://github.com/VenCasMet/Hungerfest.git


Open the project folder

Start the game:

    Open index.js
    run it

If backend services are enabled, ensure MongoDB is running before login.


Levels with dynamic obstacles

Multiplayer mode

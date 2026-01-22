🎯 VibeCheck API

CPE 411L – Hands-On Activity

VibeCheck is a simple Node.js + Express API that returns fun developer fortunes, jokes, mood-based vibes, and a smash counter.
It demonstrates backend API development, Git branching, and GitHub Pull Request workflow.

📌 Features

🎲 Random fortune endpoint

😂 Random developer joke endpoint

😄 Mood-based vibe responses

🔢 Smash counter (POST + GET)

🔐 Secret endpoint with query validation

🌐 CORS-enabled for frontend integration

🛠️ Tech Stack

Node.js

Express.js

Git & GitHub

GitHub Pages (Frontend, if applicable)

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

2️⃣ Install dependencies
npm install

3️⃣ Run the server
node index.js


You should see:

VibeCheck API running at http://localhost:3000

🔗 API Endpoints & Outputs
Root Check

GET /

http://localhost:3000/

{
  "status": "VibeCheck API is running 🚀"
}

Fortune

GET /api/fortune

{
  "fortune": "You passed the vibe check today. 😎"
}

Joke

GET /api/joke

{
  "joke": "Why did the developer go broke? Because they used up all their cache."
}

Vibe

GET /api/vibe?mood=happy

{
  "mood": "happy",
  "emoji": "😄",
  "message": "Keep going — you're shipping greatness!"
}


Valid moods:

happy

tired

stressed

Smash Counter

POST /api/smash

{
  "smashes": 1
}


GET /api/smashes

{
  "smashes": 1
}

Secret Endpoint

GET /api/secret?code=411L

{
  "message": "🎉 Secret unlocked: +10 luck on your next merge!"
}

🌿 Git Branching Strategy

The project follows a feature-branch workflow.

Branches Used
main
feature/api-routes
feature/smash-counter
feature/frontend-ui

🧾 Commit Rules

Minimum 2 commits per feature branch

Commit messages are clear and descriptive

Examples:

add fortune and joke API endpoints

implement smash counter routes

connect frontend UI to backend API

🔁 Pull Request Workflow

Create a feature branch

Push branch to GitHub

Open Pull Request → main

Partner leaves at least 1 review comment

Merge after review

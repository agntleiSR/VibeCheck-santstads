feature/smash-counter
/**
 * VibeCheck API (CPE 411L)
 * Runs on localhost and serves JSON endpoints
 */

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// -------------------- Data Pools --------------------
const fortunes = [
  "You will debug it in 5 minutes... after 55 minutes of panic.",
  "Your next commit will be clean and meaningful.",
  "A bug will disappear when you add one console.log().",
  "You passed the vibe check today. 😎",
];

const jokes = [
  "Why did the developer go broke? Because they used up all their cache.",
  "My code has two moods: works or why-is-this-happening.",
  "I told my program a joke... it just threw an exception.",
];

const vibeMap = {
  happy: { emoji: "😄", message: "Keep going — you're shipping greatness!" },
  tired: { emoji: "🥱", message: "Hydrate. Stretch. Then commit." },
  stressed: { emoji: "😵‍💫", message: "Breathe. One bug at a time." },
};

// Smash counter (in-memory)
let smashes = 0;

// -------------------- Routes --------------------

// Health check (VERY helpful for debugging)
app.get("/", (req, res) => {
  res.json({ status: "VibeCheck API is running 🚀" });
});

// GET /api/fortune
app.get("/api/fortune", (req, res) => {
  const pick = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.json({ fortune: pick });
});

// GET /api/joke
app.get("/api/joke", (req, res) => {
  const pick = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: pick });
});

// GET /api/vibe?mood=happy|tired|stressed
app.get("/api/vibe", (req, res) => {
  const mood = (req.query.mood || "").toLowerCase();

  if (!vibeMap[mood]) {
    return res.status(400).json({
      mood: mood || "unknown",
      emoji: "🤔",
      message: "Try mood=happy, tired, or stressed.",
    });
  }

  res.json({ mood, ...vibeMap[mood] });
});

// POST /api/smash
app.post("/api/smash", (req, res) => {
  smashes += 1;
  res.json({ smashes });
});

// GET /api/smashes
app.get("/api/smashes", (req, res) => {
  res.json({ smashes });
});

// GET /api/secret?code=411L
app.get("/api/secret", (req, res) => {
  if (req.query.code === "411L") {
    return res.json({
      message: "🎉 Secret unlocked: +10 luck on your next merge!",
    });
  }

  res.status(403).json({ message: "Nope 😄 Try code=411L" });
});

// -------------------- Start Server ---------------
app.listen(PORT, () => {
  console.log(`✅ VibeCheck API running at http://localhost:${PORT}`);
});
 main

const fs = require("fs");
const OpenAI = require("openai");
require("dotenv").config();

// Load intents
const data = JSON.parse(
  fs.readFileSync("./data/intents.json")
);

// OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Main function
async function getResponse(message) {
  message = message.toLowerCase();

  let bestMatch = null;
  let maxScore = 0;

  // Pattern matching
  for (let intent of data.intents) {
    for (let pattern of intent.patterns) {
      let score = 0;

      const words = pattern.split(" ");
      for (let word of words) {
        if (message.includes(word)) {
          score++;
        }
      }

      if (score > maxScore) {
        maxScore = score;
        bestMatch = intent;
      }
    }
  }

  // Return matched response
  if (bestMatch) {
    return bestMatch.responses[
      Math.floor(Math.random() * bestMatch.responses.length)
    ];
  }

  // AI fallback
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful chatbot for a business website. Answer clearly.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error("OpenAI Error:", error.message);
    return "I'm currently running in offline mode, but I can still help with basic queries.";
  }
}


module.exports = { getResponse };
# CodeAlpha - AI-Powered Chatbot System

##  Internship Task

This project is developed as part of the **CodeAlpha Cloud Computing Internship (Task 4: Making a Chatbot)**.

---

##  Project Overview

The project is an AI-powered chatbot system designed to provide instant responses to user queries on a website. It uses a **hybrid approach**, combining:

* Retrieval-based responses (predefined patterns)
* Generative AI responses (fallback mechanism)

The chatbot is deployed as a cloud-based API and integrated into a web interface for real-time interaction.

---

##  Objectives (As per Task Requirements)

* Design an AI-powered chatbot using retrieval-based and generative models
* Enable instant responses to user queries
* Train chatbot using predefined input patterns
* Integrate chatbot with website interface
* Optimize and test chatbot for accuracy and engagement

---

##  Features

*  Instant chatbot responses via REST API
*  Predefined intent-based training for commercial use
*  AI-based fallback responses (OpenAI integration)
*  Website integration using HTML interface
*  Hybrid response system (pattern + AI)
*  Error handling and fallback mechanism

---

##  Tech Stack

* Node.js
* Express.js
* JavaScript
* JSON (Intent training data)
* OpenAI API (optional AI responses)
* HTML/CSS (Frontend interface)

---

##  Project Structure

```text
ai-chatbot/
│── data/
│   └── intents.json
│── routes/
│   └── chat.js
│── utils/
│   └── chatbot.js
│── server.js
│── index.html
│── .env (not included in repo)
│── .gitignore
```

---

##  API Endpoint

###  Chat API

**POST /chat**

```json
{
  "message": "Hello"
}
```

###  Response

```json
{
  "reply": "Hi there! How can I help you?"
}
```

---

##  Working Mechanism

1. User sends a message via UI or API
2. System checks predefined patterns in `intents.json`
3. If match found → returns stored response
4. If no match → AI model generates response
5. If AI fails → fallback response is returned

---

##  Testing & Optimization

The chatbot has been tested with:

* Greeting queries
* Service-related questions
* Pricing-related queries
* Unknown inputs (AI fallback)
* Error handling scenarios

The system is optimized for:

* Fast response time
* Accurate pattern matching
* Graceful failure handling

---

##  Deployment

The chatbot backend is deployed on a cloud platform and can be accessed via a public API.

---

##  Security Note

* Sensitive data such as API keys are stored in `.env`
* `.env` file is excluded using `.gitignore`
* No secrets are exposed in the repository

---

##  Conclusion

This project successfully demonstrates:

* AI chatbot development
* Cloud-based deployment
* Real-time user interaction
* Hybrid AI + rule-based architecture

It fulfills all requirements of the CodeAlpha Chatbot Task.

---

## 👨‍💻 Author

**Chaitanya Kulkarni**
CodeAlpha Intern

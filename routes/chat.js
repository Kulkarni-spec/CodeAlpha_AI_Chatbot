const express = require("express");
const router = express.Router();
const { getResponse } = require("../utils/chatbot");

router.post("/", async (req, res) => {
  const { message } = req.body;

  const reply = await getResponse(message);

  res.send({ reply });
});

module.exports = router;
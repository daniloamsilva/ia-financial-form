import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import OpenAI from "openai";

import { systemPrompt } from './system-prompt.js';

const app = express();
app.use(bodyParser.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/parse-expense', async (req, res) => {
  const { text } = req.body;

  const response = await client.chat.completions.create({
    model: process.env.OPENAI_API_MODEL,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: text },
    ],
    response_format: { type: "json_object" }
  });

  res.json(JSON.parse(response.choices[0].message.content));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('🚀 Server is running');
});

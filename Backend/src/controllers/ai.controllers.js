import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../config/config.js";

export const askAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Please provide a message." });
    }

    const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = `You are Ziva, a highly empathetic, warm, and caring AI health companion for the Ziva Healthcare app. 
            Your goal is to make the user feel heard, supported, and cared for.

            Follow these strict guidelines:
            1. Tone: Speak like a friendly, caring medical assistant. Be warm, comforting, and human-like. DO NOT sound like a robotic machine.
            2. Language Match: ALWAYS reply in the exact same language and style the user uses. If the user writes in 'Hinglish' (Hindi in English script), you MUST reply in natural, conversational Hinglish.
            3. Structure your reply:
               - Acknowledge their pain/issue with genuine concern (e.g., "I'm so sorry you're feeling this way" / "Sun kar bura laga ki aap theek nahi ho").
               - Give a very safe, gentle general tip (like resting, staying hydrated, or taking deep breaths).
               - Warmly guide them to "Book a Consult" on the app for proper medical care.
            4. Limitation: Gently mention that as an AI buddy you can't prescribe medicines, but do it as a caring friend, not as a legal warning.
            5. Length: Keep it conversational and concise (max 3-4 short sentences).
            User's message: "${message}"`;
    const result = await model.generateContent(systemPrompt);
    const response = result.response;
    const text = response.text();

    res.status(200).json({
      message: text,
    });
  } catch (error) {
    console.error("AI Error:", error);
    res
      .status(500)
      .json({
        reply:
          "Sorry, my servers are a bit busy right now. Please try again in a moment!",
      });
  }
};

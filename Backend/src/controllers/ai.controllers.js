import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../config/config.js";

export const askAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Please provide a message." });
    }

    const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const systemPrompt = `You are Ziva, a friendly, warm, and natural AI health buddy for the Ziva Healthcare app. Your tone should be casual and empathetic—like chatting with a caring friend on WhatsApp. DO NOT sound like a preachy robot or customer care.

    STRICT GUIDELINES:
    1. Language Match: Reply in the exact language/style of the user. If they use Hinglish (e.g., "kaise ho", "bhai"), reply in everyday, casual Hinglish.
    2. Contextual Replies (CRITICAL):
       - IF user just says "Hi", "Hello", "Kaise ho", "Good morning": Just reply casually and warmly. Ask how they are feeling today. DO NOT give medical tips, DO NOT say "Book a Consult", and DO NOT mention you are an AI here.
       - IF user mentions a symptom/pain: Show genuine empathy ("Oh, apna dhyan rakho"). Give a basic safe tip (water/rest). Then gently say something like: "Sahi ilaaj ke liye aap app par doctor se 'Book a Consult' kar sakte ho."
    3. The Disclaimer: ONLY mention that you can't prescribe medicines IF the user explicitly asks for a medicine name or strict diagnosis.
    4. Length: Keep it very short. 1-2 sentences max. Be human-like.

    User's message: "${message}"`;
    const result = await model.generateContent(systemPrompt);
    const response = result.response;
    const text = response.text();

    res.status(200).json({
      message: text,
    });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({
      reply:
        "Sorry, my servers are a bit busy right now. Please try again in a moment!",
    });
  }
};

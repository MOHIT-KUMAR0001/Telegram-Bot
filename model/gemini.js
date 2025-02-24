import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const llm = new ChatGoogleGenerativeAI({
    model:"gemini-2.0-flash-exp",
    apiKey:"AIzaSyAPqyoqMwxOO9cdS7LxmQBojn-w6POtmTQ",
    maxOutputTokens:2000
});

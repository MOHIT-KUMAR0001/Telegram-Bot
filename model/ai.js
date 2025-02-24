import { ChatOllama } from "@langchain/ollama";

export const llm = new ChatOllama({
    baseUrl: "http://localhost:11434",
    model:"qwen2.5-coder:0.5b",
    streaming:true
});

// let content = await llm.stream("Hello, how can I assist you today?");
// let msg = ""
// for await(const chunks of content){
//     msg += chunks.content;
//     console.log(msg)
// }

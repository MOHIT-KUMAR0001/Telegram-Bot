import { ChatOpenAI } from "@langchain/openai";

const llm = new ChatOpenAI({
    configuration:{
        baseURL:"http://localhost:1234/v1"
    },
    apiKey:"nokey",
});

const stream = await llm.stream('what is http in detail think="true"');

for await(const chunks of stream){
    process.stdout.write(chunks.content);
}



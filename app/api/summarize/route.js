import { OpenAIEdgeStream } from "openai-edge-stream";

export const runtime = 'edge';

export async function POST(request) {

  try{

    const {message} = await request.json();


    const initialChatMessage = {
      role: "system",
      content: "" 
    }
  
    const stream = await OpenAIEdgeStream(
      "https://api.openai.com/v1/chat/completions", {
        headers: {
          "content-type": "application/json", 
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        },
        method: "POST",
        body: JSON.stringify({
          model: "gpt-4",
          max_tokens: 60,
          temperature: 0.5,
          messages: [initialChatMessage, {content: message, role: "user"}],
          stream: true
        })
      }
    )

    return new Response(stream)
    
  } catch(err) {
    console.log(err);
  }
}

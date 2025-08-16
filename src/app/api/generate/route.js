import { Client } from "@gradio/client";

export async function POST(request) {
  const { prompt } = await request.json();

  const client = await Client.connect("stabilityai/stable-diffusion", {
    hf_token: process.env.NEXT_PUBLIC_HF_TOKEN, // put token in .env
  });

  const result = await client.predict("/infer", {
    prompt,
    negative: false,
  });

  return Response.json({ data: result.data });
}

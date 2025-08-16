"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    try {
      setLoading(true);
      setImage([]);

      const response = await axios.post("/api/generate", { prompt });
      console.log(response.data);
      const images = response?.data?.data?.[0];
      setImage(images);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-8 gap-6">
      <h1 className="text-2xl font-bold">Generate Images with AI</h1>

      <input
        type="text"
        placeholder="Enter a prompt"
        className="border border-gray-300 rounded-md p-2 w-80"
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateImage}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {loading ? "Generating..." : "Generate"}
      </button>
      {image?.map((img, i) => (
        <Image
          key={i}
          src={`/api/proxy?url=${encodeURIComponent(img.image.url)}`}
          alt={`Generated ${i}`}
          width={256}
          height={256}
          className="rounded-md"
        />
      ))}
    </div>
  );
}

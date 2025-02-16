import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const generateImage = async () => {
    const res = await fetch("http://127.0.0.1:5000/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setImageUrl(data.image_url);
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-4">AI Image Generator</h1>
      <input
        type="text"
        className="border p-2"
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className="mt-4 bg-blue-500 text-white p-2" onClick={generateImage}>
        Generate
      </button>
      {imageUrl && <img src={imageUrl} alt="Generated" className="mt-4" />}
    </div>
  );
}

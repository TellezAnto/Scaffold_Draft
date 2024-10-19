"use client";

import { useState } from "react";

export default function VerifyAudio() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [similarity, setSimilarity] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      setMessage("Please select an audio file.");
      return;
    }

    setMessage("Analyzing audio...");
    // Simula el análisis del audio (reemplázalo con tu lógica real)
    const simulatedSimilarity = Math.floor(Math.random() * 100);
    setTimeout(() => {
      setSimilarity(simulatedSimilarity);
      setMessage(simulatedSimilarity > 70 ? "High probability of match." : "Possible modification detected.");
    }, 2000);
  };

  return (
    <div className="bg-gray-100 min-h-screen  items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block text-indigo-600">Verify your</span>
          <span className="block">audio</span>
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
          Check if your audio has been modified or used without your authorization.
        </p>
      </div>
      <div></div>
      <div className="max-w-7xl w-full space-y-8 grid grid-cols-2">
        <div className="bg-white rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-2 ">
          <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="audio-file" className="block text-lg font-medium text-gray-700 mb-2">
              Upload the audio file you want to verify
            </label>
            <input
              type="file"
              id="audio-file"
              name="audio-file"
              accept="audio/*"
              className="file-input file-input-bordered w-full max-w-xs"
              onChange={handleFileChange}
            />
            <button className="hidden" type="submit">
              nothing
            </button>
          </form>

          <div className="md:col-span-2 flex justify-center"></div>

          {message && (
            <div className="md:col-span-2 mt-6 text-center">
              <p className="text-lg text-gray-700">{message}</p>
              {similarity !== null && <p className="text-xl font-bold text-indigo-600">Similarity: {similarity}%</p>}
            </div>
          )}
        </div>
        <div className="bg-white rounded-lg shadow-md high-max">
          <label htmlFor="nft-address" className="block text-lg font-medium text-gray-700 mb-2">
            Enter the NFT address
          </label>
          <input type="text" id="nft-address" name="nft-address" className="input input-bordered w-full max-w-xs" />
          <button
            type="submit"
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl"
          >
            Verify Audio
          </button>
        </div>
      </div>
    </div>
  );
}

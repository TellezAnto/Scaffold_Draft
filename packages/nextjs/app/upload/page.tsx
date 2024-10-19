"use client";

//import { useState } from "react";

export default function UploadPage() {
  //const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="max-w-7xl w-full space-y-8 grid grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-indigo-600">Welcome to</span>
              <span className="block">Chain Waves</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl ">
              Securely protect your audio creations on the blockchain.
            </p>
          </div>
          <div className=" justify-center px-80">
            <a
              href=""
              className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl justify-end px"
            >
              MINT
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <label htmlFor="audio-files" className="block text-lg font-medium text-gray-700 mb-4">
              Upload your audio files
            </label>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            {/* Add more content here */}
            <div className="h-32 bg-gray-200 rounded-md animate-pulse mt-8"></div> {/* Placeholder */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Protect Your Audio with a Watermark</h2>
            <p className="text-gray-600 text-center mb-6">
              Add an invisible watermark to your audio file to secure your intellectual property and track its usage.
            </p>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn  bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl">
              Protect my audio
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Congrats!</h3>
                <p className="py-4">Your watermarked file dowloaded succesfully</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

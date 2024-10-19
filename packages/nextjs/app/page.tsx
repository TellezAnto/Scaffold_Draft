"use client";

import type { NextPage } from "next";

//import { useAccount } from "wagmi";

const Home: NextPage = () => {
  //const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="bg-gray-100 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Divide la pantalla en 2 columnas en pantallas medianas o mayores */}
        <div className="flex flex-col items-center justify-center mb-96">
          {/* Primera columna: Título y descripción */}
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="block text-indigo-600">Chain</span>
            <span className="block">Waves</span>
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl text-center">
            Secure Your Sound: Audio Watermarking on the Blockchain
          </p>
          <div className="mt-8"></div>
          <div className=" mt-10">
            <a href="/upload" className="btn bg-indigo-600 rounded-xl font-bold text-stone-200">
              Start Now!
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-8">
          {/* Segunda columna: Diagrama */}
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-col space-y-4 md:space-y-6 items-center">
              <div className="bg-white rounded-lg shadow-md p-4 w-64">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-2">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">1. Log in</h3>
                <p className="text-gray-500 text-sm">Connect your wallet to Story network.</p>
              </div>
              <div className="w-0.5 h-24 bg-gray-300 md:w-40 md:h-0.5"></div>{" "}
              {/* Separador vertical en pantallas pequeñas, horizontal en pantallas grandes */}
              <div className="bg-white rounded-lg shadow-md p-4 w-64">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-2">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">2. Upload your audio</h3>
                <p className="text-gray-500 text-sm">Upload your audio file in .MP3 or .WAV</p>
              </div>
              <div className="w-0.5 h-24 bg-gray-300 md:w-40 md:h-0.5"></div>
              <div className="bg-white rounded-lg shadow-md p-4 w-64">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-2">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">3. Apply watermarking</h3>
                <p className="text-gray-500 text-sm">Protect your IP with our watermarking programm.</p>
              </div>
              <div className="w-0.5 h-24 bg-gray-300 md:w-40 md:h-0.5"></div>
              <div className="bg-white rounded-lg shadow-md p-4 w-64">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-2">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">4. Secure on the Blockchain</h3>
                <p className="text-gray-500 text-sm">Register your watermarks on Story Protocol and secure your IP.</p>
              </div>
              <div className="w-0.5 h-24 bg-gray-300 md:w-40 md:h-0.5"></div>{" "}
              <div className="bg-white rounded-lg shadow-md p-4 w-64">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-2">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 12h20L12 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">5. Mint your NFT </h3>
                <p className="text-gray-500 text-sm">Create an unique IP asset and mint your NFT.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

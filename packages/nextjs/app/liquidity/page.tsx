"use client";

import { useState } from "react";

export default function NFTCollateralLoan() {
  const [nftAddress, setNftAddress] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanDuration, setLoanDuration] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí iría la lógica para interactuar con la plataforma de préstamos DeFi
    console.log("NFT Address:", nftAddress);
    console.log("Loan Amount:", loanAmount);
    console.log("Loan Duration:", loanDuration);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-indigo-600">NFT Collateral</span>
            <span className="block">Loans</span>
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Use your NFT as collateral to get a loan on another blockchain.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nft-address" className="block text-lg font-medium text-gray-700">
                NFT Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="nft-address"
                  id="nft-address"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="0x..."
                  value={nftAddress}
                  onChange={e => setNftAddress(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="loan-amount" className="block text-lg font-medium text-gray-700">
                Loan Amount
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="loan-amount"
                  id="loan-amount"
                  className="input input-bordered w-full max-w-xs"
                  placeholder="Enter amount"
                  value={loanAmount}
                  onChange={e => setLoanAmount(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="loan-duration" className="block text-lg font-medium text-gray-700">
                Loan Duration
              </label>
              <div className="mt-1">
                <select
                  id="loan-duration"
                  name="loan-duration"
                  className="select select-bordered w-full max-w-xs"
                  value={loanDuration}
                  onChange={e => setLoanDuration(e.target.value)}
                >
                  <option value="">Select duration</option>
                  <option value="7 days">7 days</option>
                  <option value="14 days">14 days</option>
                  <option value="30 days">30 days</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="btn bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl"
            >
              Get Loan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

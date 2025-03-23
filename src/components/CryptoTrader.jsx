import { useState, useEffect } from "react";
import axios from "axios";
import { CircularBuffer } from "../utils/circularBuffer.js";
import { updateTradeSignal } from "../utils/updateTradeSignal.js";

// Load API key from environment variables
const API_KEY = import.meta.env.VITE_API_KEY;
const CRYPTO_ID = import.meta.env.VITE_CRYPTO_ID;
const API_URL = `https://api.coingecko.com/api/v3/simple/price?ids=${CRYPTO_ID}&vs_currencies=usd&x_cg_api_key=${API_KEY}`;

const longTermSMA = 20; // Define the long-term SMA period

export default function CryptoTrader() {
  const [price, setPrice] = useState(null);
  const [tradeSignal, setTradeSignal] = useState("NONE");
  const [tradeHistory, setTradeHistory] = useState([]); // Store executed trades
  const priceBuffer = CircularBuffer(longTermSMA); // Initialize CircularBuffer

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(API_URL);
        const newPrice = response.data.bitcoin.usd;

        setPrice(newPrice); // Update current price
        priceBuffer.add(newPrice); // Store in circular buffer

        // Update trade signal and trade history
        updateTradeSignal(
          newPrice,
          priceBuffer,
          setTradeSignal,
          setTradeHistory
        );
      } catch (error) {
        console.error("Error fetching price:", error);
      }
    };

    const interval = setInterval(fetchPrice, 60000); // Poll API every 1 minute
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Crypto SMA Trader</h1>
        <p className="text-lg">
          Bitcoin Price: {price ? `$${price.toFixed(2)}` : "Loading..."}
        </p>
        <p className="text-lg font-semibold mt-2">
          Trade Signal:{" "}
          <span
            className={
              tradeSignal === "BUY" ? "text-green-500" : "text-red-500"
            }
          >
            {tradeSignal}
          </span>
        </p>
        <div className="mt-4">
          <h2 className="text-md font-semibold">
            Trade History (Last 10 Trades):
          </h2>
          <ul className="text-gray-700 text-sm mt-2 h-32 overflow-y-auto border p-2 rounded">
            {tradeHistory.map((trade, index) => (
              <li key={index} className="flex justify-between">
                <span
                  className={
                    trade.type === "BUY" ? "text-green-500" : "text-red-500"
                  }
                >
                  {trade.type}
                </span>
                <span>{trade.price}</span>
                <span className="text-gray-500 text-xs">{trade.timestamp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

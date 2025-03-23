import { logTrade } from "./logTrade.js";
import { calculateSMA } from "./calculateSMA.js";

const shortTermSMA = 5;
const longTermSMA = 20;

// Function to update trade signal
export const updateTradeSignal = (currentPrice, priceBuffer, setTradeSignal, setTradeHistory) => {
  const prices = priceBuffer.getValues();
  if (prices.length < longTermSMA) return; // Wait for sufficient data

  const shortSMA = calculateSMA(prices, shortTermSMA);
  const longSMA = calculateSMA(prices, longTermSMA);

  if (shortSMA && longSMA) {
    setTradeSignal((prevSignal) => {
      if (shortSMA > longSMA && prevSignal !== "BUY") {
        logTrade("BUY", currentPrice, setTradeHistory); // Log simulated trade
        return "BUY";
      } else if (shortSMA < longSMA && prevSignal !== "SELL") {
        logTrade("SELL", currentPrice, setTradeHistory); // Log simulated trade
        return "SELL";
      }
      return prevSignal; // Keep the current signal if no change
    });
  }
};

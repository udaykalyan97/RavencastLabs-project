export const logTrade = (type, price, setTradeHistory) => {
    const trade = {
      type,
      price: `$${price.toFixed(2)}`,
      timestamp: new Date().toLocaleTimeString(),
    };
    setTradeHistory((prevHistory) => [trade, ...prevHistory.slice(0, 9)]); // Keep only last 10 trades
  };
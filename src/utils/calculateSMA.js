// function to calculate SMA
export const calculateSMA = (values, period) => {
    if (values.length < period) return null; // Ensure enough data points exist
    return values.slice(-period).reduce((sum, val) => sum + val, 0) / period;
  };
// Circular buffer to store recent prices efficiently
export const CircularBuffer = (size) => {
    let buffer = new Array(size).fill(null);                        // Initialize with null values
    let index = 0;
    let full = false;
  
    return {
      add: (value) => {
        buffer[index] = value;                                      // Store new price at the current index
        index = (index + 1) % size;                                 // Move index circularly
        if (index === 0) full = true;                               // Mark buffer as full when it wraps
      },
      getValues: () => (full ? buffer : buffer.slice(0, index)),    // Return only filled values
    };
  };
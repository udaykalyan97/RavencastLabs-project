## CryptoTrader - SMA Based Trading Signal App

CryptoTrader is a simple web application that fetches CRYPTO_ID prices in real-time and analyzes price trends using Simple Moving Averages (SMA). It generates BUY and SELL trade signals based on short-term and long-term SMA crossovers.

### Features
- ✅ Fetches real-time CRYPTO_ID price from CoinGecko API  
- ✅ Uses a Circular Buffer to store recent prices efficiently  
- ✅ Calculates SMA (Simple Moving Averages) to detect trade signals  
- ✅ Logs and displays the last 10 trade transactions  
- ✅ Fully responsive UI using React & TailwindCSS  

---

## Installation & Setup
1. Clone the Repository
```
git clone https://github.com/your-username/CryptoTrader.git
cd CryptoTrader
```
2. Install Dependencies
```
npm install
```
3. Set Up API Key
Create a .env file in the root directory and add your CoinGecko API key:
```
VITE_API_KEY=your_coingecko_api_key
VITE_CRYPTO_ID=cryptocurrency_id
```
Note: This project uses DEMO API key from CoinGecko. 

4. Start the Development Server
```
npm run dev
```
Your app will be available at http://localhost:5173 (or another port assigned by Vite).

---

## Project Structure
```
/CryptoTrader
│── /src
│   ├── /components
│   │   ├── CryptoTrader.jsx    # Main trading component
│   │
│   ├── /utils
│   │   ├── calculateSMA.js     # SMA calculation function
│   │   ├── circularBuffer.js   # Circular buffer for price storage
│   │   ├── logTrade.js         # Logs trade transactions
│   │   ├── updateTradeSignal.js# Determines trade signals
│   │
│   ├── /styles
│   │   ├── tailwind.css        # TailwindCSS styles
│   │
│   ├── App.jsx                 # Main app file
│   ├── main.jsx                # React entry point
│
│── .env                         # API Key (ignored in Git)
│── package.json                  # Dependencies & scripts
│── README.md                     # Project documentation

```
---

## How It Works

1. **Fetching CRYPTO_ID Price**  
   The app requests CRYPTO_ID's price from CoinGecko API every 60 seconds.  

   The latest price is stored in a circular buffer to maintain an efficient rolling dataset.  

2. **Calculating SMA (Simple Moving Averages)**  
   The app calculates two SMAs:  

   - **Short-term SMA** (5-period)  
   - **Long-term SMA** (20-period)  

   - If short-term SMA crosses **above** the long-term SMA → **BUY Signal**  
   - If short-term SMA crosses **below** the long-term SMA → **SELL Signal**  

3. **Logging Trades**  
   When a trade signal changes, it logs the trade with:  

   - **Type:** BUY or SELL  
   - **Price:** Latest CRYPTO_ID price  
   - **Timestamp:** Time of the trade  

   The last 10 trades are displayed in the UI.  


---
## Design Logic

### 1. **Architecture Overview**
The CryptoTrader application is designed as a **single-page application (SPA)** using **React.js** for a smooth and dynamic user experience. The architecture follows a modular approach, ensuring **scalability** and **maintainability**. The main components of the app include:

- **Frontend (React + TailwindCSS):**  
  - Displays real-time cryptocurrency prices.  
  - Calculates and renders SMA-based trade signals.  
  - Logs and visualizes recent trades.  

- **Data Handling (JavaScript + Axios + CoinGecko API):**  
  - Fetches real-time price data from **CoinGecko’s API** every 60 seconds.  
  - Uses a **Circular Buffer** to efficiently manage historical price data.  
  - Processes price data to compute **short-term** and **long-term Simple Moving Averages (SMA)** for trade signals.  

### 2. **UI/UX Design**
- **TailwindCSS for Styling:**  
  - Ensures a **responsive** and **minimalistic** design.  
  - **Dark mode** compatibility for better user experience.  
  - **Animations** and **hover effects** for better interactivity.  

- **Dashboard Layout:**  
  - Displays **live price feed** with real-time updates.  
  - **SMA indicator visualization** for easy trend identification.  
  - **Trade log section** to track the last 10 transactions.  

### 3. **Data Flow & State Management**
- **API Fetching:**  
  - The app fetches price data using **Axios** and updates state every **60 seconds**.  

- **State Handling with React Hooks:**  
  - `useState` for managing real-time prices and trade logs.  
  - `useEffect` to fetch data at fixed intervals and trigger SMA calculations.  

- **Trade Signal Logic:**  
  - **BUY Signal:** When the **short-term SMA** crosses **above** the long-term SMA.  
  - **SELL Signal:** When the **short-term SMA** crosses **below** the long-term SMA.  


### 4. **Performance Optimization**
- **Circular Buffer for Efficient Data Storage:**  
  - Avoids memory bloat by storing only the latest **N** price entries.    


### **Conclusion**
The CryptoTrader app is designed to be **efficient, scalable, and user-friendly**. By integrating a **modular component structure**, **optimized state management**, and a **responsive UI**, the app ensures seamless **real-time trading signal generation** while maintaining performance. 🚀

---

## Technologies Used

- 🔹 **React.js** - Frontend framework  
- 🔹 **TailwindCSS** - UI Styling  
- 🔹 **Axios** - API requests  
- 🔹 **CoinGecko API** - CRYPTO_ID price data  
- 🔹 **JavaScript (ES6+)** - Business logic  

---

### Contributing
Want to improve this project? Contributions are welcome!

1. **Fork the repository**

2. **Create a new branch (git checkout -b feature-branch)**

3. **Make your changes**

4. **Commit and push (git commit -m "Your message" && git push origin feature-branch)**

5. **Create a Pull Request**


### License
This project is licensed under the MIT License.


### Contact
- 👤 Uday Kalyan
- 📧 udaykalyan975@gmail.com
- 🔗 https://github.com/udaykalyan97/

## Screenshot

![CryptoTrader Dashboard](screenshot.png)

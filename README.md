## CryptoTrader - SMA Based Trading Signal App
CryptoTrader is a simple web application that fetches Bitcoin prices in real-time and analyzes price trends using Simple Moving Averages (SMA). It generates BUY and SELL trade signals based on short-term and long-term SMA crossovers.

Features
✅ Fetches real-time Bitcoin price from CoinGecko API
✅ Uses a Circular Buffer to store recent prices efficiently
✅ Calculates SMA (Simple Moving Averages) to detect trade signals
✅ Logs and displays the last 10 trade transactions
✅ Fully responsive UI using React & TailwindCSS
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
## How It Works
1. Fetching Bitcoin Price
The app requests Bitcoin’s price from CoinGecko API every 60 seconds.

The latest price is stored in a circular buffer to maintain an efficient rolling dataset.

2. Calculating SMA (Simple Moving Averages)
The app calculates two SMAs:

Short-term SMA (5-period)

Long-term SMA (20-period)

If short-term SMA crosses above the long-term SMA → BUY Signal

If short-term SMA crosses below the long-term SMA → SELL Signal

3. Logging Trades
When a trade signal changes, it logs the trade with:

Type: BUY or SELL

Price: Latest Bitcoin price

Timestamp: Time of the trade

The last 10 trades are displayed in the UI.

---

## Technologies Used
🔹 React.js - Frontend framework
🔹 TailwindCSS - UI Styling
🔹 Axios - API requests
🔹 CoinGecko API - Bitcoin price data
🔹 JavaScript (ES6+) - Business logic

---

### Contributing
Want to improve this project? Contributions are welcome!

1. Fork the repository

2. Create a new branch (git checkout -b feature-branch)

3. Make your changes

4. Commit and push (git commit -m "Your message" && git push origin feature-branch)

5. Create a Pull Request


### License
This project is licensed under the MIT License.


### Contact
👤 Uday Kalyan
📧 udaykalyan975@gmail.com
🔗 https://github.com/udaykalyan97/

import axios from "axios";

// Define with default parameters, if values from process.env are empty
const REFRESH_RATE: number = Number(process.env.REFRESH_RATE || 2000);
const COMMISSION_FEES: number = Number(process.env.COMMISSION_FEES || 0.01);

let averageWithCommission: number = 0;

/**
 * @description Apply a service commission of 0.01% to the bid and ask and calculate the average price.
 */
const getAverage = async (): Promise<void> => {
  try {
    // Currency request
    const getCost = await axios.get(
      "https://api.binance.com/api/v3/ticker/bookTicker?symbol=BTCUSDT"
    );

    // Calculate bid with commission
    const bidIncludingCommission: number =
      (1 - COMMISSION_FEES / 100) * getCost.data.bidPrice;

    // Calculate ask with commission
    const askIncludingCommission: number =
      (1 + COMMISSION_FEES / 100) * getCost.data.askPrice;

    // Calculate average with commission
    averageWithCommission =
      (bidIncludingCommission + askIncludingCommission) / 2;

    console.log(`CURRENT AVERAGE ${averageWithCommission}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Call function first time
getAverage();

// Call function at certain intervals
setInterval(getAverage, REFRESH_RATE);

/**
 * @description This function is defined to provide external access to the current calculated average price with the service commission applied
 */
export const getCurrentAverage = (): number => {
  return averageWithCommission;
};

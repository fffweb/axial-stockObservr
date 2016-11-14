import { STOCKS } from '../constants/stocks.constants';

// const requestStocksList = () => ({
//     type: STOCKS.REQUEST_STOCKS_LIST
// });
//
// const requestStocksListFulfilled = stocks => ({
//     type: STOCKS.REQUEST_STOCKS_LIST_FULFILLED,
//     payload: {
//         stocks
//     }
// });
//
// const requestStocksQuote = stock_ticker => ({
//     type: STOCKS.REQUEST_STOCK_QUOTE,
//     payload: {
//         stock_ticker
//     }
// });
//
// const requestStocksQuoteFulfilled = stock => ({
//     type: STOCKS.REQUEST_STOCK_QUOTE_FULFILLED,
//     payload: {
//         stock
//     }
// });

const requestStockDetails = stockId => ({
    type: STOCKS.REQUEST_STOCK_DETAILS,
    payload: {
      stockId
    }
});

const requestStockDetailsFulfilled = stock => ({
    type: STOCKS.REQUEST_STOCK_DETAILS_FULFILLED,
    payload: {
      stock
    }
});

export default {
    requestStockDetails,
    requestStockDetailsFulfilled
};
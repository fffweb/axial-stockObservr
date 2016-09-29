/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

// the built-in reducer for redux-ui-router
import { router } from 'redux-ui-router';

// our custom data reducer for the data points
import { stocksListReducer } from './stocks-list.reducer';
import { portfoliosListReducer } from './portfolios-list.reducer';
import { currentPortfolioDetailsReducer } from './current-portfolio-details.reducer';
import { currentPortfolioStocksReducer } from './current-portfolio-stocks.reducer';

// our custom data reducer for the data points
// ADD REDUCERS HERE

export default combineReducers({
    router,
    stocksList: stocksListReducer,
    portfoliosList: portfoliosListReducer,
    currentPortfolio: currentPortfolioDetailsReducer,
    currentPortfolioStocks: currentPortfolioStocksReducer
});
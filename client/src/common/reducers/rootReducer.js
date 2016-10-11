/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

// import { router } from 'redux-ui-router'; // Store the router state in the redux store - causing errors with epics
import { stocksListReducer } from './stocks-list.reducer';
import { portfoliosListReducer } from './portfolios-list.reducer';
import { currentPortfolioDetailsReducer } from './current-portfolio-details.reducer';
import { currentPortfolioStocksListReducer } from './current-portfolio-stocks-list.reducer';

export const rootReducer = combineReducers({
    stocksList: stocksListReducer,
    portfoliosList: portfoliosListReducer,
    currentPortfolio: currentPortfolioDetailsReducer,
    currentPortfolioStocksList: currentPortfolioStocksListReducer
});
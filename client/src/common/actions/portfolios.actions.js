import { PORTFOLIOS } from '../constants/portfolios.constants';

const requestPortfoliosList = () => ({
    type: PORTFOLIOS.REQUEST_PORTFOLIOS_LIST
});

const requestPortfoliosFulfilled = portfolios => ({
    type: PORTFOLIOS.REQUEST_PORTFOLIOS_LIST_FULFILLED,
    payload: {
        portfolios
    }
});

const requestPortfolioDetails = portfolio_id => ({
    type: PORTFOLIOS.REQUEST_PORTFOLIO_DETAILS,
    payload: {
        portfolio_id
    }
});

const requestPortfolioDetailsFulfilled = portfolio => ({
    type: PORTFOLIOS.REQUEST_PORTFOLIO_DETAILS_FULFILLED,
    payload: {
        portfolio
    }
});

const requestPortfolioStocksList = portfolio_id => ({
    type: PORTFOLIOS.REQUEST_PORTFOLIO_STOCKS_LIST,
    payload: {
        portfolio_id
    }
});

const requestPortfolioStocksListFulfilled = payload => ({
    type: PORTFOLIOS.REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED,
    payload
});

const requestSellPortfolioStock = portfolio_stock_id => ({
    type: PORTFOLIOS.SELL_PORTFOLIO_STOCK,
    payload: {
        portfolio_stock_id
    }
});

const requestSellPortfolioStockFulfilled = payload => ({
    type: PORTFOLIOS.SELL_PORTFOLIO_STOCK_FULFILLED,
    payload
});

const refreshPortfolioFinancials = portfolio_id => ({
    type: PORTFOLIOS.REFRESH_PORTFOLIO_FINANCIALS,
    payload: {
        portfolio_id
    }
});

export default { 
    requestPortfoliosList,
    requestPortfoliosFulfilled,
    requestPortfolioDetails,
    requestPortfolioDetailsFulfilled,
    requestPortfolioStocksList,
    requestPortfolioStocksListFulfilled,
    requestSellPortfolioStock,
    requestSellPortfolioStockFulfilled,
    refreshPortfolioFinancials
};
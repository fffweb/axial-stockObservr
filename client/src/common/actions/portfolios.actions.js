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

const requestPortfolioFinancials = portfolio_id => ({
    type: PORTFOLIOS.REQUEST_PORTFOLIO_FINANCIALS,
    payload: {
        portfolio_id
    }
});

const requestPortfolioFinancialsFulfilled = portfolio => ({
    type: PORTFOLIOS.REQUEST_PORTFOLIO_FINANCIALS_FULFILLED,
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

const requestPortfolioStocksListFulfilled = portfolio_stocks => ({
    type: PORTFOLIOS.REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED,
    payload: {
        portfolio_stocks
    }
});

const requestSellPortfolioStock = portfolio_stock_id => ({
    type: PORTFOLIOS.SELL_PORTFOLIO_STOCK,
    payload: {
        portfolio_stock_id
    }
});

const requestSellPortfolioStockFulfilled = () => ({
    type: PORTFOLIOS.SELL_PORTFOLIO_STOCK_FULFILLED
});

export default { 
    requestPortfoliosList,
    requestPortfoliosFulfilled,
    requestPortfolioDetails,
    requestPortfolioDetailsFulfilled,
    requestPortfolioFinancials,
    requestPortfolioFinancialsFulfilled,
    requestPortfolioStocksList,
    requestPortfolioStocksListFulfilled,
    requestSellPortfolioStock,
    requestSellPortfolioStockFulfilled
};
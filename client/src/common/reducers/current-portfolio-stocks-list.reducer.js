import { PORTFOLIOS } from '../constants/portfolios.constants';
import { STOCKS } from '../constants/stocks.constants';
import { computeStockChanges } from '../utils/portfolio.utils';

const initialState = [];

export function currentPortfolioStocksListReducer(state = initialState, { meta, payload, type }) {
    switch (type) {

        case PORTFOLIOS.REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED:
            return computeStockChanges(payload.portfolio_stocks) || initialState;

        case STOCKS.REQUEST_STOCK_DETAILS_FULFILLED:
            return state.map(stock => {
                if (payload && payload.stock && payload.stock.id === stock.stockId) {
                    return Object.assign({}, stock, payload.stock);
                } else {
                    return stock;
                }
            });

        case PORTFOLIOS.SELL_PORTFOLIO_STOCK_FULFILLED:
            return state.filter(stock => {
                return payload.portfolio_stock_id !== stock.id;
            });

        default:
            return state;
    }
}
import { 
    REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED,
    SELL_PORTFOLIO_STOCK_FULFILLED 
} from 'client/src/common/actions/constants';

export function currentPortfolioStocksReducer(state = [], { meta, payload, type }) {
    switch (type) {

        case REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED:
            return payload || [];

        case SELL_PORTFOLIO_STOCK_FULFILLED:
            return state.filter(stock => {
                return payload.id !== stock.id;
            });

        default:
            return state;
    }
}
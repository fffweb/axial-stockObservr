import { REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED } from 'client/src/common/actions/constants';

export function currentPortfolioStocksReducer(state = [], { meta, payload, type }) {
    switch (type) {

        case REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED:
            return payload || [];

        default:
            return state;
    }
}
import { PORTFOLIOS } from '../constants/portfolios.constants';
import { computePortfolioFinancials } from '../utils/portfolio.utils';

const initialState = {};

export function currentPortfolioDetailsReducer(state = initialState, { meta, payload, type }) {
    switch (type) {

        case PORTFOLIOS.REQUEST_PORTFOLIO_DETAILS_FULFILLED:
            return payload.portfolio || {};

        case PORTFOLIOS.REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED:
            if (payload && payload.portfolio_id === state.id) {
                return Object.assign({}, state, computePortfolioFinancials(payload.portfolio_stocks));
            }
            return state;

        default:
            return state;
    }
}
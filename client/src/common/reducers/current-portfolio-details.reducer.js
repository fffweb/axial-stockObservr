import { PORTFOLIOS } from '../constants/portfolios.constants';

const initialState = {};

export function currentPortfolioDetailsReducer(state = initialState, { meta, payload, type }) {
    switch (type) {

        case PORTFOLIOS.REQUEST_PORTFOLIO_DETAILS_FULFILLED:
            return payload.portfolio || {};

        case PORTFOLIOS.REQUEST_PORTFOLIO_FINANCIALS_FULFILLED:
            if (payload && payload.portfolio.portfolio_id === state.id) {
                return Object.assign({}, state, payload.portfolio);
            } else {
                return state;
            }

        default:
            return state;
    }
}
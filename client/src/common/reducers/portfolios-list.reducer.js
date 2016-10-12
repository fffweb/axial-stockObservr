import { PORTFOLIOS } from '../constants/portfolios.constants';
import { computePortfolioFinancials } from '../utils/portfolio.utils';

const initialState = [];

export function portfoliosListReducer(state = initialState, { meta, payload, type }) {
    switch (type) {

        case PORTFOLIOS.REQUEST_PORTFOLIOS_LIST_FULFILLED:
            return payload.portfolios || initialState;

        case PORTFOLIOS.REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED:
            return state.map((portfolio, index) => {
                    if (payload.portfolio_id === portfolio.id) {
                        return Object.assign({}, portfolio, computePortfolioFinancials(payload.portfolio_stocks))
                    }
                    return portfolio
                })

        default:
            return state;
    }
}
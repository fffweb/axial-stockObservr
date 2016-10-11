import { PORTFOLIOS } from '../constants/portfolios.constants';

const initialState = [];

export function portfoliosListReducer(state = initialState, { meta, payload, type }) {
    switch (type) {

        case PORTFOLIOS.REQUEST_PORTFOLIOS_LIST_FULFILLED:
            return payload.portfolios || initialState;

        case PORTFOLIOS.REQUEST_PORTFOLIO_FINANCIALS_FULFILLED:
            return state.map((portfolio, index) => {
                    if (payload.portfolio.portfolio_id === portfolio.id) {
                        return Object.assign({}, portfolio, payload.portfolio)
                    }
                    return portfolio
                })

        default:
            return state;
    }
}
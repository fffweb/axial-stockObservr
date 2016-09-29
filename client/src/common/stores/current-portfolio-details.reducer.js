import { REQUEST_PORTFOLIO_DETAILS_FULFILLED } from 'client/src/common/actions/constants';

export function currentPortfolioDetailsReducer(state = {}, { meta, payload, type }) {
    switch (type) {

        case REQUEST_PORTFOLIO_DETAILS_FULFILLED:
            return payload || {};

        default:
            return state;
    }
}
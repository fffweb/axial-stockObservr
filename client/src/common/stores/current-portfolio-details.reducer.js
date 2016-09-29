import {
    REQUEST_PORTFOLIO_DETAILS_FULFILLED,
    REQUEST_PORTFOLIO_FINANCIALS_FULFILLED
}
from 'client/src/common/actions/constants';

export
function currentPortfolioDetailsReducer(state = {}, {
    meta, payload, type
}) {
    switch (type) {

        case REQUEST_PORTFOLIO_DETAILS_FULFILLED:
            return payload || {};

        case REQUEST_PORTFOLIO_FINANCIALS_FULFILLED:
            if (payload && payload.portfolio_id === state.id) {
                return Object.assign({}, state, payload);
            } else {
                return state;
            }

        default:
            return state;
    }
}
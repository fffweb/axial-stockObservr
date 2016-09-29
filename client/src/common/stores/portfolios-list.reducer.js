import {
    REQUEST_PORTFOLIOS_LIST_FULFILLED,
    REQUEST_PORTFOLIO_FINANCIALS_FULFILLED
}
from 'client/src/common/actions/constants';

export

function portfoliosListReducer(state = [], {
    meta, payload, type
}) {
    switch (type) {

        case REQUEST_PORTFOLIOS_LIST_FULFILLED:
            return payload || [];

        case REQUEST_PORTFOLIO_FINANCIALS_FULFILLED:
            return state.map((portfolio, index) => {
                    if (payload.portfolio_id === portfolio.id) {
                        return Object.assign({}, portfolio, payload)
                    }
                    return portfolio
                })

        default:
            return state;
    }
}
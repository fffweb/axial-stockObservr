import {
    API_PORTFOLIOS_PATH
}
from 'client/src/common/api/constants';

import {
    REQUEST_PORTFOLIOS_LIST,
    REQUEST_PORTFOLIOS_LIST_FULFILLED,
    REQUEST_PORTFOLIO_DETAILS,
    REQUEST_PORTFOLIO_DETAILS_FULFILLED,
    REQUEST_PORTFOLIO_STOCKS_LIST,
    REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED
}
from './constants';

// Action Creators

const requestPortfolios = payload => ({
    type: REQUEST_PORTFOLIOS_LIST,
    payload
});

const requestPortfoliosFulfilled = payload => ({
    type: REQUEST_PORTFOLIOS_LIST_FULFILLED,
    payload
});

const requestPortfolioDetails = portfolio_id => ({
    type: REQUEST_PORTFOLIO_DETAILS,
    payload: portfolio_id
});

const requestPortfolioDetailsFulfilled = payload => ({
    type: REQUEST_PORTFOLIO_DETAILS_FULFILLED,
    payload
});

const requestPortfolioStocksList = portfolio_id => ({
    type: REQUEST_PORTFOLIO_STOCKS_LIST,
    payload: portfolio_id
});

const requestPortfolioStocksListFulfilled = payload => ({
    type: REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED,
    payload
});

export class PortfoliosService {
    static $inject = [
        'APIService',
        '$ngRedux'
    ];

    constructor(api, $ngRedux) {
        this.api = api;
        this.$ngRedux = $ngRedux;
    }

    fetchPortfolios() {
        return dispatch => {
            this.$ngRedux.dispatch(requestPortfolios());
            return this.api.fetch(API_PORTFOLIOS_PATH)
                .then(json => this.$ngRedux.dispatch(requestPortfoliosFulfilled(json)));
        };
    }

    fetchPortfolioDetails(id) {
        return dispatch => {
            this.$ngRedux.dispatch(requestPortfolioDetails(id));
            return this.api.fetch(API_PORTFOLIOS_PATH + `/${id}`)
                .then(json => this.$ngRedux.dispatch(requestPortfoliosFulfilled(json)));
        };
    }
}
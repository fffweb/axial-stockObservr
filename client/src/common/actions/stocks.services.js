import {
    API_STOCKS_PATH
}
from 'client/src/common/api/constants';

import {
    REQUEST_STOCKS_LIST,
    REQUEST_STOCKS_LIST_FULFILLED,
    REQUEST_STOCK_QUOTE,
    REQUEST_STOCK_QUOTE_FULFILLED
}
from './constants';

// Action Creators

const requestStocksList = payload => ({
    type: REQUEST_STOCKS_LIST,
    payload
});

const requestStocksListFulfilled = payload => ({
    type: REQUEST_STOCKS_LIST_FULFILLED,
    payload
});

const requestStocksQuote = ticker => ({
    type: REQUEST_STOCK_QUOTE,
    payload: portfolio_id
});

const requestStocksQuoteFulfilled = payload => ({
    type: REQUEST_STOCK_QUOTE_FULFILLED,
    payload
});

export class StocksService {
    static $inject = [
        'APIService',
        'StockQuoteAPIService',
        '$ngRedux'
    ];

    constructor(api, StockQuoteAPIService, $ngRedux) {
        this.api = api;
        this.stockQuoteAPI = StockQuoteAPIService;
        this.$ngRedux = $ngRedux;
    }

    fetchStocksList() {
        return dispatch => {
            this.$ngRedux.dispatch(requestStocksList());
            return this.api.fetch(API_STOCKS_PATH)
                .then(json => this.$ngRedux.dispatch(requestStocksListFulfilled(json)));
        };
    }

    fetchStocksQuote(ticker) {
        return dispatch => {
            this.$ngRedux.dispatch(requestStocksQuote(ticker));
            return this.stockQuoteAPI.fetch(ticker)
                .then(json => this.$ngRedux.dispatch(requestStocksQuoteFulfilled(json)));
        };
    }
}
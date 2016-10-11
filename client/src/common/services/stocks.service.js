import {
    API_STOCKS_PATH
}
from 'client/src/common/api/constants';

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
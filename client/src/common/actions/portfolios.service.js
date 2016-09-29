import {
    API_PORTFOLIOS_PATH,
    API_PORTFOLIO_STOCKS_PATH
}
from 'client/src/common/api/constants';

import {
    REQUEST_PORTFOLIOS_LIST,
    REQUEST_PORTFOLIOS_LIST_FULFILLED,
    REQUEST_PORTFOLIO_DETAILS,
    REQUEST_PORTFOLIO_DETAILS_FULFILLED,
    REQUEST_PORTFOLIO_FINANCIALS,
    REQUEST_PORTFOLIO_FINANCIALS_FULFILLED,
    REQUEST_PORTFOLIO_STOCKS_LIST,
    REQUEST_PORTFOLIO_STOCKS_LIST_FULFILLED,
    SELL_PORTFOLIO_STOCK,
    SELL_PORTFOLIO_STOCK_FULFILLED
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

const requestPortfolioFinancials = portfolio_id => ({
    type: REQUEST_PORTFOLIO_FINANCIALS,
    payload: portfolio_id
});

const requestPortfolioFinancialsFulfilled = payload => ({
    type: REQUEST_PORTFOLIO_FINANCIALS_FULFILLED,
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

const requestSellPortfolioStock = id => ({
    type: SELL_PORTFOLIO_STOCK,
    payload: id
});

const requestSellPortfolioStockFulfilled = payload => ({
    type: SELL_PORTFOLIO_STOCK_FULFILLED,
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
                .then(json => this.$ngRedux.dispatch(requestPortfolioDetailsFulfilled(json)));
        };
    }

    fetchPortfolioFinancials(id) {
        return dispatch => {
            this.$ngRedux.dispatch(requestPortfolioFinancials(id));
            return this.api.fetch(API_PORTFOLIOS_PATH + `/${id}` + API_PORTFOLIO_STOCKS_PATH)
                .then((stocks) => {
                    return stocks.map(s => ({
                            value: s.qty * s.last,
                            change: s.qty * (s.last - s.price),
                            cost: s.qty * s.price
                        }))
                        .reduce((prev, curr) => ({
                            portfolio_id: id,
                            value: prev.value + curr.value,
                            change: prev.change + curr.change,
                            cost: prev.cost + curr.cost,
                            changePct: (((prev.value + curr.value) - (prev.cost + curr.cost)) / (prev.cost + curr.cost)) * 100
                        }));
                })
                .then(json => this.$ngRedux.dispatch(requestPortfolioFinancialsFulfilled(json)));
        };
    }

    fetchPortfolioStocksList(id) {
        return dispatch => {
            this.$ngRedux.dispatch(requestPortfolioStocksList(id));
            return this.api.fetch(API_PORTFOLIOS_PATH + `/${id}` + API_PORTFOLIO_STOCKS_PATH)
                .then((stocks) => {
                    return stocks.map((s) => ({
                        id: s.id,
                        stockId: s.stockId,
                        qty: s.qty,
                        price: s.price,
                        last: s.last,
                        change: s.qty * (s.last - s.price),
                        value: s.qty * s.last,
                        cost: s.qty * s.price,
                        changePct: ((s.last - s.price) / s.price) * 100
                    }));
                })
                .then(json => this.$ngRedux.dispatch(requestPortfolioStocksListFulfilled(json)));
        };
    }

    sellPortfolioStock(portfolio_stock_id) {
        return dispatch => {
            this.$ngRedux.dispatch(requestSellPortfolioStock(portfolio_stock_id));
            return this.api.delete(API_PORTFOLIO_STOCKS_PATH + `/${portfolio_stock_id}`)
                .then(() => {return { id: portfolio_stock_id }}) // building the payload
                .then(json => this.$ngRedux.dispatch(requestSellPortfolioStockFulfilled(json)));
        };
    }
}
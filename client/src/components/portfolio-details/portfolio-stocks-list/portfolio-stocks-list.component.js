import PortfoliosActions from 'client/src/common/actions/portfolios.actions'

import { Component } from 'client/src/utils';

import template from './portfolio-stocks-list.html';

@Component({
    bindings: {
        stocks: '<'
    },
    controllerAs: 'portfolioStocksListCtrl',
    template
})

export class PortfolioStocksListComponent {
    static $inject = [
        '$ngRedux'
    ];

    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
    }

    onStockSell(portfolio_stock) {
        this.$ngRedux.dispatch(PortfoliosActions.requestSellPortfolioStock(portfolio_stock.id));
    }
}
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
        '$ngRedux',
        'PortfoliosService'
    ];

    constructor($ngRedux, PortfoliosService) {
        this.$ngRedux = $ngRedux;
        this.portfoliosService = PortfoliosService;
    }

    onStockSell(stock) {
        return this.$ngRedux.dispatch(this.portfoliosService.sellPortfolioStock(stock.id));
    }
}
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
    onStockSell(stock) {
        console.log(stock);
    }
}
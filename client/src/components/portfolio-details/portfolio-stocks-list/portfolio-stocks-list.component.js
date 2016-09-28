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
    changePct (s) {
        return (s.change/s.value)*100;
    }

    onStockSell(stock) {
        console.log('Sold stock:' + stock.ticker)
    }
}
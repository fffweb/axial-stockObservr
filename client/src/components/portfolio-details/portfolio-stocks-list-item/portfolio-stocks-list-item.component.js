import { Component } from 'client/src/utils';

import template from './portfolio-stocks-list-item.html';

@Component({
    bindings: {
        stock: '<',
        sellStock: '&'
    },
    controllerAs: 'portfolioStocksListItemCtrl',
    template
})

export class PortfolioStocksListItemComponent {
    sell() {
        this.sellStock({ stock: this.stock });
    }

    changePct () {
        return (this.stock.change/this.stock.last)*100;
    }
}
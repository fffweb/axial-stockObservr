import { Component } from 'client/src/utils';

import template from './portfolios-list.html';

@Component({
    bindings: {
        portfolios: '<',
        selectPortfolio: '&'
    },
    controllerAs: 'portfoliosListCtrl',
    template
})

export class PortfoliosListComponent {
    selectedPortfolio(portfolio) {
        console.log('Portfolio '+portfolio.name+' selected in item list');
        this.selectPortfolio(portfolio);
    }
}
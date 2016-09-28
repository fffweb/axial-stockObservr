import { Component } from 'client/src/utils';

import template from './portfolios-list-item.html';

@Component({
    bindings: {
        portfolio: '<',
        selectPortfolio: '&'
    },
    controllerAs: 'portfoliosListItemCtrl',
    template
})

export class PortfoliosListItemComponent {
    select() {
        console.log('Portfolio '+this.portfolio.name+' selected in item');
        this.selectPortfolio({ portfolio: this.portfolio });
    }
}
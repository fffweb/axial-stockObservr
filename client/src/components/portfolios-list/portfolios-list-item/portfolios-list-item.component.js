import { Component } from 'client/src/utils';

import template from './portfolios-list-item.html';

@Component({
    bindings: {
        portfolio: '<'
    },
    controllerAs: 'portfoliosListItemCtrl',
    template
})

export class PortfoliosListItemComponent {}
import { Component } from 'client/src/utils';

import template from './portfolio-snapshot.html';

@Component({
    bindings: {
        "portfolio": "<"
    },
    controllerAs: 'portfolioSnapshotCtrl',
    template
})

export class PortfolioSnapshotComponent {
    changePct () {
        return (this.portfolio.change/this.portfolio.value)*100;
    }
}
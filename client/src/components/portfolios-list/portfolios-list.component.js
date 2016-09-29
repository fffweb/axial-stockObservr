import { Component } from 'client/src/utils';

import template from './portfolios-list.html';

@Component({
    controllerAs: 'portfoliosListCtrl',
    template
})

export class PortfoliosListComponent {
    static $inject = [
        '$ngRedux'
    ];

    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
    }

    $onInit() {
        this.disconnect = this.$ngRedux.connect(state => ({
            portfoliosList: state.portfoliosList,
            currentPortfolio: state.currentPortfolio
        }))((state, actions) => {
            this.portfoliosList = state.portfoliosList;
            this.currentPortfolio = state.currentPortfolio;
        });
    }

    $onDestroy() {
        this.disconnect();
    }
}
import { Component } from 'client/src/utils';

import template from './portfolios-list.html';

@Component({
    controllerAs: 'portfoliosListCtrl',
    template
})

export class PortfoliosListComponent {
    static $inject = [
        '$ngRedux',
        'PortfoliosService'
    ];

    constructor($ngRedux, PortfoliosService) {
        this.$ngRedux = $ngRedux;
        this.portfolioService = PortfoliosService;
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
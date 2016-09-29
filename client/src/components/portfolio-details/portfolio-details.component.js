import { Component } from 'client/src/utils';

import template from './portfolio-details.html';

@Component({
    controllerAs: 'portfolioDetailsCtrl',
    template
})

export class PortfolioDetailsComponent {
    static $inject = [
        '$ngRedux'
    ];

    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
    }

    $onInit() {
        this.disconnect = this.$ngRedux.connect(state => ({
            currentPortfolioStocks: state.currentPortfolioStocks,
            currentPortfolio: state.currentPortfolio
        }))((state, actions) => {
            this.currentPortfolioStocks = state.currentPortfolioStocks;
            this.currentPortfolio = state.currentPortfolio;
        });
    }

    $onDestroy() {
        this.disconnect();
    }
}
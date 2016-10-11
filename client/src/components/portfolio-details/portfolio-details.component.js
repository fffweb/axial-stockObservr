import PortfoliosActions from 'client/src/common/actions/portfolios.actions'

import { Component } from 'client/src/utils';

import template from './portfolio-details.html';

@Component({
    controllerAs: 'portfolioDetailsCtrl',
    template
})

export class PortfolioDetailsComponent {
    static $inject = [
        '$ngRedux',
        '$stateParams'
    ];

    constructor($ngRedux, $stateParams) {
        this.$ngRedux = $ngRedux;
        this.$stateParams = $stateParams;
        this.currentPortfolioStocksList = Observable.from([]);
        this.currentPortfolio = Observable.of({});
    }

    $onInit() {
        this.disconnect = this.$ngRedux.connect(state => ({
            currentPortfolioStocksList: state.currentPortfolioStocksList,
            currentPortfolio: state.currentPortfolio
        }))((state, PortfoliosActions) => {
            this.currentPortfolioStocksList = state.currentPortfolioStocksList;
            this.currentPortfolio = state.currentPortfolio;
        });
    }

    $onDestroy() {
        this.disconnect();
    }
}
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

        // Fetch the portfolio details
        this.$ngRedux.dispatch(PortfoliosActions.requestPortfolioDetails(this.$stateParams.id));

        // Fetch the portofolio financials
        this.$ngRedux.dispatch(PortfoliosActions.requestPortfolioFinancials(this.$stateParams.id));

        // Fetch the portfolio stocs list
        this.$ngRedux.dispatch(PortfoliosActions.requestPortfolioStocksList(this.$stateParams.id));
    }

    $onDestroy() {
        this.disconnect();
    }
}
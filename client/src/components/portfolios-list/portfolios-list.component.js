import PortfoliosActions from 'client/src/common/actions/portfolios.actions'

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
        this.portfoliosList = Observable.from([]);
    }

    $onInit() {
        this.disconnect = this.$ngRedux.connect(state => ({
            portfoliosList: state.portfoliosList
        }))((state, PortfoliosActions) => {
            this.portfoliosList = state.portfoliosList;
        });

        // Fetching the list of portfolios by dispatching the action
        this.$ngRedux.dispatch(PortfoliosActions.requestPortfoliosList());
    }

    $onDestroy() {
        this.disconnect();
    }
}
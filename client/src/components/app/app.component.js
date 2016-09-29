import { Component } from 'client/src/utils';

import template from './app.html';
import './app.scss';

@Component({
    template: template,
    controllerAs: 'appCtrl'
})

export class AppComponent {
    static $inject = [
        '$mdSidenav'
    ]

    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
        // this.service = service;

        // this.portfolios = [];
        // this.currentPortfolio = null;
    }

    // $onInit() {
    //     this.service.fetchPortfolios().then((portfolios) => {
    //         this.portfolios = portfolios.map(p => ({
    //                                     name: p.name,
    //                                     value: p.stocks.map(s => (s.qty * s.last)).reduce((prev, curr) => (prev + curr)),
    //                                     change: p.stocks.map(s => (s.qty * (s.last - s.price))).reduce((prev, curr) => (prev + curr)),
    //                                     cost: p.stocks.map(s => (s.qty * s.price)).reduce((prev, curr) => (prev + curr))
    //                                 })).map(p => ({
    //                                     name: p.name,
    //                                     value: p.value,
    //                                     change: p.change,
    //                                     cost: p.cost,
    //                                     changePct: ((p.value - p.cost)/p.cost)*100
    //                                 }));
    //     });
    // }

    toggleStockPicker () {
        this.$mdSidenav('stockPicker').toggle();
    }

    isStockPickerOpen () {
        return this.$mdSidenav('stockPicker').isOpen();
    }

    // onPortfolioSelect (portfolio) {
    //     this.currentPortfolio = {
    //         "name": "Technologies",
    //         "value": "1450.34",
    //         "change": "344.2",
    //         "cost": 10,
    //         "changePct": 30
    //     }
    // }

}
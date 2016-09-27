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

        this.portfolios = [{
            "name": "Technologies",
            "value": "1450.34",
            "change": "344.2"
        },{
            "name": "Pharma",
            "value": "3439.12",
            "change": "-390.2"
        }];

        this.currentPortfolio = {
            "name": "Technologies",
            "value": "1450.34",
            "change": "344.2"
        }

        this.portoflioStocks = [{
            "name": "Marvell MRVL",
            "ticker": "MRVL",
            "qty": "2",
            "paid": "124.45",
            "last": "120.67",
            "change": ".2"
        },{
            "name": "Amazon.com AMZN",
            "ticker": "AMZN",
            "qty": "23",
            "paid": "34.23",
            "last": "120.4",
            "change": "-3.2"
        },{
            "name": "Netflix NFLX",
            "ticker": "NFLX",
            "qty": "1",
            "paid": "57",
            "last": "60",
            "change": "0"
        },{
            "name": "Cisco Systems CSCO",
            "ticker": "CSCO",
            "qty": "51",
            "paid": "39.44",
            "last": "35.3",
            "change": "-.98"
        },{
            "name": "Microsoft MSFT",
            "ticker": "MSFT",
            "qty": "9",
            "paid": "938.23",
            "last": "800.4",
            "change": "-13.59"
        },{
            "name": "Apple AAPL",
            "ticker": "AAPL",
            "qty": "84",
            "paid": "234.34",
            "last": "250.3",
            "change": "34.5"
        }]
    }

    toggleStockPicker () {
        this.$mdSidenav('stockPicker').toggle();
    }

    isStockPickerOpen () {
        return this.$mdSidenav('stockPicker').isOpen();
    }

    calcChangePct (val, change) {
        return (change/val)*100;
    }

}
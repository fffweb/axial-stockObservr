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
    }

    toggleStockPicker () {
        this.$mdSidenav('stockPicker').toggle();
    }

    isStockPickerOpen () {
        return this.$mdSidenav('stockPicker').isOpen();
    }
}
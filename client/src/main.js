import angular from 'angular';

import 'angular-material/angular-material.css';

import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';

import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';

// Router
import { routerConfig } from './routeConfig';

// Store
import reduxConfig from './reduxConfig';

// Components
import { AppComponent } from './components/app';
import { StockPickerComponent } from './components/stock-picker';

// Angular Material Theme
import { themeConfig } from './themeConfig';

const app = angular.module('app', [
    ngRedux,
    uiRouter,
    ngReduxUiRouter,
    ngMaterial,
    ngAnimate
]);

app.component('app', AppComponent);
app.component('stockPicker', StockPickerComponent);

// Load config for ui-router
app.config(routerConfig);

// Load Theme config
app.config(themeConfig);

// Load Redux store config
app.config(reduxConfig);
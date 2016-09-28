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

// Service
import { APIService } from './common/api/api.service';
import { PortfoliosService } from './common/services/portfolios.service';

// Components
import { AppComponent } from './components/app';

import { 
    PortfoliosListComponent, 
    PortfoliosListItemComponent 
} from './components/portfolios-list';

import { 
    PortfolioDetailsComponent, 
    PortfolioSnapshotComponent, 
    PortfolioStocksListComponent, 
    PortfolioStocksListItemComponent 
} from './components/portfolio-details';

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

app.component('portfoliosList', PortfoliosListComponent);
app.component('portfoliosListItem', PortfoliosListItemComponent);

app.component('portfolioDetails', PortfolioDetailsComponent);
app.component('portfolioSnapshot', PortfolioSnapshotComponent);
app.component('portfolioStocksList', PortfolioStocksListComponent);
app.component('portfolioStocksListItem', PortfolioStocksListItemComponent);

app.component('stockPicker', StockPickerComponent);

app.service('APIService', APIService);
app.service('PortfoliosService', PortfoliosService);

// Load config for ui-router
app.config(routerConfig);

// Load Theme config
app.config(themeConfig);

// Load Redux store config
app.config(reduxConfig);
import angular from 'angular';
import 'angular-material/angular-material.css';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';
import 'rxjs';

//////////////
// Settings //
//////////////
import { routerConfig } from './configs/route.config';
import { themeConfig } from './configs/theme.config';
import { storeConfig } from './configs/store.config';

//////////////
// Services //
//////////////
// import { APIService } from './common/api/api.service';
// import PortfoliosService from './common/services/portfolios.service';
// import { StockQuoteAPIService } from './common/api/stock-quote-api.service';

////////////////
// Components //
////////////////
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

/////////
// App //
/////////
const app = angular.module('app', [
    ngRedux,
    uiRouter,
    ngReduxUiRouter,
    ngMaterial,
    ngAnimate
]);

// Load components
app.component('app', AppComponent);
app.component('portfoliosList', PortfoliosListComponent);
app.component('portfoliosListItem', PortfoliosListItemComponent);
app.component('portfolioDetails', PortfolioDetailsComponent);
app.component('portfolioSnapshot', PortfolioSnapshotComponent);
app.component('portfolioStocksList', PortfolioStocksListComponent);
app.component('portfolioStocksListItem', PortfolioStocksListItemComponent);
app.component('stockPicker', StockPickerComponent);

// Load services
// app.service('PortfoliosService', PortfoliosService);
// app.service('APIService', APIService);
// app.service('StockQuoteAPIService', StockQuoteAPIService);

// Load configs
app.config(routerConfig);
app.config(themeConfig);
app.config(storeConfig);
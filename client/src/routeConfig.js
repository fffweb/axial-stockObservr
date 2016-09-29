/**
 * Add a few basic routes to ui-router for our components
 */

 // TODO: add routes to components level isntead of being defined here

routerConfig.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
];

export function routerConfig($stateProvider, $urlRouterProvider) {
    
    var appState = {
        name: 'app',
        abstract: true,
        views: {
            '': {
                template: '<app></app>'
            }
        }
    }

    var portfoliosState = {
        name: 'app.portfolios',
        url: '/portfolios',
        resolve: {
            getPortfolios: function($ngRedux, PortfoliosService) {
                return $ngRedux.dispatch(PortfoliosService.fetchPortfolios());
            },
            getPorfoliosFinancials: function(getPortfolios, $ngRedux, PortfoliosService) {
                return $ngRedux.getState().portfoliosList.forEach(p => {
                    return $ngRedux.dispatch(PortfoliosService.fetchPortfolioFinancials(p.id))
                });
            }
        }
    }

    var portfolioDetailsState = {
        name: 'app.portfolios.details',
        url: '/{id:int}',
        resolve: {
            getPortfolioDetails: function($ngRedux, PortfoliosService, $stateParams) {
                return $ngRedux.dispatch(PortfoliosService.fetchPortfolioDetails($stateParams.id));
            },
            getPorfoliosFinancials: function(getPortfolioDetails, $ngRedux, PortfoliosService, $stateParams) {
                return $ngRedux.dispatch(PortfoliosService.fetchPortfolioFinancials($stateParams.id))
            },
            getPortfolioStocksList: function(getPortfolioDetails, $ngRedux, PortfoliosService, $stateParams) {
                return $ngRedux.dispatch(PortfoliosService.fetchPortfolioStocksList($stateParams.id));
            }
        }
    }

    $stateProvider.state(appState);
    $stateProvider.state(portfoliosState);
    $stateProvider.state(portfolioDetailsState);

    $urlRouterProvider.otherwise('/portfolios');
}
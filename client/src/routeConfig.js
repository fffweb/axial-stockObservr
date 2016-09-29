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
            bounds: function($ngRedux, PortfoliosService) {
                return $ngRedux.dispatch(PortfoliosService.fetchPortfolios());
            }
        }
    }

    var portfolioDetailState = {
        name: 'app.portfolio',
        url: '/portfolio/:id',
        resolve: {
            bounds: function($ngRedux, PortfoliosService, $stateParams) {
                return $ngRedux.dispatch(PortfoliosService.fetchPortfolioDetails($stateParams.id));
            }
        }
    }

    $stateProvider.state(appState);
    $stateProvider.state(portfoliosState);
    $stateProvider.state(portfolioDetailState);

    $urlRouterProvider.otherwise('/portfolios');
}
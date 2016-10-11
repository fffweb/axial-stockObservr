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
        url: '/portfolios'
    }

    var portfolioDetailsState = {
        name: 'app.portfolios.details',
        url: '/{id:int}'
    }

    $stateProvider.state(appState);
    $stateProvider.state(portfoliosState);
    $stateProvider.state(portfolioDetailsState);

    $urlRouterProvider.otherwise('/portfolios');
}
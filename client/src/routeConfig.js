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
        url: '/',
        views: {
            '': {
                template: '<app></app>'
            }
        }
    }

    $stateProvider.state(appState);

    $urlRouterProvider.otherwise('/');
}
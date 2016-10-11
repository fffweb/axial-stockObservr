// https://material.angularjs.org/latest/Theming/03_configuring_a_theme

themeConfig.$inject = [
    '$mdThemingProvider'
];

export function themeConfig($mdThemingProvider) {
    $mdThemingProvider
        .theme('default')
        .primaryPalette('indigo')
        .accentPalette('pink')
        .warnPalette('red')
        .backgroundPalette('blue-grey');
}
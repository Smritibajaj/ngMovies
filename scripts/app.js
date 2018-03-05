angular
    .module("ngMovies", ["ngMaterial", "ui.router"])
    .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');

        $urlRouterProvider.otherwise('/movies');

        $stateProvider
            .state('movies', {
                url: '/movies',
                templateUrl: 'components/movie.tpl.html',
                controller: 'moviesCtrl as vm'// DEFINE ALIAS
            })
        })
(function () {
    "use strict";
    angular
        .module('ngMovies')
        .controller('moviesCtrl', function ($scope, $http, $state, moviesFactory) {

            var vm = this;

           moviesFactory.getMovies().then(function (movies) {
            console.log(movies.data.results);
             vm.movies = movies.data.results;
            });
        });

})();
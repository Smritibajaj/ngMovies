angular
    .module('ngMovies')
    .factory('moviesFactory', function($http) {
        function getMovies() {
            var result = $http.get('https://api.themoviedb.org/4/list/1?page=1&api_key=9841b8703d599b55eb9c5377636d1e52');
            //console.log(result);
            return result;
        }
        return {
            getMovies: getMovies
        }
    })
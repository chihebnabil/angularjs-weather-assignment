(function() {

    var app = angular
    .module('app', [
      'ngRoute'
    ])
    .config(config);

    // this prevents minification issues
    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        // routes
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/search', {
      templateUrl: 'views/search.html',
      controller: 'SearchController',
      controllerAs: 'search'
    })
    .when('/search/:keyword', {
      templateUrl: 'views/search-params.html',
      controller: 'SearchController',
      controllerAs: 'search-params'
    })
    .when('/weather/:woeid', {
      templateUrl: 'views/city.html',
      controller: 'CityController',
      controllerAs: 'city'
    })
    .otherwise({
      redirectTo: '/'
    });

    }




})();

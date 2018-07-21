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
    .otherwise({
      redirectTo: '/'
    });

    }




})();

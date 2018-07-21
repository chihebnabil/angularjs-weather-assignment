(function() {
    'use strict';
    angular.module('app')
    .directive('weather', weather);

    weather.$inject = ['$http'];

    function weather($http) {

    // Definition of directive
    var directiveDefinitionObject = {
        restrict: 'E',
        templateUrl: 'views/weather.html',
        scope: {
            woeid: '@'
         },
        controller:function($scope){
            $http({method: 'GET', url:"http://assignangular.test/weather.php?command=location&woeid="+$scope.woeid}).then(function (result) {
                console.log(result.data);                              
             }, function (result) {
                 alert("Error: No data returned");
             });
        },
        link: function(scope, elem, attrs, ctrl) {
        }
    }
    return directiveDefinitionObject;

    }

})();

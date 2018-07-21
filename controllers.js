(function() {
 
    angular.module('app')
    .controller('MainController', MainController);
    MainController.$inject = ['$scope', '$http'];
    function MainController($scope, $http){
       // Cities
       // [ Istanbull,Berlin,London,Helsinki,Dublin,Vancouver]
       $scope.woeids    = [2344116,638242,44418,565346,560743,9807]
    }

 
})();

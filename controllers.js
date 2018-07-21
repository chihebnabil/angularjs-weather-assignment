(function() {
 
    angular.module('app').controller('MainController', MainController);
    angular.module('app').controller('SearchController', SearchController);
    angular.module('app').controller('CityController', CityController);

    MainController.$inject = ['$scope', '$http',"CONSTANTS"];
    SearchController.$inject = ['$scope', '$http',"$location","$routeParams","CONSTANTS"];
    
    function MainController($scope, $http,CONSTANTS){
       // Cities
       // [ Istanbull,Berlin,London,Helsinki,Dublin,Vancouver]
       $scope.woeids    = [2344116,638242,44418,565346,560743,9807]
       console.log(CONSTANTS.API_URL)

    }
    function SearchController($scope, $http ,$location,$routeParams,CONSTANTS){
        // Search Keyword
        $scope.keyword    = ""
        $scope.cities   = []
        $scope.error = false
        
        $scope.submit = function() {
          // uri: weather.php?command=search&keyword={your_keyword}
        $location.path( "/search/"+$scope.keyword );
        
        }
        
        if($routeParams.keyword !== ""){
            KeywordSearch($routeParams.keyword)

        }



        function KeywordSearch(k){
            $http({method: 'GET', url: CONSTANTS.API_URL+"?command=search&keyword="+k}).then(function (result) {
                console.log(result.data);    
                $scope.cities =  result.data 
                if($scope.cities.length > 0){
                  
                  
                    $scope.error = false

                }else{
                    $scope.error = true
                }          
             }, function (result) {
               //  alert("Error: No data returned");
             });
        }


     }

     function CityController($scope,$routeParams, $http,CONSTANTS){
    
        if($routeParams.woeid !== ""){
            getDetails($routeParams.woeid)

        }

        function getDetails(woeid) {
            $http({method: 'GET', url: CONSTANTS.API_URL+"?command=location&woeid="+woeid}).then(function (result) {
                $scope.inf =  result.data       
                console.log(result.data )                 
             }, function (result) {
             });
        }


     }




 
})();

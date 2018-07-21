(function() {
 
    angular.module('app').controller('MainController', MainController);
    angular.module('app').controller('SearchController', SearchController);
    MainController.$inject = ['$scope', '$http'];
    SearchController.$inject = ['$scope', '$http',"$location","$routeParams"];
    
    function MainController($scope, $http){
       // Cities
       // [ Istanbull,Berlin,London,Helsinki,Dublin,Vancouver]
       $scope.woeids    = [2344116,638242,44418,565346,560743,9807]
    }
    function SearchController($scope, $http ,$location,$routeParams){
        // Search Keyword
        $scope.keyword    = ""
        $scope.cities   = []
        $scope.error = false
        
        $scope.submit = function() {
          // uri: weather.php?command=search&keyword={your_keyword}
        $location.path( "/search/"+$scope.keyword );
        
        }
        
        if($routeParams.keyword !== ""){
            console.log("route params",$routeParams.keyword )
            KeywordSearch($routeParams.keyword)

        }



        function KeywordSearch(k){
            $http({method: 'GET', url:"http://assignangular.test/weather.php?command=search&keyword="+k}).then(function (result) {
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

 
})();

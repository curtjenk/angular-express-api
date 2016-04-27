var searchApp = angular.module("searchApp", []);
searchApp.controller("searchController", function($scope, $http) {
    $scope.search = function() {
        $scope.message = "hello world";

        var apiUrl = 'http://localhost:3000/search';

        $http.post(apiUrl, { "name": $scope.who }).then(
            function(response) {
                $scope.result = response.data.message;
            },
            function(error) {
                $scope.result = "Error!";
            }
        )
    }
})

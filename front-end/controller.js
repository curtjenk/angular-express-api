var searchApp = angular.module("searchApp", []);
searchApp.controller("searchController", function($scope, $http) {

    var apiUrl = 'http://localhost:3000/search';
    // var apiUrl = 'http://10.150.41.255:3000/search';

    $http.get(apiUrl).then(
        function(response) {
            $scope.studentsOnLoad = response.data
        },
        function(error) {
            console.log(error)
            $scope.result = "Error!";
        }
    )



    $scope.search = function() {
        $scope.message = "hello world";

        $http.post(apiUrl, { "name": $scope.who }).then(
            function(response) {
                $scope.result = response.data;
                $http.get(apiUrl).then(
                    function(response) {
                        $scope.studentsOnLoad = response.data
                    },
                    function(error) {
                        console.log(error)
                        $scope.result = "Error!";
                    }
                )
            },
            function(error) {
                console.log(error)
                $scope.result = "Error!";
            }
        )
    }
})

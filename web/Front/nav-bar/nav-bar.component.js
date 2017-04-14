/**
 * Created by Massil on 16/12/2016.
 */
angular.module("navBar" , []).component("navigation" , {
    templateUrl : "nav-bar/nav-bar.html",
    controller : ['$scope', '$cookies', function($scope, $cookies)
    {
        console.log($cookies.get("firstname"));
        $scope.logged = $cookies.get("logged");
        $scope.firstname = $cookies.get("firstname");
        $scope.lastname = $cookies.get("lastname");
        $scope.email = $cookies.get("email");
    }]
});
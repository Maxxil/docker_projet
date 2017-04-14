/**
 * Created by Massil on 16/12/2016.
 */
angular.module("login" , []).component("cpLogin",
    {
        templateUrl : "login/login.html",
        controller : ['$scope' , 'user', '$window', '$cookies' ,function($scope , user, $window, $cookies) {
            if($cookies.get("logged")){
                $window.location.href = 'index.html';
            }

            $scope.error = "";
            $scope.loginErrorHide = true;

            $scope.connect = function() {
                var promise = user.connect($scope.email, $scope.password);

                promise.then(function(response) {

                    if(response.data.status)
                    {
                        $cookies.put('logged', true);
                        $cookies.put('email', response.data.user.email);
                        $cookies.put('firstname', response.data.user.firstname);
                        $cookies.put('lastname', response.data.user.lastname);

                        $window.location.href = 'index.html';
                    }
                    else
                    {
                        $scope.loginError = "Identifiants incorrects";
                        $scope.loginErrorHide = false;
                    }
                }, function(error) {
                    $scope.loginError = "Erreur de connexion";
                    $scope.loginErrorHide = false;
                });
            };

            /*$scope.signinAction = function() {
                $location.path("/signin");
            }*/
        }]
    }
);

angular.module("logout" , []).component("cpLogout",
    {
        controller : ['$window', '$cookies' ,function($window, $cookies) {
            if($cookies.get("logged")){
                $cookies.remove("logged")
            }

            $window.location.href = 'index.html';
        }]
    }
);
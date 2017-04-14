/**
 * Created by Massil on 16/12/2016.
 */
angular.module("signin" , ['ngCookies']).component("cpSignin" , {
    templateUrl : "SignIn/signin.html",
    controller:[
        '$scope' , 'user', '$cookies', '$window', function($scope , user, $cookies, $window) {

            if($cookies.get("logged")){
                $window.location.href = 'index.html';
            }
            $scope.inscrire = function(firstname, lastname, username, birth, email, password, confimPassword) {

                if ($scope.password == $scope.confirmPassword) {
                    var dataClient = {
                        'firstname': firstname,
                        'lastname': lastname,
                        'username': username,
                        'email': email,
                        'password': password,
                        'birth': birth
                    };

                    var promise = user.inscrire(dataClient);

                    promise.then(function (result) {
                        $cookies.put('logged', true);
                        $cookies.put('email', email);
                        $cookies.put('firstname', firstname);
                        $cookies.put('lastname', lastname);

                        $window.location.href = 'index.html';
                    }, function (err) {
                        console.error("Erreur: " + err.stack)
                    })
                }
            }

        }]
});
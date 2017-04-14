/**
 * Created by Massil on 20/01/2017.
 */
angular.module('userService' , [])
.service('user' , function($http){
    this.profile = null;
    this.connect = function(email , password){
        $http;
        var promise = $http
            .post(apiBaseUrl+'/user' , {email : email , password : password});
        return promise;
    };

    this.inscrire = function(user){

        console.log(apiBaseUrl+'/user');
        var promise = $http
            .put(apiBaseUrl+'/user' , {data : user});
        return promise;
    }
});
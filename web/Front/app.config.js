angular.module("cheapPrices").config(function($routeProvider) {

    $routeProvider
        .when("/", {
            template:'<cp-products></cp-products>'
        })
        .when("/login" , {
            template : "<cp-login></cp-login>"
        })
        .when("/logout" , {
            template : "<cp-logout></cp-logout>"
        })
        .when("/signin", {
            template : "<cp-signin></cp-signin>"
        })
        .otherwise({ redirectTo: "/" });
});
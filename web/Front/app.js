'user strict';

var app = angular.module("cheapPrices", [
    "ngRoute"               ,
    "products"              ,
    'panier'                ,
    'product'               ,
    'login'                 ,
    'logout'                ,
    'signin'                ,
    'navBar'                ,
    'userService'           ,
    'order'
]);

var apiBaseUrl = "http://172.17.0.3:1337";


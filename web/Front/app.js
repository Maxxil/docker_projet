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

var apiBaseUrl = "http://10.69.2.170:1337";


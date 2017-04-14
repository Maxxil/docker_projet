/**
 * Created by Massil on 16/12/2016.
 */
angular.module("products" , ['ngRoute', 'ngCookies']).component("cpProducts" ,{
    templateUrl : "products/products.html" ,
    controller : ['$scope', 'productService', 'orderService', 'cpPanier', '$cookies',function($scope, product, orderService, cpPanier, $cookies)
    {

        var promise = product.getAllProducts();
        $scope.products = [];
        promise.then(function(response)
        {
            $scope.products = response.data;

        } , function(error)
        {
            $scope.error = true;
        });

        $scope.panier = cpPanier.getPanier();

        $scope.order = function(){
            var order = [];
            var panier = cpPanier.getPanier();
            angular.forEach(panier , function(value , key){
                for(var i = 0 ; i < value.number ; i++)
                {
                    order.push(value.id);
                }
            });
            var promise = orderService.addOrder(order);
            promise.then(function(success){
                console.log(success);
                cpPanier.reset();
            } , function(fail){
                console.log(fail);
            })
        };

        $scope.addToPanier = function(product)
        {
            cpPanier.addToPanier(product);
            $scope.total = cpPanier.total();
        };


    }]
});
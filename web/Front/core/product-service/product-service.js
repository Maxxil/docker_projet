/**
 * Created by Massil on 02/02/2017.
 */
angular.module('product' , [])
.service('productService' , function ($http) {
    this.getAllProducts = function()
    {
        var promise =$http
            .get(apiBaseUrl + '/product');
        return promise;
    };

    this.addProduct = function(product)
    {
        var promise = $http
            .post(apiBaseUrl + '/product' , {product : product});
        return promise;
    }

    this.getProduct = function(id)
    {
        var promise =
            $http.get(apiBaseUrl + '/product/'+id);
        return promise;
    }
});
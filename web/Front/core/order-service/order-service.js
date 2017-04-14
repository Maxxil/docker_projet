angular.module('order' , [])
    .service('orderService' , function ($http) {

        this.addOrder = function(order)
        {
            var promise = $http
                .post(apiBaseUrl + '/order' , {products : order});
            return promise;
        }
    });
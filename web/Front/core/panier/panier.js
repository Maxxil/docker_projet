/**
 * Created by Massil on 11/12/2016.
 */
angular.module("panier" , []).service("cpPanier" , [function(){
    var panier = [];

    this.addToPanier = function(product){
        var found = false;
        angular.forEach(panier , function(value , key)
        {
            if(value.name == product.name)
            {
                value.number++;
                found = true;
            }
        });
        if(found == false) {
            panier.push({
                'id' : product._id,
                'name': product.name,
                'price': product.price,
                'number': 1
            });
        }
    };

    this.reset = function(){
        panier = [];
    };

    this.getPanier = function()
    {
        return panier;
    };

    this.total = function()
    {
        var log;
        var total = 0;
        angular.forEach(panier , function(key , value)
        {
            total+= key.price * key.number;
        } , log);
        return total;
    }
}]);
/**
 * Created by Massil on 20/01/2017.
 */
var router = require('express').Router();
var bodyParser = require('body-parser');
var Product = require('../model/product');
var Order = require('../model/order');
var User = require('../model/user');
var ObjectId = require('mongoose').Types.ObjectId;

router.use(bodyParser.json());

router.get('/:id', function(req , res){
    Order.find(req.params.id).exec(function(err, order) {

        res.setHeader('Content-Type', 'application/json');
        res.send(order[0]);
        res.end();
    });
});

router.post('/', function(req , res){
    var productId = req.body.products;
    var date = new Date();

    //console.log(date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

    order = Order({
        products: [],
        total: 0,
        date: date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        user: {}
    });
    if(req.body.user == undefined)
    {
        order.user = User({
            firstname : 'no user',
            lastname : 'no user',
            email : 'no user',
            username : 'no user'
        });
        order.save(function(){
            productId.forEach(function(id, key){
                Product.findById(id).exec(function(err, product) {
                    order.products.push(product._id);
                    order.total += product.price;
                    order.save();

                    if((key+1) == productId.length){
                        //console.log(order);

                        var response = {
                            status: "true",
                            order: order
                        };

                        res.setHeader('Content-Type', 'application/json');
                        res.send(response);
                        res.end();
                    }
                });
            });
        });
    }
    else
    {
        User.find(req.body.user).exec(function(err, user){
            order.user = user[0]._id;

            order.save(function(){
                productId.forEach(function(id, key){
                    Product.findById(id).exec(function(err, product) {
                        order.products.push(product.id);
                        order.total += product.price;
                        order.save();

                        if((key+1) == productId.length){
                            //console.log(order);

                            var response = {
                                status: "true",
                                order: order
                            };

                            res.setHeader('Content-Type', 'application/json');
                            res.send(response);
                            res.end();
                        }
                    });
                });
            });

        });
    }

});

module.exports = router;
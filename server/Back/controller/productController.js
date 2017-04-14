/**
 * Created by Massil on 20/01/2017.
 */
var router = require('express').Router();
var bodyParser = require('body-parser');

var Product = require('../model/product');

router.use(bodyParser.json());

router.get('/', function(req , res){
    Product.find().exec(function(err, products) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(products));
        res.end();
    });
});

router.get('/:id', function(req , res) {
    Product
        .findById(req.params.id)
        .exec(function (err, product) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({data: product}));
            res.end();
        });
});

router.post('/', function(req , res){
    var name = req.body.product.name;
    var description = req.body.product.description;
    var price = req.body.product.price;
    var reference = req.body.product.reference;
    var stock = req.body.product.stock;

    var product = Product({
        name: name,
        description: description,
        price: price,
        reference: reference,
        stock: stock
    }).save();

    var response = {
        status: "true"
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response));
    res.end();
});

module.exports = router;
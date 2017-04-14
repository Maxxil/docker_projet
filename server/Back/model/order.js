/**
 * Created by Massil on 20/01/2017.
 */
var db = require('./../config/db');
var Product = require('./product');
var User = require('./user');

var order = db.Schema({
    products : [{type : db.Schema.Types.ObjectId , ref:'Product'}],
    total : 'Number',
    date : 'Date',
    user : {type : db.Schema.Types.ObjectId , ref : 'User'}
});

module.exports = db.model('Order' , order);
/**
 * Created by Massil on 20/01/2017.
 */

var db = require('./../config/db');

var product = db.Schema({
    name : 'String',
    description : 'String',
    price : 'Number',
    reference : 'String',
    stock : 'Number'
});

module.exports = db.model('Product' , product);
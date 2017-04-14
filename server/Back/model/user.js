/**
 * Created by Massil on 20/01/2017.
 */
var db = require('./../config/db');

var user = db.Schema({
    firstname : 'String',
    lastname : 'String',
    email :'String',
    username :'String',
    password : 'String'
});

module.exports = db.model('User' , user);
/**
 * Created by Massil on 20/01/2017.
 */
var router = require('express').Router();
var bodyParser = require('body-parser');
var hash = require('bcrypt-nodejs');

var User = require('./../model/user');

router.use(bodyParser.json());

router.post('/'  , function(req , res){
    //console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;

    User
        .find({
        email : email
        })
        .exec(function(err , data){
            if(err){
                //console.log(err);
            }
            else{

                if(data[0] == null){
                    res.send({status : false , profile : null});
                    res.end();
                }
                else{

                    if(hash.compareSync(password , data[0].password)) {
                        user = {
                            "email": data[0].email,
                            "firstname": data[0].firstname,
                            "lastname": data[0].lastname
                        };

                        res.send({status : true, profile : data, user});
                        res.end();
                    }
                    else{
                        res.send({status : false , profile : null});
                        res.end();
                    }
                }
            }
        });
});

router.put('/' , function(req , res){
    var firstname = req.body.data.firstname;
    var lastname = req.body.data.lastname;
    var email = req.body.data.email;
    var username = req.body.data.username;
    var password = req.body.data.password;

    var user = User({
        firstname : firstname,
        lastname : lastname,
        email : email,
        username : username,
        password : hash.hashSync(password),
    });

    user.save();
    res.send(JSON.stringify({status : true}));
    res.end();
});

module.exports = router;
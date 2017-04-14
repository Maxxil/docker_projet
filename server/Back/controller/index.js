/**
 * Created by Massil on 20/01/2017.
 */
var router = require('express').Router();

router.use('/user' , require('./userController'));
router.use('/product' , require('./productController'));
router.use('/order' , require('./orderController'));

module.exports = router;
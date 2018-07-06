var express = require('express');
var router = express.Router();


router.get('/list', (req, res, next) => {
   console.log('test');
   res.send({
        products: [{name:'Test'}, {name: 'Prerna'}]
   });
});


module.exports = router;

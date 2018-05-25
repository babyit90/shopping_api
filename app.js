var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors'); // to communicate with api
var app = express();

var originsWhitelist = [
        'http://localhost:4200',      //this is my front-end url for development
      ];
      var corsOptions = {
        origin: function(origin, callback){
              var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
              callback(null, isWhitelisted);
        },
        credentials:true
      }

//use cors
app.use(cors(corsOptions));


//load routes
const products = require('./Router/productRouter');

//use BodyParser middleware
app.use(bodyParser.json());


//Use routes
app.use('/products', products);






//set port to listen server
const port = 5000;
app.listen(port, () => {
        console.log(`Server serted on port ${port}`);
});
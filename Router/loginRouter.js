var express = require('express');
var User = require('../model/usersModel'); // call model
var bcrypt = require('bcrypt'); //password encryption
var router = express.Router();



router.post('/registration', (req, res, next)=>{
  //  console.log(login);  
    UserData = req.body.data;    
    User.saveUser(UserData, (err,res) => {
        if(err)
            throw err;
        console.log(res);
    });
    return; 
    hashPassword(UserData.password)
    .then(data => {
            UserData.password = data;                          
            Users.saveUser(UserData, (err,res) => {
                if(err)
                    throw err;
                console.log(res);
            })
    }).catch(err => {
        console.log(err);
        return;
    });
    // Login.saveUser(data, (err,res) => {
    //     if(err)
    //         throw err;
    //     console.log(res);
    // })
});


function hashPassword(password){
    return new Promise(function(resolve, reject){
        const saltRounds = 10;
      //  const myPlaintextPassword = 's0/\/\P4$$w0rD';
      //  const someOtherPlaintextPassword = 'not_bacon';
        bcrypt.hash(password, saltRounds, function(err, hash) {
            if(err)
                reject (err);
            resolve (hash);
            // Store hash in your password DB.
        });
    })
    
}
module.exports = router;
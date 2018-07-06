var db = require('./db/connection');//db connection


var User = {
    saveUser: function(data, callback){
        console.log('test');
        return db.query('INSERT INTO users set ?', data, callback);
    }
};



module.exports = User;
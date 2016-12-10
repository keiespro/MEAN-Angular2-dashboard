/**
 * Created by kangri2 on 12/10/16.
 */
var config = {

        //url to be used in link generation
        url: 'http://localhost:3000',
        //mongodb connection settings
        database: {
            host: 'localhost',
            port: '27017',
            db:     'mydb',
            username:"myadmin",
            password:"mypassword",
            authdb : "admin",
            is_ssl : false,
        },


};
module.exports = config;
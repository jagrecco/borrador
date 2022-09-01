const usrDb="root";
const usrPw="";

const mongoDbCon = {
    dbURI : 'mongodb://localhost/ecommerce',
    dbOptions : {
        'user': usrDb,
        'pass': usrPw
    }
}

module.exports = mongoDbCon;
const mongoose = require("mongoose")


class mongoDao{
    constructor(){
        this.connection=this.createConnection()
    }
    
    createConnection(){
        mongoose.connect('mongodb://localhost:27017/test');   
    }

    findAll(collection){
        this.connection.${collection}.find();
    }

}
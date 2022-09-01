const express=require("express");
const mongoose=require("mongoose");

const conn=require("./config/config");

const app=new express();

async function crud() {
    try {
        console.log(conn)
        mongoose.connect(conn.dbURI);
        console.log("Mongoose conectado en " + conn.dbURI)
        app.listen(8080,()=>{
            console.log("Servidor en 8080");
        })
    } catch (error) {
        console.log("error al conectar con mongoose");
        console.log(error);
    }
}


crud();
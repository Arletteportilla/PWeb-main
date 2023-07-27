var mongoose = require("mongoose")
var connection = mongoose.connect("mongodb://127.0.0.1:27017")
mongoose.connection.on('open',(ref)=>{
    console.log("conectado a mongoDB");
});
module.exports=connection;
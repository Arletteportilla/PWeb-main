var mongoose=require('mongoose');
Schema=mongoose.Schema

var encuentrosSchema=new mongoose.Schema({
    personaA:Object,
    personaB:Object,
    lugar:String,
    latitud:Number,
    longitud:Number

});
var encuentros=mongoose.model('encuentros',encuentrosSchema);
module.exports=encuentros;
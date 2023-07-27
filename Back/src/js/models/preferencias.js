var mongoose= require('mongoose');
Schema=mongoose.Schema;

var preferenciasSchema= new mongoose.Schema({
    hobbie:String,
    generoPreferido:String,
    edadminima:Number,
    edadmaxima:Number,
    ciudades: String,
    busco:String
});
var preferencias=mongoose.model('preferencias',preferenciasSchema);
module.exports=preferencias;
var Preferencias=require("../models/preferencias");
    express=require("express");
    router=express.Router();

router.post('/crearPreferencia',(req,response)=>{
        var body=req.body;
        console.log(body);
        Preferencias.insertMany({
            hobbie: body.hobbie,
            generoPreferido: body.generoPreferido,
            edadminima:body.edadminima,
            edadmaxima:body.edadmaxima,
            ciudades: body.ciudades,
            busco:body.busco
        }).then(function () {
            console.log("Successfully saved defult items to DB");
            response.status(200).json("Datos Guardados");
        })
        .catch(function (err) {
            console.log(err);
            response.status(500).json("Ocurrio un error al guardar")
        });;
    
    });
    router.post('/editarPreferencia',(req,response)=>{
        var body=req.body;
        Preferencias.updateOne({
            _id:body.id //decir con que campo voy a actualizar
            
        },{
            $set:{
                hobbie: body.hobbie,
                generoPreferido: body.generoPreferido,
                edadminima:body.edadminima,
                edadmaxima:body.edadmaxima,
                ciudades: body.ciudades,
                busco:body.busco
            }
        }).then(function () {
            console.log("Se actualizo en base");
            response.status(200).json("Datos Actualizados");
        })
        .catch(function (err) {
            console.log(err);
            response.status(500).json("Ocurrio un error al actualizar")
        });
    
    });
    router.post('/eliminarPersona',(req,response)=>{
        var body=req.body;
        Preferencias.deleteOne({
            _id:body.id
        }).then(function () {
            console.log("Se elimino en base");
            response.status(200).json("Datos eliminados");
        })
        .catch(function (err) {
            console.log(err);
            response.status(500).json("Ocurrio un error al eliminar")
        });
    });
    module.exports=router;
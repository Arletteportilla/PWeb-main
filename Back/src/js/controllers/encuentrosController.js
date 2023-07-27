var Encuentros=require("../models/encuentros");
    express=require("express");
    router=express.Router();

router.post('/crearEncuentro',(req,response)=>{
        var body=req.body;
        console.log(body);
        Encuentros.insertMany({
            personaA:body.personaA,
            personaB:body.personaB,
            lugar:body.lugar,
            latitud:body.latitud,
            longitud:body.longitud
        }).then(function () {
            console.log("Successfully saved defult items to DB");
            response.status(200).json("Datos Guardados");
        })
        .catch(function (err) {
            console.log(err);
            response.status(500).json("Ocurrio un error al guardar")
        });;
    
    });
    router.post('/editarEncuentro',(req,response)=>{
        var body=req.body;
        Encuentros.updateOne({
            _id:body.id //decir con que campo voy a actualizar
            
        },{
            $set:{
                personaA:body.personaA,
                personaB:body.personaB,
                lugar:body.lugar,
                latitud:body.latitud,
                longitud:body.longitud
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
    router.post('/eliminarEncuentro',(req,response)=>{
        var body=req.body;
        Encuentros.deleteOne({
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
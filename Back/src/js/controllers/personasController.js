var Personas=require("../models/personas");
    express=require("express");
    router=express.Router();

router.post('/crearPersona',(req,response)=>{
    var body=req.body;
    console.log(body);
    Personas.insertMany({
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        genero:body.genero,
        estadoCivil:body.estado,
        descripcion:body.descripcion,
        telefono:body.tel
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
    })
    .catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrio un error al guardar")
    });;

});
router.post('/editarPersona',(req,response)=>{
    var body=req.body;
    Personas.updateOne({
        _id:body.id //decir con que campo voy a actualizar
        
    },{
        $set:{
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        genero:body.genero,
        estadoCivil:body.estado,
        descripcion:body.descripcion,
        telefono:body.tel
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
    Personas.deleteOne({
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
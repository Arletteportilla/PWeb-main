
const express=require('express'),
    router=express.Router()
    personas=require('../controllers/personasController');
    preferencias=require('../controllers/preferenciasController');
    encuentros=require('../controllers/encuentrosController');

router.use("/personas", personas);
router.use("/preferencias", preferencias);
router.use("/encuentros",encuentros);

module.exports=router;

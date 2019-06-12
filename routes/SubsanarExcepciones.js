const express = require('express');
const router = express.Router();
const session = require('express-session');
let ConsSubExcep = require("../models/SubsanarExcepciones");


/* GET home page. */
router.get('/', function(req, res, next) {
  sess=session;
  if (!sess.usuario){
    res.render('index', { titulo: 'Aplicaciones AV VILLAS',mensaje: 'Registrese, Realice su gestión diaria' });
  }
  else{
    res.render('ConsultaSubExep', { titulo: 'Cargas de trabajo - Subsanar excepciones' + sess.usuario + ' ' + sess.password,datos:  ConsSubExcep.FncConsultarExcep(sess.usuario) });
  }
});

router.post('/', function (req, res) {
  let DatConsUtila = req.body.EnvioDatos;
  let datConUtilaciones = DatConsUtila.split(',');
  res.render('ConsultaUtiizaciones', { titulo: 'Consulta de Utilizaciones',  datos: ConsSubExcep.FncConsultarUtiliza(datConUtilaciones[0],datConUtilaciones[1],datConUtilaciones[2]) });
});

module.exports = router;

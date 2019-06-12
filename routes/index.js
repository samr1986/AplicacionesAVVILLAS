const express = require('express');
const router = express.Router();
const session = require('express-session');
let Logeo = require("../models/index");
/* GET home page. */
router.get('/', function(req, res, next) {
  sess=session;
  if (sess.usuario){
    delete sess.usuario
    delete sess.password
  }
  res.render('index', { titulo: 'Aplicaciones AV VILLAS',mensaje: 'Realice su gestión diaria' });
});

router.post('/', function (req, res) {
  if(Logeo.Logueo(req.body.usuario,req.body.password)){
    //session = 'SI'
    sess=session;
    sess.usuario=req.body.usuario;
    sess.password=req.body.password;
    res.render('bienvenido', { titulo: 'Aplicaciones AV VILLAS',mensaje: 'bienvenido ' +  req.body.usuario + ' '});
  }else {
    res.render('index', { titulo: 'Aplicaciones AV VILLAS',mensaje: 'Realice su gestión diaria <> contraseña invalida '});  
  }
});

module.exports = router;

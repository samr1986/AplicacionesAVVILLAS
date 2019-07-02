const session = require('express-session');
const express = require('express');
const router = express.Router();
let Logeo = require("../models/index");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.clearCookie('user_sid');
    res.render('index', { titulo: 'Aplicaciones AV VILLAS', mensaje: 'Realice su gestión diaria ' });
});

router.post('/', function(req, res) {
    let log = {
        identificacion: '',
        password: ''
    };
    /*if (Logeo.Logueo(req.body.usuario, req.body.password)) {
        log.identificacion = req.body.usuario;
        log.password = req.body.password;
        res.cookie('user_sid', log, { maxAge: 360000, httpOnly: false });
        res.render('bienvenido', { titulo: 'Aplicaciones AV VILAS', mensaje: 'bienvenido ' + log.identificacion });
    } else {
        res.render('index', { titulo: 'Aplicaciones AV VILLAS', mensaje: 'Realice su gestión diaria <> contraseña invalida ' });
    }*/
    res.render('bienvenido', { titulo: 'Aplicaciones AV VILAS', mensaje: 'bienvenido ' + Logeo.Logueo(req.body.usuario, req.body.password) });
});

module.exports = router;
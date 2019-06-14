const session = require('express-session');
const express = require('express');
const router = express.Router();
let ConsSubExcep = require("../models/SubsanarExcepciones");


/* GET home page. */
router.get('/', function(req, res, next) {
    let usercookie = req.cookies['user_sid'];
    if (!usercookie) {
        res.render('index', { titulo: 'Aplicaciones AV VILLAS', mensaje: 'Registrese, Realice su gestión diaria ' });
    } else {
        let usercookieJS = usercookie;
        res.render('ConsultaSubExep', { titulo: 'Cargas de trabajo - Subsanar excepciones ', datos: ConsSubExcep.FncConsultarExcep(usercookieJS.identificacion) });
    }
});

router.post('/', function(req, res) {
    let DatConsUtila = req.body.EnvioDatos;
    let datConUtilaciones = DatConsUtila.split(',');
    res.render('ConsultaUtiizaciones', { titulo: 'Consulta de Utilizaciones', datos: ConsSubExcep.FncConsultarUtiliza(datConUtilaciones[0], datConUtilaciones[1], datConUtilaciones[2]) });
});

module.exports = router;
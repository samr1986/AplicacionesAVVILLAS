module.exports.Logueo = function(usu, pass) {
    let InvocaRestService = require("../models/Invocarservicio");
    let metodo = 'GET'
    let url = 'https://ws-rest-creditoempresarial.azurewebsites.net/login?usuario=' + usu + '&password=' + pass;
    let respuestaLogin = InvocaRestService.invocarServicio(metodo, url);
    if (respuestaLogin.salida.codigoRespuesta == 0) {
        return true;
    } else {
        return false;
    }
};
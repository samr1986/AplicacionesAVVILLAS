let InvocaRestService = require("../models/Invocarservicio");

module.exports.Logueo = function(usu, pass) {
    let metodo = 'GET'
    let url = 'https://ws-rest-creditoempresarial.azurewebsites.net/login?usuario=' + usu + '&password=' + pass;
    let respuestaLogin = InvocaRestService.invocarServicio(metodo, url);
    return respuestaLogin + 'salida: ' + respuestaLogin.salida;
    /*if (respuestaLogin.salida.codigoRespuesta == 0) {
        return true;
    } else {
        return false;
    }*/
};
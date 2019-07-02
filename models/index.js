/*let loginSchema = {
    usuario:'',
    password: ''};

let login = module.exports = loginSchema;*/

let InvocaRestService = require("../models/Invocarservicio");

module.exports.Logueo = function(usu, pass) {
    let metodo = 'GET'
    let url = 'https://ws-rest-creditoempresarial.azurewebsites.net/login?usuario=' + usu + '&password=' + pass;
    let respuestaLogin = InvocaRestService.invocarServicio(metodo, url);
    return respuestaLogin;
    /*login.usuario = usu;
    login.password = pass;*/
    /*if ((login.usuario == '1022327142' && login.password == 'melo') || (login.usuario == '19220251' && login.password == 'ramos')) {
        return true;
    } else {
        return false;
    }*/
};
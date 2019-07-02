/*let loginSchema = {
    usuario:'',
    password: ''};

let login = module.exports = loginSchema;*/

let InvocaRestService = require("../models/Invocarservicio");

module.exports.Logueo = function(usu, pass) {
    let url = 'https://ws-rest-creditoempresarial.azurewebsites.net';
    let path = '/login?usuario=1022327142&password=melo';
    let respuestaLogin = InvocaRestService.invocarServicio(url, path);
    return JSON.stringify(respuestaLogin);
    /*login.usuario = usu;
    login.password = pass;*/
    /*if ((login.usuario == '1022327142' && login.password == 'melo') || (login.usuario == '19220251' && login.password == 'ramos')) {
        return true;
    } else {
        return false;
    }*/
};
let loginSchema = {
    usuario:'',
    password: ''};

let login = module.exports = loginSchema;

module.exports.Logueo = function(usu, pass){
    login.usuario = usu;
    login.password = pass;
    if ((login.usuario == '1022327142' && login.password == 'melo') || (login.usuario == '19220251' && login.password == 'ramos')) {
        return true;
    } else {
        return false;
    }
};
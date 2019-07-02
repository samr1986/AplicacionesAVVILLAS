let request = require('sync-request');
module.exports.invocarServicio = function(metodo, url, opciones) {
    let response = request(
        metodo,
        url,
        opciones
    );
    return JSON.parse(response.body);
};
let request = require('sync-request');
module.exports.invocarServicio = function(url, path) {
    let response = request(
        'GET',
        url + path
    );
    return response.body;
};
let request = require('sync-request');
module.exports.invocarServicio = function(url, path) {
    console.log("url: " + url);
    let response = request(
        'GET',
        url + path
    );
    console.log("Status Code (function) : " + response.statusCode);
    console.log("body : " + response.body);
    return response;
};
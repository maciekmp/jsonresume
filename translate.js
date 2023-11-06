var config = require('./config.js');
var resume = require('./resume_pl.json');

// Require the module and instantiate instance
var TJO = require('translate-json-object')();

// Choose the service to use google/yandex,
// if you provide both yandex will be used as the default
TJO.init({
    googleApiKey: config.googleApiKey,
});

// Translate method takes (source object, and language code)
TJO.translate(resume, 'en')
    .then(function(data) {
        var fs = require('fs');
        fs.writeFile('resume.json', JSON.stringify(data, null, 2), 'utf8', function() {});
    }).catch(function(err) {
    console.log('error ', err)
});

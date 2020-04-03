let http = require('http');

let ourApp = http.createServer(function (req, res) {
    if (req.url == '/') {
        console.log(req.url);
        res.end('Welcome to our website');
    }

    if (req.url == '/about') {
        console.log(req.url);
        res.end('Thank you for the interest in our company.');
    }

    res.end('Not found');
});



ourApp.listen(3000);
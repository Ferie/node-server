// Required node modules
var express = require('express');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
var expressStaticGzip = require('express-static-gzip');

//*** Configuration ***//
// Set your distribution path here
var mainFile = '/index.html';

// Set your available server port here
var serverPort = 9000;
//*** End Configuration ***//

// Read other cofigurations from a `.env` file (if present)
dotenv.load();

// Start the server
var server = express();

// Parse incoming request bodies in a middleware before your handlers (if needed)
server.use(bodyParser.json());

// Server to serve Brotli files if supported by browser, the fallback is to Gzip
server.use('/', expressStaticGzip(__dirname), {
    enableBrotli: true
});

// Get the URL and redirect http to https in production environment else redirect to the main file
server.get(/.*/, function (req, res) {
    if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production')
        res.redirect('https://' + req.hostname + req.url);
    else
        res.sendFile(__dirname + mainFile);
});

server.listen(serverPort, function () {
    console.log("Start surfing at port:%d", serverPort);
});

(function () {
    'use strict';
    var express = require('express')
        , path = require('path')
        , port = process.env.PORT || 8000
        , app = express();
    app.use(express.static(path.join(__dirname)));
    app.get('/', function (req, res) {
        res.sendStatus(200);
    });
    app.listen(port, function (err) {
        console.log('Running at port:' + port);
    });
}());
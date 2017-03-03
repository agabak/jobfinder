(function () {
    'use strict';
    var express = require('express'),
        path = require('path'),
        port = process.env.PORT || 8000,
        mongoose = require('mongoose'),
        jobModel = require('./models/job'),
        localMongoose = 'mongodb://localhost:27017/jobfinder',
        mongooseLab = 'mongodb://agaba:gabby123@ds133328.mlab.com:33328/agabajob',
        app = express();
    app.use(express.static(path.join(__dirname)));

    app.get('/api/jobs', function (req, res) {
        mongoose.model('Job').find({}).exec(function (error, collection) {
            if (error) {
                console.log(error);
            } else {
                res.send(collection);
            }
        });
    });

    app.get('/', function (req, res) {
        res.sendStatus(200);
    });

    mongoose.connect(mongooseLab, function () {
        jobModel.seedJobs();
        console.log('connect  to mongoose db succeful !');
    });

    app.listen(port, function (err) {
        console.log('Running at port:' + port);
    });
}());

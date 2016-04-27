var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/btb';

var db;
mongoClient.connect(mongoUrl, function(error, database) {
    db = database;
})

router.get('/search', function(req, res, next) {
    db.collection('students').find({}).toArray(function(error, studentResults) {
        res.json(studentResults);
    });
})

router.post('/search', function(req, res, next) {
    var studentName = req.body.name;

    db.collection('students').find({ name: studentName }).toArray(function(error, studentResults) {
        if (studentResults.length === 0) {
            db.collection('students').insertOne({ name: studentName });
            res.json("Sorry, there were no results.  Added " + studentName);
        } else {
            res.json(studentResults[0].name);
        }
    });
})
module.exports = router;

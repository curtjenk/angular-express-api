var express = require('express');
var router = express.Router();


router.post('/search', function(req, res, next) {
  var name = req.body.name;
  var dcClass = ['Tristan', 'Josh', 'Keith', 'Bogdan', 'Will', 'Curtis',
     'Joe', 'Kochan', 'Patrick', 'Jonathan', 'Jeremy'];

  if (dcClass.indexOf(name) > -1) {
       res.json({message: "Hello, " + name + " you are a student"});
  } else {
       res.json({message: "You are not in this class"});  //respond with a json object
}

})
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var sum = 0;
	var response = "başlangıç zamanı " + new Date();
	for (var i = 0; i< 10000000000; i++) {
		sum += i * 23;
	}
	response += " bitiş zamanı : " + new Date();
  res.json(response);
});

module.exports = router;

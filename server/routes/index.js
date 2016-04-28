var router = require('express').Router();
var path = require('path');




router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
})

router.get('/*', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
})
// this helps us when we need go to the route once the page has been refreshed. That way we won't get a "Can't GET" error.

module.exports = router;

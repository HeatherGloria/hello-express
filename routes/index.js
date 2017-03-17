var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  // it depends on what is in here
  res.render('index', {message: "Hello Express!"})
})

module.exports = router

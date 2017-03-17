var express = require('express')
var router = express.Router()

router.get('/cupcakes', (req, res) => {
  // it depends on what is in here
  res.render('index', {message: "Yum!!"})
})

router.get('/cookies', (req, res) => {
  res.render('index', {message: "yeah!!!"})
})

router.get('/brownies', (req, res) => {
  res.render('index', {message: 'Love Grandma Waffle\'s Brownies!!!'})
})

module.exports = router

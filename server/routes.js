const express = require('express')
const { getCovidTestingSites, getCitiesByState, getCountiesByState, updateQuantity } = require('./db')

const router = express.Router()

router.get('/covid-testing-sites', (req, res) => {
  getCovidTestingSites()
    .then((items) => {
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})
router.get('/cities-by-state/:state', (req, res) => {
  const { state } = req.params
  getCitiesByState(state)
    .then((items) => {
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})
router.get('/counties-by-state', (req, res) => {
  getCountiesByState()
    .then((items) => {
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})

module.exports = router

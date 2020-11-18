const express = require('express')
// const Joi = require('@hapi/joi')
const { getCovidTestingSites, getCitiesByState, getCountiesByState, updateQuantity } = require('./db')

const router = express.Router()

// const itemSchema = Joi.object().keys({
//   name: Joi.string(),
//   quantity: Joi.number().integer().min(0)
// })

// router.post('/item', (req, res) => {
//   const item = req.body
//   console.log(req.body)
//   const result = itemSchema.validate(item)
//   if (result.error) {
//     console.log(result.error)
//     res.status(400).end()
//     return
//   }
//   insertItem(item)
//     .then(() => {
//       res.status(200).end()
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).end()
//     })
// })

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


// router.put('/item/:id/quantity/:quantity', (req, res) => {
//   const { id, quantity } = req.params
//   updateQuantity(id, parseInt(quantity))
//     .then(() => {
//       res.status(200).end()
//     })
//     .catch((err) => {
//       console.log(err)
//       res.status(500).end()
//     })
// })

module.exports = router

const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb+srv://brian:ngmaps@cluster0.ygs2r.mongodb.net/test'
const dbName = 'ngmaps'

let db

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName)
  })

// const insertItem = (item) => {
//   const collection = db.collection('items')
//   return collection.insertOne(item)
// }

const getCovidTestingSites = () => {
  const collection = db.collection('covid_testing_sites')
  return collection.find({}).toArray()
}
const getCitiesByState = (state) => {
  const collection = db.collection('uscities');
  return collection.find({$or: [{state_id: state},{state_name: state}]}).toArray();
}
const getCountiesByState = () => {
  const collection = db.collection('uscities');
  return collection.aggregate([
    {
      '$group': {
        '_id': {
          'state': '$state_name'
        }, 
        'counties': {
          '$addToSet': '$county_name'
        }, 
        'counties_count': {
          '$sum': '$county_name'
        }
      }
    }, {
      '$project': {
        '_id': 0, 
        'state': '$_id.state', 
        'counties': 1
      }
    }
  ]).toArray();
}
// const updateQuantity = (id, quantity) => {
//   const collection = db.collection('items')
//   return collection.updateOne({ _id: ObjectId(id) }, { $inc: { quantity } })
// }

module.exports = { init, getCovidTestingSites, getCitiesByState, getCountiesByState }

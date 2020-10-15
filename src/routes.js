const express = require('express')
const Router = express.Router()
const PeopleController = require('./controllers/PeopleController.js')
const CultController = require('./controllers/CultController.js')

Router.get('/', (req,res) => {
    return res.status(200).json({message: 'Api connected'})
})

Router.get('/people/:cultId', PeopleController.index)
Router.post('/people/:cultId', PeopleController.create)
Router.put('/people/:id', PeopleController.update)

Router.get('/cult', CultController.index)
Router.post('/cult', CultController.create)

module.exports = Router;
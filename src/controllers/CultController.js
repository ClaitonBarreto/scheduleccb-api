const Cult = require('../models/Cult.js')
const moment = require('moment')

module.exports = {
    index: async (req,res) => {
        const cults = await Cult.find()

        return res.json(cults)
    },
    create: async (req,res) => {
        const { date } = req.body

        const hasDate = await Cult.find({
            date: new Date(date)
        })

        if(hasDate.length > 0) {
            return res.status(400).json({
                error: true,
                message: 'Já existe um culto cadastrado com essa data'
            })
        }

        const newCult = await Cult.create({
            date: new Date(date)
        })

        return res.json(newCult)
    },  
    update: () => {

    },
    delete: () => {

    }
}
const Peoples = require('../models/Peoples')

module.exports = {
    index: async (req,res) => {
        const { cultId } = req.params

        const peoples = await Peoples.find({
            cult: cultId
        })

        return res.json(peoples)
    },
    create: async (req,res) => {
        const { name } = req.body
        const { cultId } = req.params

        const newPeople = await Peoples.create({
            name,
            cult: cultId,
            checked: false
        })

        return res.json(newPeople)
    },  
    update: () => {

    },
    delete: () => {

    }
}
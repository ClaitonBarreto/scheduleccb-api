const Peoples = require('../models/Peoples')

module.exports = {
    index: async (req,res) => {
        const { cultId } = req.params

        const peoples = await Peoples.find({
            cult: cultId
        }).sort({name: 'asc'})

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
    update: async (req,res) => {
        const {id} = req.params

        const update = await Peoples.updateOne({_id: id}, {checked: true})

        if(update.nModified == 1) {
            return res.status(200).json({
                error: false,
                message: 'participante confirmado'
            })
        }

        return res.status(200).json({
            error: true,
            message: 'Ocorreu um erro ao tentar confirmar o participante'
        })
    },
    getCountPeople: async (req,res) => {
        const { cultId } = req.params
        const count = await Peoples.find({
            cult: cultId
        }).countDocuments()

        res.status(200).json({
            count
        })
    },
    delete: () => {

    }
}
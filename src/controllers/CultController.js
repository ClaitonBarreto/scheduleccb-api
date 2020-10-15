const Cult = require('../models/Cult.js')
const format = require('date-fns/format')
const ptBR = require('date-fns/locale/pt-BR')
const parseISO = require('date-fns/parseISO')
const { pt } = require('date-fns/locale')


module.exports = {
    index: async (req,res) => {
        const cults = await Cult.find()

        return res.json(cults)
    },
    create: async (req,res) => {

        const { date } = req.body
        const permissedDays = ['sábado','terça']

        const stringDay = format(parseISO(date), 'cccc', {locale: ptBR})
        
        if(permissedDays.indexOf(stringDay) == -1) {
            return res.status(200).json({
                error: true,
                message: 'Só é permitido cadastrar cultos para terças e sábados'
            })
        }

        const hasDate = await Cult.find({
            date
        })

        if(hasDate.length > 0) {
            return res.status(200).json({
                error: true,
                message: 'Já existe um culto cadastrado com essa data'
            })
        }

        const newCult = await Cult.create({
            date: new Date(date)
        })

        return res.json(newCult)
    },  
    update: async (req,res) => {

    },
    delete: () => {

    }
}
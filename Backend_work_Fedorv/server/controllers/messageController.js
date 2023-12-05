const {Message} = require('../models/models')


class MessageController{
    async create(req,res){
        const {message,userId,modelId} = req.body
        const msg = await Message.create({message,userId,modelId})
        return res.json(msg)
    }

    async  get(req,res){
        const message = await Message.findAll()
        return res.json(message)
    }
}

module.exports = new MessageController()
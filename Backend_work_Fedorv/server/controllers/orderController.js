const {Order} = require('../models/models')
const ApiError = require('../error/ApiError');

class OrderController{
    async create(req,res){
        const {status} = req.body
        const type = await Order.create({status})
        return res.json(type)
    }

    async get(req,res){
const order = await Order.findAll()
return res.json(order)
    }
}

module.exports = new OrderController()
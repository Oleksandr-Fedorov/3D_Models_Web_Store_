const uuid = require('uuid')
const path = require('path')
const ApiError = require("../error/ApiError")
const {Model,ModelInfo} = require('../models/models')

class ModelController{
    async create(req,res,next){
        try{
              const {name,price,typeId,info} = req.body
              const {img} = req.files
              let fileName = uuid.v4()+".jpg"
              img.mv(path.resolve(__dirname, '..', 'static', fileName))

              
              const model = await Model.create({name,price,typeId,authorId,img:fileName})

              if(info)
              {
                info = JSON.parse(info)
                info.forEach(i=>
                  ModelInfo.create({
                    Numbers_download: i.Numbers_download,
                    date_of_creation: i.date_of_creation,
                    date_of_last_upd:i,date_of_last_upd,
                    modelId : model.id
                  }))
              } 

              return res.json(model)}
              catch(e)
              {
                next(ApiError.badRequest(e.message))
              }
    }

    async  getAll(req,res){
        let {typeId,authorId,limit,page}=req.query
        page = page || 1
        limit = limit || 9
        let offset = page*limit-limit
        let model;
        if(!typeId && !authorId)
        {
          model = await Model.findAndCountAll({limit,offset})
        }
        if(authorId && !typeId)
        {
          model = await Model.findAndCountAll({where:{authorId},limit,offset})
        }
        if(!authorId && typeId)
        {  model = await Model.findAndCountAll({where:{typeId},limit,offset})}
        if(authorId && typeId)
        {  model = await Model.findAndCountAll({where:{authorId,typeId},limit,offset})}
        return res.json(model)
    }

    async getOne(req,res){
      const {id} = req.params
      const model = await Model.findOne(
        {
          where:{id},
          include: [{model: ModelInfo,as: 'info'}]
        }
      )
      return res.json(model)
    }
}

module.exports = new ModelController()
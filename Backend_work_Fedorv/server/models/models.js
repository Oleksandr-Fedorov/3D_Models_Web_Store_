const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Basket_model = sequelize.define('basket_model', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Model = sequelize.define('model', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    message: {type: DataTypes.STRING, allowNull: false}
})

const ModelInfo = sequelize.define('model_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Numbers_download: {type: DataTypes.INTEGER},
    date_of_creation: {type: DataTypes.DATE, allowNull: false},
    date_of_last_upd: {type: DataTypes.DATE, allowNull: false},
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date_of_order: {type: DataTypes.DATE,allowNull:false},
    amount : {type: DataTypes.INTEGER, allowNull: false},
    status : {type: DataTypes.STRING, defaultValue: "in queue"},
})


User.hasOne(Basket)
Basket.belongsTo(User)


User.hasMany(Rating)
Rating.belongsTo(User)

Model.hasMany(Rating)
Rating.belongsTo(Model)


User.hasMany(Message)
Message.belongsTo(User)

Model.hasMany(Message)
Message.belongsTo(Model)


Basket.hasMany(Basket_model)
Basket_model.belongsTo(Basket)


Model.hasMany(Basket_model)
Basket_model.belongsTo(Model)


Type.hasMany(Model)
Model.belongsTo(Type)


Model.hasMany(Basket_model)
Basket_model.belongsTo(Model)

Model.hasOne(ModelInfo, {as: 'info'});
ModelInfo.belongsTo(Model)

Model.hasOne(User,{as:'authorId'})
Model.belongsTo(User)


module.exports = {
    User,
    Basket,
    Basket_model,
    Model,
    Type,
    Order,
    Rating,
    Message,
    ModelInfo
}

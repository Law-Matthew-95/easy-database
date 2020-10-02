const {Model, Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

class Restaurant extends Model{}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
}, {sequelize: sequelize})

class Menu extends Model{}
Menu.init({
    title: DataTypes.STRING,
}, {sequelize})

class Item extends Model{}
Item.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
}, {sequelize})

Restaurant.hasMany(Menu)
Menu.belongsTo(Restaurant)
Menu.hasMany(Item)
Item.belongsTo(Menu)

module.exports = {
    Restaurant,
    Menu,
    Item,
    sequelize
}
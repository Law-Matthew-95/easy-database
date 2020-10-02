const {Restaurant, sequelize, Menu, Item} = require('./model')

beforeAll(async () => {
    await sequelize.sync()
})

describe('restaurant', () => {
    test('When a restaurant is made it gets added to the database', async () =>{
        const restaurant = await Restaurant.create({title: 'The Sands End', image:'url'})    
        expect(restaurant.id).toBeTruthy()

    })
})    
describe('menu', () => {
    test('When a menu is made it gets added to the database', async () =>{
        const restaurant = await Restaurant.create({title: 'Hawksmoor', image: 'url'})
        const menu = await Menu.create({title: 'Lunch'})
        await restaurant.addMenu(menu)
        const menus = await restaurant.getMenus()
        expect(menus[0].title).toBe('Lunch')
    })
})
describe('item', () => {
    test('When a item is made it gets added to the database', async () => {
        // const restaurant = await Restaurant.create({title: 'Hawksmoor', image: 'url'})
        // console.log(restaurant);
        const menu = await Menu.create({title: 'Lunch'})
        // await restaurant.addMenu(menu)
        // console.log(menu);
        // const menus = await restaurant.getMenus()
        const item = await Item.create({name: 'BLT', price: 5.50})
        await menu.addItem(item)
        const items = await menu.getItems()
        // console.log(item);
        expect(items[0].price).toBe(5.50)
    })
})


const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Product = require('./models/Product')
const User = require('./models/User')
const Cart = require('./models/Cart')
const products = require('./data/products')

dotenv.config()


mongoose.connect(process.env.MONGO_URI)

const seedData = async () => {
    try {
        await Product.deleteMany()
        await User.deleteMany()
        await Cart.deleteMany()
        const createdUser = await User.create({
            name: 'person two',
            email: 'two@two.com',
            password: '123456',
            role: 'admin'
        })
        const userId = createdUser._id
        const sampleProducts = products.map((products) => {
            return { ...products, user: userId, }
        })
        await Product.insertMany(sampleProducts)
        console.log('product data seeded')
        process.exit()
    } catch (error) {
        console.error('error seeding data', error)
        process.exit(1)
    }
}










seedData()
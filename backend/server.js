const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const checkoutRoutes = require('./routes/checkoutRoutes')
const orderRoutes = require('./routes/orderRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const subscriberRoutes = require('./routes/subscriberRoutes')
const adminRoutes = require('./routes/adminRoutes')
const productAdminRoutes = require('./routes/productAdminRoutes')
const adminOrderRoutes = require('./routes/adminOrderRoutes')


app.use(express.json())
app.use(
    cors({
        origin: ["https://mernecommerce-gql7.vercel.app", "https://mernecommerce-gql7-n7o5wngk4-carlos-projects-b4082f29.vercel.app"],
        credentials: false,
    })
);

dotenv.config()
const PORT = process.env.PORT || 3000

connectDB()


app.get('/', (req, res) => {
    res.send('mern')
})


app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/checkout', checkoutRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api', subscriberRoutes)


app.use('/api/admin/users', adminRoutes)
app.use('/api/admin/products', productAdminRoutes)
app.use('/api/admin/orders', adminOrderRoutes)

app.listen(PORT, () => {
    console.log(`server running http://localhost:${PORT}`)
})
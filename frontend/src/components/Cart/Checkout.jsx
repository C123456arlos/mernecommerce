import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PayPalButton from "./PayPalButton"
import { useDispatch, useSelector } from "react-redux"
import { createCheckout } from "../../redux/slices/checkoutSlice"
import axios from "axios"


const Checkout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { cart, loading, error } = useSelector((state) => state.cart)
    const { user } = useSelector((state) => state.auth)
    const [checkoutId, setCheckoutId] = useState(null)
    const [shippingAddress, setShippingAddress] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        phone: ''
    })
    useEffect(() => {
        if (!cart || !cart.products || cart.products.length === 0) {
            navigate('/')
        }
    }, [cart, navigate])


    const handleCreateCheckout = async (e) => {
        e.preventDefault()
        if (cart && cart.products.length > 0) {
            const res = await dispatch(createCheckout({
                checkoutItems: cart.products,
                shippingAddress,
                paymentMethod: 'Paypal',
                totalPrice: cart.totalPrice
            }))
            if (res.payload && res.payload._id) {
                setCheckoutId(res.payload._id)
            }
        }
    }
    const handlePaymentSuccess = async (details) => {

        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/pay`,
                { paymentStatus: 'paid', paymentDetals: details },
                {
                    headers: {

                        Authorization: `Bearer ${localStorage.getItem('userToken')}`
                    }

                }


            )
            // const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/6a3bc8bad577c0af3768ba48/pay`,
            //     { paymentStatus: 'paid', paymentDetals: details })
            {
                // headers: {
                //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEzODU1ZDcxZDk3YzIxNGNjZjlkOWM3Iiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTc4MjI2MTIyOSwiZXhwIjoxNzgyNDA1MjI5fQ.xfIe3sVa06FzxLKOnbLVvqMx_h02toaHaq05kslkD_o`
                //     // Authorization: `Bearer ${localStorage.getItem('userToken')}`
                // }

            }

            // if (response.status === 200) {
            await handleFinalizeCheckout(checkoutId)
            // } else {
            //     console.error(error)
            // }
        } catch (error) {
            console.error(error)
        }
    }

    const handleFinalizeCheckout = async (checkoutId) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/finalize`, {},
                { headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}`, } }
            )
            // if (response.status === 200) {
            navigate('/order-confirmation')
            // } else {
            //     console.error(error)
            // }
        } catch (error) {
            console.error(error)
        }
    }
    if (loading) return <p>loading cart</p>
    if (error) return <p>error {error}</p>
    if (!cart || !cart.products || cart.products.length === 0) {
        return <p>empty cart</p>
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl uppercase mb-6">checkout</h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className="text-lg mb-4">contact details</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700">email</label>
                        <input type="email" value={user ? user.email : ''} className="w-full p-2 border rounded" disabled></input>
                    </div>
                    <h3 className="text-lg mb-4">delivery</h3>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>

                            <label className="block text-gray-700">first name</label>
                            <input type="text" className="w-full p-2 border rounded" value={shippingAddress.firstName} onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })} required></input>
                        </div>
                        <div>

                            <label className="block text-gray-700">last name</label>
                            <input type="text" className="w-full p-2 border rounded"
                                value={shippingAddress.lastName} onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })} required></input>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">address</label>
                        <input type="text" value={shippingAddress.address} onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })
                        } className="w-full p-2 border rounded" required></input>
                    </div>

                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>

                            <label className="block text-gray-700">city</label>
                            <input type="text" className="w-full p-2 border rounded" value={shippingAddress.city} onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })} required></input>
                        </div>
                        <div>

                            <label className="block text-gray-700">postal code</label>
                            <input type="text" className="w-full p-2 border rounded"
                                value={shippingAddress.postalCode} onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })} required></input>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">country</label>
                        <input type="text" value={shippingAddress.country} onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })
                        } className="w-full p-2 border rounded" required></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">phone</label>
                        <input type="text" value={shippingAddress.phone} onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })
                        } className="w-full p-2 border rounded" required></input>
                    </div>
                    <div className="mt-6">
                        {!checkoutId ? (<button type="submit" className="w-full bg-black text-white py-3 rounded">continue to payment</button>) : (
                            <div>
                                <h3 className="text-lg mb-4">paypal</h3>
                                <PayPalButton amount={cart.totalPrice} onSuccess={handlePaymentSuccess} onError={(err) => alert('payment failed try again')}></PayPalButton>
                            </div>
                        )}
                    </div>
                </form>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg mb-4">order summary</h3>
                <div className="border-top py-4 mb-4">
                    {cart.products.map((product, index) => (
                        <div key={index} className="flex items-start justify-between py-2 border-b">
                            <div className="flex items-start">
                                <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4"></img>
                                <div>
                                    <h3 className="text-md">{product.name}</h3>
                                    <p className="text-gray-500">size {product.size}</p>
                                    <p className="text-gray-500">color {product.color}</p>
                                </div>
                            </div>
                            <p className="text-xl">${product.price?.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center text-lg mb-4">
                    <p>subtotal</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center text-lg">
                    <p>shipping</p>
                    <p>free</p>
                </div>
                <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
                    <p>total</p>
                    <p>{cart.totalPrice?.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout




// 14:33
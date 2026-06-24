import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAllOrders, updateOrderStatus } from '../../redux/slices/adminOrderSlice'
import { useDispatch, useSelector } from 'react-redux'

const OrderManagement = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    const { orders, loading, error } = useSelector((state => state.adminOrders))
    console.log(orders)
    useEffect(() => {
        if (!user || user.role !== 'admin') {
            navigate('/')
        } else {
            dispatch(fetchAllOrders())
        }
    }, [dispatch, user, navigate])

    const handleStatusChange = (orderId, status) => {
        dispatch(updateOrderStatus({ id: orderId, status }))
    }
    if (loading) return <p>loading</p>
    if (error) return <p>error {error}</p>
    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-6'>order management</h2>
            <div className='overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='min-w-full text-left text-gray-500'>
                    <thead className='bg-gray-100 uppercase text-gray-700'>
                        <tr>
                            <th className='py-3 px-4'>order id</th>
                            <th className='py-3 px-4'>customer</th>
                            <th className='py-3 px-4'>total price</th>
                            <th className='py-3 px-4'>status</th>
                            <th className='py-3 px-4'>actions</th>
                        </tr>
                    </thead>
                    <tbody>{orders.length > 0 ? (orders.map((order) => <tr key={order._id} className='border-b hover:bg-gray-50 curosr-pointer'>
                        <td className='py-4 px-4 font-medium text-gray-500 whitespace-nowrap'>
                            #{order._id}
                        </td>
                        <td className='p-4'>{order?.user?.name}</td>
                        <td className='p-4'>{order.totalPrice.toFixed(2)}</td>
                        <td className='p-4'>
                            <select value={order.status} onChange={(e) => handleStatusChange(order._id, e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'>
                                <option value={'processing'}>processing</option>
                                <option value={'shipped'}>shipped</option>
                                <option value={'delivered'}>delivered</option>
                                <option value={'cnacel'}>cancelled</option>
                            </select>
                        </td>
                        <td className='p-4'>
                            <button onClick={() => handleStatusChange(order._id, 'delivered')} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 '>mark delivered</button>
                        </td>
                        {/* <td className='p-4'>{</td> */}
                    </tr>)) : (<tr>
                        <td colSpan={5} className='p-4 text-center text-gray-500'>no orders found</td>
                    </tr>)}</tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderManagement
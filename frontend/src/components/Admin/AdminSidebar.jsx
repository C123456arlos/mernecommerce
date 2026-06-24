import React from 'react'
import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/slices/authSlice'
import { clearCart } from '../../redux/slices/cartSlice'

const AdminSidebar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        dispatch(clearCart())
        navgate('/')
    }
    return (
        <div className='p-6'>
            <div className='smb-6'>
                <Link to='/admin' className='text-2xl font-medium'>app</Link>
            </div>
            <h2 className='text-xl font-medium text-cente'>admin dashboard</h2>
            <nav className='flex flex-col space-y-2'>
                <NavLink to='/admin/users' className={({ isActive }) => isActive ? 'bg-gray-700 text-white py-3 px-4 rounded flex items-center sapce-x-2' : 'text-gray-300 hvoer:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2'}>
                    <FaUser></FaUser>
                    <span>users</span>
                </NavLink>
                <NavLink to='/admin/products' className={({ isActive }) => isActive ? 'bg-gray-700 text-white py-3 px-4 rounded flex items-center sapce-x-2' : 'text-gray-300 hvoer:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2'}>
                    <FaBoxOpen></FaBoxOpen>
                    <span>products</span>
                </NavLink>
                <NavLink to='/admin/orders' className={({ isActive }) => isActive ? 'bg-gray-700 text-white py-3 px-4 rounded flex items-center sapce-x-2' : 'text-gray-300 hvoer:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2'}>
                    <FaClipboardList></FaClipboardList>
                    <span>orders</span>
                </NavLink>
                <NavLink to='/admin/shop' className={({ isActive }) => isActive ? 'bg-gray-700 text-white py-3 px-4 rounded flex items-center sapce-x-2' : 'text-gray-300 hvoer:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2'}>
                    <FaStore></FaStore>
                    <span>shop</span>
                </NavLink>
            </nav>
            <div className='mt-6'>
                <button onClick={handleLogout} className='w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2'>
                    <FaSignOutAlt></FaSignOutAlt>
                    <span>logout</span>
                </button>
            </div>
        </div>
    )
}

export default AdminSidebar
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import register from '../assets/register.webp'
import { registerUser } from '../redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { mergeCart } from '../redux/slices/cartSlice'
import { toast } from 'sonner'
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { user, guestId, loading, error } = useSelector((state) => state.auth)
    const { cart } = useSelector((state) => state.cart)
    const redirect = new URLSearchParams(location.search).get('redirect') || '/'
    const isCheckoutRedirect = redirect.includes('checkout')
    console.log(cart, user, guestId)
    useEffect(() => {
        if (user) {
            if (cart?.products.length > 0 && guestId) {
                dispatch(mergeCart({ guestId, user })).then(() => {
                    navigate(isCheckoutRedirect ? '/checkout' : '/')
                })
            } else {
                navigate(isCheckoutRedirect ? '/chekout' : '/')
            }
        }
    }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch])
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser({ name, email, password }))
        if (user == null) {
            toast.error('user exists', {
                style: { background: '#dba3a3', color: 'red' },
                duration: 1000
            })
        }
    }
    return (
        <div className='flex'>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
                <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
                    <div className='flex justify-center mb-6'>
                        <h2 className='text-xl font-medium'>ecommerce mern app</h2>
                    </div>
                    <h2 className='text-2xl font-bold text-center mb-6'>hey there </h2>
                    <p className='text-center mb-6'>
                        enter username and password
                    </p>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2'>name</label>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)}
                            className='w-full p-2 border rounded' placeholder='enter name'
                        ></input>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2'>email</label>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}
                            className='w-full p-2 border rounded' placeholder='enter email'
                        ></input>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold mb-2'>password</label>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-2 border rounded' placeholder='enter password'></input>
                    </div>
                    <button type='submit' className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition'>
                        {loading ? 'loading' : 'signup'}
                    </button>
                    <p className='mt-6 text-center text-sm'>already have account {' '}
                        <Link to={`/login?redirect=${encodeURIComponent(redirect)}`} className='text-blue-500'>login</Link></p>
                </form>
            </div>
            <div className='hidden md:block w-1/2 bg-gray-800'>
                <div className='h-full flex flex-col justify-center items-center'>
                    <img src={register} alt='login to account' className='h-[750px] w-full object-cover'></img>
                </div>
            </div>
        </div>
    )
}

export default Register





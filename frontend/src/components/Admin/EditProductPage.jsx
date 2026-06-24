import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchProductDetails, updateProduct } from '../../redux/slices/productSlice'
import axios from 'axios'


const EditProductPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { selectedProduct, loading, error } = useSelector((state) => state.products)

    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: 0,
        countInStock: 0,
        sku: '',
        category: '',
        brand: '',
        sizes: [],
        colors: [],
        collections: '',
        material: '',
        gender: '',
        images: []
    })
    const [uploading, setUploading] = useState(false)
    useEffect(() => {
        if (id) {
            dispatch(fetchProductDetails(id))
        }
    }, [dispatch, id])
    useEffect(() => {
        if (selectedProduct) {
            setProductData(selectedProduct)
        }
    }, [selectedProduct])
    const handleChange = (e) => {
        const { name, value } = e.target
        setProductData((prevData) => ({ ...prevData, [name]: value }))
    }
    const handleImageUpload = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        try {
            setUploading(true)
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/upload`, formData, {
                headers: { 'Contetn-Type': 'multipart/form-data' }
            })
            setProductData((prevData) => ({
                ...prevData,
                images: [...prevData.images, { url: data.imageUrl, altText: '' }]
            }))
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProduct({ id, productData }))
        navigate('/admin/products')
    }
    if (loading) return <p>loading</p>
    if (error) return <p>error {error}</p>
    return (
        <div className='max-w-5xl mx-auto p-6 shadow-md rounded-md'>
            <h2 className='text-3xl font-bold mb-6'>edit product</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>product name</label>
                    <input type='text' name='name' value={productData.name} onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md p-2' required></input>
                </div>
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>description</label>
                    <textarea name='description' value={productData.description} onChange={handleChange} className='w-full border border-gray-300 rounded-md p-2' rows={4} required></textarea>
                </div>
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>price</label>
                    <input type='number' name='price' value={productData.price} onChange={handleChange} className='w-full border border-gray-300 rounded p-2'></input>
                </div>
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>count in stock</label>
                    <input type='number' name='countInStock' value={productData.countInStock} onChange={handleChange} className='w-full border border-gray-300 rounded p-2'></input>
                </div>
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>sku</label>
                    <input type='text' name='sku' value={productData.sku} onChange={handleChange} className='w-full border border-gray-300 rounded p-2'></input>
                </div>
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>sizes</label>
                    <input type='text' name='size' value={productData.sizes.join(', ')} onChange={(e) => setProductData({ ...productData, sizes: e.target.value.split(',').map((size) => size.trim()) })} className='w-full border border-gray-300 rounded p-2'></input>
                </div>
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>colors</label>
                    <input type='text' name='colors' value={productData.colors.join(', ')} onChange={(e) => setProductData({ ...productData, colors: e.target.value.split(',').map((color) => color.trim()) })} className='w-full border border-gray-300 rounded p-2'></input>
                </div>
                <div className='mb-6'>
                    <label className='block font-semibold mb-2'>upload image</label>
                    <input type='file' onChange={handleImageUpload}></input>
                    {uploading && <p>uploading image</p>}
                    <div className='flex gap-4 mt-4'>
                        {productData.images.map((image, index) => (
                            <div key={index}>
                                <img src={image.url} alt={image.altText || 'product image'} className='w-20 h-20 object-cover rounded-md shadow-md'></img>
                            </div>
                        ))}
                    </div>
                </div>
                <button type='submit' className='w-full bg-greem-500 text-white py-2 rounded-md hover:bg-green-600 bg-green-700 transition-colors'>update product</button>
            </form>
        </div>
    )
}

export default EditProductPage
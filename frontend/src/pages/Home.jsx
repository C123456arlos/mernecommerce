import React, { useEffect, useState } from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeatureCollection'
import FeaturesSection from '../components/Products/FeaturesSection'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsByFilters } from '../redux/slices/productSlice'
import axios from 'axios'


// const products = [{
//     name: "Classic Oxford Button-Down Shirt",
//     description:
//         "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
//     price: 39.99,
//     discountPrice: 34.99,
//     countInStock: 20,
//     sku: "OX-SH-001",
//     category: "Top Wear",
//     brand: "Urban Threads",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//     colors: ["Red", "Blue", "Yellow"],
//     collections: "Business Casual",
//     material: "Cotton",
//     gender: "Men",
//     images: [
//         {
//             url: "https://picsum.photos/500/500?random=39",
//             altText: "Classic Oxford Button-Down Shirt Front View",
//         },
//         {
//             url: "https://picsum.photos/500/500?random=40",
//             altText: "Classic Oxford Button-Down Shirt Back View",
//         },
//     ],
//     rating: 4.5,
//     numReviews: 12,
// }]
const Home = () => {
    // const productFetchId = productId || id
    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (productFetchId) {
    //         dispatch(fetchProductDetails(productFetchId))
    //         dispatch(fetchSimilarProducts({ id: productFetchId }))
    //     }
    // }, [dispatch, productFetchId])





    // const { loading, error } = useSelector((state) => state.products)
    const { products, loading, error } = useSelector((state) => state.products)
    const [bestSellerProduct, setBestSellerProduct] = useState(null)
    const [productsRendered, setProductsRendered] = useState(null)

    useEffect(() => {
        dispatch(fetchProductsByFilters({
            // gender: 'women',
            // category: 'bottom wear',
            // limit: 2
        }))
        // useEffect(() => {
        //     dispatch(fetchProductsByFilters({
        //         gender: 'women',
        //         category: 'bottom wear',
        //         limit: 2
        //     }))
        const fetchBestSeller = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`)
                setBestSellerProduct(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchBestSeller()
    }, [dispatch])


    // useEffect(() => {
    //     dispatch(fetchProductsByFilters({
    //         gender: 'Women',
    //         category: 'top wear',
    //         limit: 2
    //     }))
    //     const fetchProductRendered = async () => {
    //         try {
    //             const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
    //             setProductsRendered(response.data)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     fetchProductRendered()
    // }, [dispatch])
    return (
        <div>
            <Hero></Hero>
            <GenderCollectionSection></GenderCollectionSection>
            <NewArrivals></NewArrivals>
            <h2 className='text-3xl text-center font-bold mb-4'>best seller</h2>

            {bestSellerProduct ? (<ProductDetails productId={bestSellerProduct._id}></ProductDetails>) :
                (<p className='text-center'>loading best seller</p>)}

            <div className='container mx-auto'>
                <h2 className='text-3xl text-center font-bold mb-4'>
                    top wears for women
                </h2>
                <ProductGrid products={products} loading={loading} error={error}></ProductGrid>
                <ProductGrid products={products} loading={loading} error={error}></ProductGrid>
            </div>
            <FeaturedCollection></FeaturedCollection>
            <FeaturesSection></FeaturesSection>
        </div>
    )
}

export default Home


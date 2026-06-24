


// import { useEffect, useRef, useState } from "react"
// import { FaFilter } from 'react-icons/fa'
// import FilterSidebar from "../components/Products/FilterSidebar"
// import ProductGrid from "../components/Products/ProductGrid"
// import SortOptions from "../components/Products/SortOptions"
// const CollectionPage = () => {
//     const [products, setProducts] = useState([])
//     const sidebarRef = useRef()

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen)
//     }


//     const handleClickOutside = (e) => {
//         if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//             setIsSidebarOpen(false)
//         }
//     }

//     // useEffect(() => {
//     //     document.addEventListener('mousedown', handleClickOutside)
//     //     return () => {

//     //         document.removeEventListener('mousedown', handleClickOutside)
//     //     }
//     // }, [])
//     useEffect(() => {
//         setTimeout(() => {
//             const fetchedProducts = [
//                 {
//                     _id: 1,
//                     name: 'product 1',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=1'
//                     }]
//                 },
//                 {
//                     _id: 2,
//                     name: 'product 2',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=2'
//                     }]
//                 },
//                 {
//                     _id: 3,
//                     name: 'product 3',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=3'
//                     }]
//                 },
//                 {
//                     _id: 4,
//                     name: 'product 4',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=4'
//                     }]
//                 },
//                 {
//                     _id: 5,
//                     name: 'product 5',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=5'
//                     }]
//                 },
//                 {
//                     _id: 6,
//                     name: 'product 6',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=6'
//                     }]
//                 },
//                 {
//                     _id: 7,
//                     name: 'product 7',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=7'
//                     }]
//                 },
//                 {
//                     _id: 8,
//                     name: 'product 8',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=8'
//                     }]
//                 },
//             ]
//             setProducts(fetchedProducts)
//         }, 1000)
//     }, [])
//     return (
//         <div className="flex flex-col lg:flex-row">
//             <button ref={sidebarRef} onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
//                 <FaFilter className="mr-2"></FaFilter>filters
//             </button>
//             <div

//                 className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static translate-x-0}`}>
//                 <FilterSidebar></FilterSidebar>
//             </div>
//             <div className="flex-grow p-4">
//                 <h2 className="text-2xl uppercase mb-4">all collection</h2>
//                 <SortOptions></SortOptions>
//                 <ProductGrid products={products}></ProductGrid>
//             </div>
//         </div>
//     )
// }

// export default CollectionPage



// import { useEffect, useRef, useState } from "react"
// import { FaFilter } from 'react-icons/fa'
// import FilterSidebar from "../components/Products/FilterSidebar"
// import ProductGrid from "../components/Products/ProductGrid"
// import SortOptions from "../components/Products/SortOptions"
// const CollectionPage = () => {
//     const [products, setProducts] = useState([])
//     const [open, setOpen] = useState(false);

//     const ref = useRef();

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (!ref.current.contains(event.target)) {
//                 setOpen(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//     }, [ref]);
//     useEffect(() => {
//         setTimeout(() => {
//             const fetchedProducts = [
//                 {
//                     _id: 1,
//                     name: 'product 1',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=1'
//                     }]
//                 },
//                 {
//                     _id: 2,
//                     name: 'product 2',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=2'
//                     }]
//                 },
//                 {
//                     _id: 3,
//                     name: 'product 3',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=3'
//                     }]
//                 },
//                 {
//                     _id: 4,
//                     name: 'product 4',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=4'
//                     }]
//                 },
//                 {
//                     _id: 5,
//                     name: 'product 5',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=5'
//                     }]
//                 },
//                 {
//                     _id: 6,
//                     name: 'product 6',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=6'
//                     }]
//                 },
//                 {
//                     _id: 7,
//                     name: 'product 7',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=7'
//                     }]
//                 },
//                 {
//                     _id: 8,
//                     name: 'product 8',
//                     price: 100,
//                     images: [{
//                         url: 'https://picsum.photos/500/500?random=8'
//                     }]
//                 },
//             ]
//             setProducts(fetchedProducts)
//         }, 1000)
//     }, [])
//     return (
//         <div className="flex flex-col lg:flex-row">
//             <button ref={ref} onClick={() => setOpen(!open)} className="lg:hidden border p-2 flex justify-center items-center">
//                 <FaFilter className="mr-2"></FaFilter>filters
//             </button>
//             <div

//                 className={`${open ? ' translate-x-0' : ' -translate-x-full'} inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static translate-x-0}`}>
//                 <FilterSidebar></FilterSidebar>
//             </div>
//             <div className="flex-grow p-4">
//                 <h2 className="text-2xl uppercase mb-4">all collection</h2>
//                 <SortOptions></SortOptions>
//                 <ProductGrid products={products}></ProductGrid>
//             </div>
//         </div>
//     )
// }

// export default CollectionPage

import { useEffect, useRef, useState } from "react"
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from "../components/Products/FilterSidebar"
import ProductGrid from "../components/Products/ProductGrid"
import SortOptions from "../components/Products/SortOptions"
import Ui from '../components/ui'
import { useParams, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsByFilters } from "../redux/slices/productSlice"
const CollectionPage = () => {
    const { collection } = useParams()
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector((state) => state.products)
    const queryParams = Object.fromEntries([...searchParams])
    // const [products, setProducts] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        dispatch(fetchProductsByFilters({ collection, ...queryParams }))
    }, [dispatch, collection, searchParams])











    return (
        <div className="flex flex-col lg:flex-row sticky overlay-container">
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden border p-2 flex justify-center items-center">
                <FaFilter className="mr-2"></FaFilter>
            </button>
            <Ui isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div isOpen={isOpen} onClose={() => setIsOpen(false)}
                    className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static translate-x-0}`}>
                    <button type='button' onClick={() => setIsOpen(false)}>filters</button>

                    <FilterSidebar></FilterSidebar>
                </div>
            </Ui>
            <div className="flex-grow p-4">
                <h2 className="text-2xl uppercase mb-4">all collection</h2>
                <SortOptions></SortOptions>
                <ProductGrid products={products} loading={loading} error={error}></ProductGrid>
            </div>

        </div>


    )
}

export default CollectionPage







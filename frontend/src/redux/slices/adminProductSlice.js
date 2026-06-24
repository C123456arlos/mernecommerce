import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const API_URL = `${import.meta.env.VITE_BACKEND_URL}`
const USER_TOKEN = `Bearer ${localStorage.getItem('userToken')}`


export const fetchAdminProducts = createAsyncThunk('adminProducts/fetchProducts', async () => {
    // const response = await axios.get(`${API_URL}/api/admin/products`, {
    const response = await axios.get(`http://localhost:9000/api/admin/products`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`
            // Authorization: USER_TOKEN
        }
    })
    console.log(response.data, 'trgrererregrgergeegrrge')
    return response.data
})



export const createProduct = createAsyncThunk('adminProducts/createProduct', async (productData) => {
    const response = await axios.post(`${API_URL}/api/admin/products`, productData,
        {
            headers: {
                Authorization: USER_TOKEN
            }
        }
    )
    return response.data
})

export const updateProduct = createAsyncThunk('adminProducts/updateProduct', async ({ id, productData }) => {
    const response = await axios.put(`${API_URL}/api/admin/products/${id}`, productData,
        {
            headers: {
                Authorization: USER_TOKEN
            }
        }
    )
    return response.data
})


export const deleteProduct = createAsyncThunk('adminProducts/deleteProduct', async (id) => {
    await axios.delete(`${API_URL}/api/products/${id}`, {
        headers: {
            Authorization: USER_TOKEN
        }
    })
    return id
})

const adminProductSlice = createSlice({
    name: 'adminProducts',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdminProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchAdminProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(fetchAdminProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products.push(action.payload)
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.products.findIndex(
                    (product) => product._id === action.payload
                )
                if (index !== -1) {
                    state.products[index] = action.payload
                }
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(
                    (product) => product._id !== action.payload
                )
            })
    }
})
export default adminProductSlice.reducer



/**
* Paste one or more documents here
*/
// {
//   "name": "jacket",
//   "description": "denim2 pants for any season",
//   "price": 59.99,
//   "discountPrice": 49.99,
//   "countInStock": 200,
//   "sku": "clth1485",
//   "category": "apparel",
//   "brand": "urban wear",
//   "sizes": [
//     "XS",
//     "S",
//     "M",
//     "L",
//     "XL"
//   ],
//   "colors": [
//     "Blue",
//     "Black"
//   ],
//   "collections": "spring collection",
//   "material": "denim",
//   "gender": "Men",
//   "images": [
//     {
//       "url": "https://picsum.photos/seed/denim1/500/500",
//       "_id": {
//         "$oid": "6a3a820dae9ed50719907c2e"
//       }
//     },
//     {
//       "url": "https://picsum.photos/seed/denim2/500/500",
//       "_id": {
//         "$oid": "6a3a820dae9ed50719907c2f"
//       }
//     }
//   ],
//   "isFeatured": true,
//   "isPublished": true,
//   "rating": 0,
//   "numReviews": 0,
//   "tags": [
//     "denim",
//     "jacket",
//     "casual",
//     "spring"
//   ],
//   "user": {
//     "$oid": "6a3855d71d97c214ccf9d9c7"
//   },
//   "dimensions": {
//     "length": 12,
//     "width": 8,
//     "height": 1
//   },
//   "weight": 1.5,
//   "createdAt": {
//     "$date": "2026-06-23T12:54:37.806Z"
//   },
//   "updatedAt": {
//     "$date": "2026-06-23T12:54:37.806Z"
//   },
//   "__v": 0
// }

// 41c73991-915e1804
// f85a077c-42db0b40
// a8a7d3a8-76e98e21
// def91288-de16b211
// b5d0130d-38f13d4c
// bf3968fc-816bbb2a
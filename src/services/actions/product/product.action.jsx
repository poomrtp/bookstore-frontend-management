import axios from 'axios'
import { productType } from './product.type'
const apiUrl = 'https://poomrtp-bookstore-api.herokuapp.com'

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: productType.GET_PRODUCT_REQUEST
      })
      const res = await axios.get(`${apiUrl}/api/products`)
      if (res.status === 200) {
        const data = res.data
        dispatch({
          type: productType.GET_PRODUCT_SUCCESS,
          payload: data
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: productType.GET_PRODUCT_FAILURE
      })
    }
  }
}

export const getProductByName = (param) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: productType.GET_PRODUCT_REQUEST
      })
      const res = await axios.get(`${apiUrl}/api/products/${param}`)
      if (res.status === 200) {
        const data = res.data
        dispatch({
          type: productType.GET_PRODUCT_SUCCESS,
          payload: data
        })
        return data
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: productType.GET_PRODUCT_FAILURE
      })
    }
  }
}

// export const getProducts = async() => {
//   const res = await axios.get(`${apiUrl}/api/products`)
//   return res.data
// }

// export const getProductByName = async(param) => {
//   const res = await axios.get(`${apiUrl}/api/products/${param}`)
//   return res.data
// }
export const updateProduct = async(payload) => {
  await axios.patch(`${apiUrl}/api/products/update-book/${payload.name}`, payload )
}

// export const fetch_products = () => {
//   return {
//     type: "FETCH_PRODUCTS"
//   }
// }

// export const receive_products = (products) => {
//   return {
//     type: "RECEIVE_PRODUCTS",
//     data: products
//   }
// }
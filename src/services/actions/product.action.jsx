import axios from 'axios'

const apiUrl = 'https://poomrtp-bookstore-api.herokuapp.com'

export const getProducts = async() => {
  const res = await axios.get(`${apiUrl}/api/products`)
  return res.data
}

export const getProductByName = async(param) => {
  const res = await axios.get(`${apiUrl}/api/products/${param}`)
  return res.data
}
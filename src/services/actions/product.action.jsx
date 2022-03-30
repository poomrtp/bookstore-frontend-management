import axios from 'axios'

const apiUrl = 'https://poomrtp-bookstore-api.herokuapp.com'

export const getProduct = async() => {
  const res = await axios.get(apiUrl + '/api/products')
  return res.data
}
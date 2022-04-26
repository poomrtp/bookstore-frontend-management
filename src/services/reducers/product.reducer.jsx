import { productType }  from '../actions/product/product.type'
const initailState = {
  productData: {},
  isFetching: false
}

const productReducer = (state = initailState, action) => {
  console.log(action)
  switch (action.type) {
    case productType.GET_PRODUCT_REQUEST:
      state = {
        ...state,
        isFetching: true
      }
      break;
    case productType.GET_PRODUCT_SUCCESS:
      state = {
        ...state,
        isFetching: false,
        productData: action.payload
      }
      break;
    case productType.GET_PRODUCT_FAILURE:
    state = {
      ...state,
      isFetching: false
    }
      break;
    default:
      break;
  }
  return state
}

export default productReducer
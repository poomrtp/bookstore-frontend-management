import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductByName, updateProduct } from '../../services/actions/product/product.action';
import NavLayout from '../../layouts/Navbar'
import ProductForm from './components/form/ProductForm';
import { useDispatch, useSelector } from 'react-redux'

const ProductDetail = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  // const [product, setProduct] = useState()
  // useEffect(() => {
  //   async function fetchData() {
  //     return await getProductByName(name).then(res => setProduct(res))
  //   }
  //   if (name) {
  //     fetchData()
  //   }
  // }, [name])
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products)
  const [productData, setProductData] = useState('')
  useEffect(() => {
    if (name) {
      dispatch(getProductByName(name))
    }
  }, [name, dispatch])
  useEffect(() => {
    setProductData(product.productData)
  }, [product])
  console.log('productData', productData)
  if (product.isFetching) {
    return <div>LOADING . . .</div>
  }
  // setProductData(product.productData)
  const isCreate = name ? false : true
  
  const submitUpdate = async (payload) => {
    console.log('payload', payload)
    await updateProduct(payload)
    navigate("/products")
  }

  return (
    <div className="">
      {/* {productData?.name ? 
        <NavLayout>
          <ProductForm data={productData ? productData : {author: [''], illustrator: ['']}} setProduct={setProductData} submitUpdate={submitUpdate} isCreate={isCreate}></ProductForm>
        </NavLayout> : null
      } */}
      <NavLayout>
        <ProductForm data={productData ? productData : {author: [''], illustrator: ['']}} setProduct={setProductData} submitUpdate={submitUpdate} isCreate={isCreate}></ProductForm>
      </NavLayout>
    </div>
  )
}

export default ProductDetail
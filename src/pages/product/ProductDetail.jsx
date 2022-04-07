import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductByName, updateProduct } from '../../services/actions/product.action';
import NavLayout from '../../layouts/Navbar'
import ProductForm from './components/form/ProductForm';

const ProductDetail = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState()
  useEffect(() => {
    async function fetchData() {
      return await getProductByName(name).then(res => setProduct(res))
    }
    if (name) {
      fetchData()
    }
  }, [name])
  const isCreate = name ? false : true
  
  const submitUpdate = async (payload) => {
    console.log('payload', payload)
    await updateProduct(payload)
    navigate("/products")
  }

  return (
    <div className="">
      <NavLayout>
        <ProductForm data={product ? product : {author: [''], illustrator: ['']}} setProduct={setProduct} submitUpdate={submitUpdate} isCreate={isCreate}></ProductForm>
      </NavLayout>
    </div>
  )
}

export default ProductDetail
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByName } from '../../services/actions/product.action';
import NavLayout from '../../layouts/Navbar'
import ProductForm from '../../components/form/ProductForm';

const ProductDetail = () => {
  const { name } = useParams();
  const [product, setProduct] = useState({})
  useEffect(() => {
    async function fetchData() {
      return await getProductByName(name).then(res => setProduct(res))
    }
    fetchData()
  },[name])
  return (
    <div className="">
      <NavLayout>
        <ProductForm data={product} setProduct={setProduct}></ProductForm>
      </NavLayout>
    </div>
  )
}

export default ProductDetail
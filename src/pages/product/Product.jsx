import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import NavLayout from '../../layouts/Navbar'
import DataTable from '../../components/dataTable/DataTable'
import { getProduct } from '../../services/actions/product.action';

const headTable = [
  { field: 'name', headerName: 'Name', width: 300 },
  {
    field: 'author', headerName: 'Author',
    valueGetter: (params) => {
      return params.value.join(', ')
    }
  },
  { field: 'publisher', headerName: 'Publisher' },
  { field: 'price', headerName: 'Book Price' },
  { field: 'digitalPrice', headerName: 'E-book Price' },
  { field: 'quantity', headerName: 'Quantity' },
  { field: '', headerName: 'Action' }
] 

const Product = () => {
  const [productData, setProductData] = useState('')
  useEffect(() => {
    getProduct().then(res => setProductData(res))
    // setProductData(data)
  },[])
  return (
    <div className="">
      <NavLayout>
        <Box display="flex" justifyContent="start">
          <div positions="">Product</div>
        </Box>
        <div>
          <DataTable data={ productData } headTable={ headTable }></DataTable>
        </div>
      </NavLayout>
    </div>
  )
}

export default Product
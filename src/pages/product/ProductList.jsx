import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import NavLayout from '../../layouts/Navbar'
import DataTable from '../../components/dataTable/DataTable'
import { getProduct } from '../../services/actions/product.action';

const headTable = [
  {
    field: 'images',
    headerName: 'Image',
    width: 150
  },
  { field: 'name', headerName: 'Name', width: 300 },
  {
    field: 'author', headerName: 'Author',
    valueGetter: (params) => {
      return params.value.join(', ')
    }
  },
  { field: 'publisher', headerName: 'Publisher' },
  {
    field: 'price', headerName: 'Book Price',
    valueGetter: (params) => {
      return params.value || '-'
    }
  },
  {
    field: 'digitalPrice', headerName: 'E-book Price',
    valueGetter: (params) => {
      return params.value || '-'
    }
  },
  { field: 'quantity', headerName: 'Quantity',
    valueGetter: (params) => {
      return params.value || '-'
    }
  },
  {
    field: '',
    headerName: 'Action'
  }
] 

const Product = () => {
  const [productData, setProductData] = useState('')
  useEffect(() => {
    getProduct().then(res => setProductData(res))
  },[])
  return (
    <div className="">
      <NavLayout>
        <Box display="flex" justifyContent="start">
          <div positions="">Product</div>
        </Box>
        <div>
          <DataTable
            data={[...productData]}
            headTable={headTable}>
          </DataTable>
        </div>
      </NavLayout>
    </div>
  )
}

export default Product
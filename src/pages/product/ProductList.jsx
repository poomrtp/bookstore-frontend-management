import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button'
import NavLayout from '../../layouts/Navbar'
import DataTable from '../../components/dataTable/DataTable'
import { getProducts } from '../../services/actions/product.action';

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
  const [products, setProducts] = useState('')
  useEffect(() => {
    getProducts().then(res => setProducts(res))
  },[])
  return (
    <div className="">
      <NavLayout>
        <Box display="flex" justifyContent="space-between" alignItems="center" paddingY={2}>
          <div positions="">Product</div>
          <div>
            <Button variant={"contained"}>Add product</Button>
          </div>
        </Box>
        <div>
          <DataTable
            data={[...products]}
            headTable={headTable}>
          </DataTable>
        </div>
      </NavLayout>
    </div>
  )
}

export default Product
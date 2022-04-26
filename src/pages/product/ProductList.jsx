import { useEffect } from 'react'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import NavLayout from '../../layouts/Navbar'
import DataTable from '../../components/dataTable/DataTable'
import DefaultLoading from '../../components/loading/defaultLoading'
import { getProducts } from '../../services/actions/product/product.action'
import { useDispatch, useSelector } from 'react-redux'

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
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  console.log('products.productData', products.productData)
  if (products.isFetching) {
    return <DefaultLoading />
  }
  return (
    <div className="">
      <NavLayout>
        <Box display="flex" justifyContent="space-between" alignItems="center" paddingY={2}>
          <div positions="">Product</div>
          <div>
            <Link to="create" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Button variant={"contained"}>Add product</Button>
            </Link>
          </div>
        </Box>
        <div>
          {products?.productData.length > 0 ?
            <DataTable
              data={[...products.productData]}
              headTable={headTable}>
            </DataTable> :
            null}
          {/* <DataTable
            data={[...products.productData] || []}
            headTable={headTable}>
          </DataTable> */}
        </div>
      </NavLayout>
    </div>
  )
}

export default Product
import { Box } from '@mui/system';
import NavLayout from '../../components/layouts/Navbar'
import DataTable from '../../components/dataTable/DataTable'
const Product = () => {
  return (
    <div className="">
      <NavLayout>
        <Box display="flex" justifyContent="start">
          <div positions="">Product</div>
        </Box>
        <div>
          <DataTable></DataTable>
        </div>
      </NavLayout>
    </div>
  )
}

export default Product
import { useState } from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import IconButton from '@mui/material/IconButton'
import { red } from '@mui/material/colors'

function ProductForm({ data, setProduct, submitUpdate, isCreate }) {

  const [checkStatus, setChecked] = useState({
    price: data?.price ?  true : false || true,
    digitalPrice: data?.digitalPrice ?  true : false || true
  })
  const handleChange = (event) => {
    setChecked({
      ...checkStatus,
      [event.target.name]: event.target.checked,
    })
    setProduct({ ...data, [event.target.name]: event.target.checked ? data[event.target.checked]: 0})
  }
  const { price, digitalPrice } = checkStatus

  const submitData = () => {
    console.log('submitData', data)
    const types = []
    if (checkStatus.price) {
      types.push({
        name: 'book',
        nameTH: 'หนังสือเล่ม',
        price: data.price
      })
    }
    if (checkStatus.digitalPrice) {
      types.push({
        name: 'e-book',
        nameTH: 'อีบุ๊ค',
        price: data.digitalPrice
      })
    }
    setProduct({ ...data, types: types })
    if (isCreate) {
      console.log(data)
    } else {
      submitUpdate({ ...data, types: types })
    }
  }

  const addList = (key) => {
    data[key].push('')
    setProduct({ ...data, [key]: data[key] })
  }

  const removeList = (key, index) => {
    data[key].splice(index, 1)
    setProduct({ ...data, [key]: data[key] })
  }

  const changeArrayValue = (value, key, index) => {
    const ObjKey = data[key]
    ObjKey[index] = value
    return ObjKey
  }

  return (
    <Paper sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {/* row 1 */}
        <Grid item xs={6} md={6} display="flex" justifyContent="start">
          <TextField
            required
            id="outlined-required"
            label="รหัสสินค้า"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={data?.id || ''}
            sx={{ width: '100%' }}
            onChange={(e) => setProduct({ ...data, id: e.target.value }) }
          />
        </Grid>
        <Grid item xs={6} md={6} display="flex" justifyContent="start">
          <TextField
            required
            id="outlined-required"
            label="สำนักพิมพ์"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={data?.publisher || ''}
            sx={{ width: '100%' }}
            onChange={(e) => setProduct({ ...data, publisher: e.target.value }) }
          />
        </Grid>
        {/* row 2 */}
        <Grid item xs={6} md={6}>
          <TextField
            required
            id="outlined-required"
            label="ชื่อสินค้า(ไทย)"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={data?.name || ''}
            sx={{ width: '100%' }}
            onChange={(e) => setProduct({ ...data, name: e.target.value }) }
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            id="outlined-required"
            label="ชื่อสินค้า(English)"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={data?.nameEN || ''}
            sx={{ width: '100%' }}
            onChange={(e) => setProduct({ ...data, nameEN: e.target.value }) }
          />
        </Grid>
        {/* row 3 */}
        <Grid item xs={6} md={3}>
          {data?.author?.map((row, index) => (
            <Box key={index} display="inline-flex" justifyContent="space-between" style={{alignItems: 'center', alignContent: 'center', padding: 0 }}>
              <TextField
                // key={index}
                required
                id="outlined-required"
                label="ผู้แต่ง"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={row || ''}
                sx={{ width: index === 0 ? '100%' : '100%', mb: 1 }}
                onChange={(e) => setProduct({ ...data, author: changeArrayValue(e.target.value, 'author', index) }) }
              />
              {index === 0 ? null :
                <Box sx={{ marginLeft: 1 }}>
                  <IconButton onClick={() => removeList('author', index)}>
                    <DeleteOutlineIcon sx={{ color: red[500] }} />
                  </IconButton>
                </Box>
              }
            </Box>
          ))}
          <Box display="flex" justifyContent="start" sx={{ mt: 2 }}>
            <Button variant={"contained"} onClick={() => addList('author')}>
              Add
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          {data?.illustrator?.map((row, index) => (
            <Box key={index} display="inline-flex" justifyContent="space-between" style={{ alignItems: 'center', alignContent: 'center', padding: 0 }}>
              <TextField
                key={index}
                required
                id="outlined-required"
                label="ภาพประกอบ"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={row || ''}
                sx={{ width: '100%', mb: 1 }}
                onChange={(e) => setProduct({ ...data, illustrator: changeArrayValue(e.target.value, 'illustrator', index) }) }
              />
              {index === 0 ? null :
                <Box sx={{ marginLeft: 1 }}>
                  <IconButton onClick={() => removeList('illustrator', index)}>
                    <DeleteOutlineIcon sx={{ color: red[500] }} />
                  </IconButton>
                </Box>}
            </Box>
          ))}
          <Box display="flex" justifyContent="start" sx={{ mt: 2 }}>
            <Button variant={"contained"} onClick={() => addList('illustrator')}>
              Add
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            id="outlined-required"
            label="รายละเอียด"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            multiline
            value={data?.description || ''}
            minRows={3}
            sx={{ width: '100%' }}
            onChange={(e) => setProduct({ ...data, description: e.target.value }) } />
        </Grid>
        {/* row 4 */}
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="start">
            {data?.images?.map((image) => (
              <Image key={image} src={image} alt="" />
            ))}
            <AddPhotoAlternateOutlinedIcon color="primary" sx={{ fontSize: 86 }}/>
          </Box>
        </Grid>
        <Grid item xs={6} md={6} sx={{ display: 'inline-flex', justifyContent: 'space-between' }}>
          <div>
            <Checkbox
              checked={price}
              name="price"
              onChange={handleChange}
              inputProps={{ 'aria-label': 'book' }}
            />
            <TextField
              id="outlined-required"
              label="หนังสือเล่ม"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              disabled={!price}
              variant="outlined"
              value={data?.price || ''}
              onChange={(e) => setProduct({ ...data, price: +e.target.value }) }/>
            </div>
          <div>
            <Checkbox
              checked={digitalPrice}
              name="digitalPrice"
              onChange={handleChange}
              inputProps={{ 'aria-label': 'e-book' }}
            />
            <TextField
              id="outlined-required"
              type="number"
              label="E-Book"
              InputLabelProps={{
                shrink: true,
              }}
              disabled={!digitalPrice}
              variant="outlined"
              value={data?.digitalPrice || ''}
              onChange={(e) => setProduct({ ...data, digitalPrice: +e.target.value }) }
            />
          </div>
        </Grid>
        {/* row 5 */}
        <Grid item xs={6} md={4}>
          <TextField
            id="outlined-required"
            label="จำนวน"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            multiline
            value={data?.quantity || ''}
            required={true}
            sx={{ width: '100%' }}
            onChange={(e) => setProduct({ ...data, quantity: +e.target.value }) }
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <TextField
            id="outlined-required"
            label="น้ำหนัก"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            multiline
            value={data?.weight || ''}
            sx={{ width: '100%' }}
            onChange={(e) => setProduct({ ...data, weight: e.target.value }) }
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <div>
            <FormControl
              sx={{ width: '100%' }} >
              <InputLabel id="status-select-label">Status</InputLabel>
              <Select
                id="status-select-label"
                value={data?.status || ''}
                label="Status"
                onChange={(e) => setProduct({ ...data, status: e.target.value }) }>
                <MenuItem value={'active'}>Available</MenuItem>
                <MenuItem value={'inactive'}>Unavailable</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="end" sx={{ marginY: 4 }}>
        <Button variant={"outlined"} sx={{ marginLeft: 2 }}>
          Cancel
        </Button>
        <Button variant={"contained"} sx={{ marginLeft: 2 }} onClick={submitData}>
          Submit
        </Button>
      </Box>
    </Paper>
  )
}

const Image = styled.img`
height: 100px;
object-fit: scale-down;
margin-right: 4px;
`
export default ProductForm
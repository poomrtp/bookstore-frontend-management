import { React } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

function DataTable({ data, headTable }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ backgroundColor: '#f5f5f5' }}>
          <TableRow>
            {headTable.map((header) => (
              <TableCell key={header.headerName}>{ header.headerName }</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            <TableRow
              key={row.name}>
              <TableCell component="th" scope="row">
                <Image src={row.images[0]} alt="" />
              </TableCell>
              <TableCell align="left">{row.name || '-'}</TableCell>
              <TableCell align="left">{row.author || '-'}</TableCell>
              <TableCell align="left">{row.publisher || '-'}</TableCell>
              <TableCell align="left">{row.price || '-'}</TableCell>
              <TableCell align="left">{row.digitalPrice || '-'}</TableCell>
              <TableCell align="left">{row.quantity || '-'}</TableCell>
              <TableCell align="left">
              <Link to={row.name} style={{ color: 'inherit', textDecoration: 'none' }}>
                <Button variant="outlined">Edit</Button>
              </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



const Image = styled.img`
height: 100px;
object-fit: scale-down;
`

export default DataTable;
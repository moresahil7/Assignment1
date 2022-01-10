import * as React from 'react';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Tables = ({ items, searchElement, Sorting }) => {
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{cursor:"pointer"}} >
          <TableRow>
            <TableCell onClick={() => Sorting("id")}><h3>Sr No</h3></TableCell>
            <TableCell align="center"  onClick={() => Sorting("first_name")}><h3>First Name</h3></TableCell>
            <TableCell align="center" onClick={() => Sorting("last_name")}><h3>Last Name</h3></TableCell>
            <TableCell align="center" onClick={() => Sorting("age")}><h3>Age</h3></TableCell>
            <TableCell align="center" onClick={() => Sorting("email")}><h3>Email</h3></TableCell>
            <TableCell align="center" onClick={() => Sorting("web")}><h3>Web</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {items
            .filter((val) => {
              if (searchElement == "") {
                return val;
              } else if (
                val.first_name
                  .toLowerCase()
                  .includes(searchElement.toLowerCase())
              ) {
                return val;
              } else if (
                val.last_name
                  .toLowerCase()
                  .includes(searchElement.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) =>{
                return(
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {val.id}
              </TableCell>
              <TableCell align="center">
              <Link to={`/users/${val.id}`} className="page-link">
                      {val.first_name}
                    </Link>
              </TableCell>
              <TableCell align="center">{val.last_name}</TableCell>
              <TableCell align="center">{val.age}</TableCell>
              <TableCell align="center">{val.email}</TableCell>
              <TableCell align="center">
              <a href={val.web} target="_blank">
              {val.web}
            </a>
            </TableCell>
            </TableRow>
            );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tables;
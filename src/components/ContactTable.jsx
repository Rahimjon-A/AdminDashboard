import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { myUsers } from '../../data';

const ContactTable = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch('../../Data.json')
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple label'>
        <TableHead>
          <TableRow>
            <TableCell>ID:</TableCell>
            <TableCell>Name:</TableCell>
            <TableCell>Date:</TableCell>
            <TableCell>Status:</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {myUsers &&
            myUsers.map((item) => (
              <TableRow key={item.id} className='hover:bg-slate-300'>
                <TableCell> {item.id} </TableCell>
                <TableCell>
                  <div className='text-red-500'>{item.userName} </div>{' '}
                </TableCell>
                <TableCell> {item.date} </TableCell>
                <TableCell> {item.priority} </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;

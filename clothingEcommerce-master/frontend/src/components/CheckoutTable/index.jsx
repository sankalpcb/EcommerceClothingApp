import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { removeFromCart } from '../../redux/actions/removeFromCart.action';
import { decreaseQuantity } from '../../redux/actions/decreaseQuantity.action';
import { increaseQuantity } from '../../redux/actions/increaseQuantity.action';
import TakeMoney from '../Stripe';

function createData(id, imageUrl, name, price, quantity) {
    return { id, name, imageUrl, price, quantity };
}

export default function CheckoutTable() {
    const cart = useSelector((state) => state.main.cart);
    const rows = cart.map((item) => createData(item.id, item.imageUrl, item.name, item.price, item.quantity));

    // Calculate the total amount
    const totalAmount = rows.reduce((total, row) => total + row.price * row.quantity, 0);
    const dispatch = useDispatch()
    const handleQuantityDecrease = (id, quantity) => {
        const getItem = cart.find((item) => item.id === id);
        if (quantity === 1) {
            dispatch(removeFromCart(getItem))
        } else {
            dispatch(decreaseQuantity(getItem))
        }
    }
    const currentUser = useSelector((state) => state.thunky.currentUser)
    const handleQuantityIncrease = (id) => {
        const getItem = cart.find((item) => item.id === id);
        dispatch(increaseQuantity(getItem))
    }
    return (
        <>
            {currentUser && <h2 style={{ textAlign: 'center', color: 'black', margin: '20px 0', fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>Hey!!! {currentUser}</h2>}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#FF4081', color: 'white' }}>
                            <TableCell align='center' style={{ fontWeight: 'bold', fontSize: '16px' }}>Item Id</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px' }}>Image</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px' }}>Item Name</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px' }}>Item Price</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px' }}>Item Quantity</TableCell>
                            <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '16px' }}>Subtotal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">{row.id}</TableCell>
                                <TableCell align="center"><img
                                    src={row.imageUrl}
                                    alt="Item"
                                    style={{ height: 65, width: 65, borderRadius: '50%' }}
                                /></TableCell>
                                <TableCell align="center" style={{ fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#555' }}>{row.name}</TableCell>
                                <TableCell align="center" style={{ fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#555' }}>{row.price}</TableCell>
                                <TableCell align="center" style={{ fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#555' }}>
                                    <IconButton onClick={() => handleQuantityDecrease(row.id, row.quantity)} size="small">
                                        <RemoveIcon />
                                    </IconButton>
                                    {row.quantity}
                                    <IconButton onClick={() => handleQuantityIncrease(row.id)} size="small">
                                        <AddIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center" style={{ fontSize: '14px', fontFamily: 'Arial, sans-serif', color: '#555' }}>{row.quantity * row.price}</TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell colSpan={5} style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '16px' }}>Total</TableCell>
                            <TableCell align="center" style={{ color: '#555', fontSize: '14px' }}>{totalAmount}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '20px', marginLeft: '20px', padding: '10px 20px', borderRadius: '5px' }}
            >
                Pay Now
            </Button> */}
            <div style={{ marginTop: '20px' }}> {/* Adjust the margin as needed */}
                <TakeMoney/>
            </div>
        </>
    );
}

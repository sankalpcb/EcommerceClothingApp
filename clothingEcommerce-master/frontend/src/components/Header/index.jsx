import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Crwns from '../../crwns.svg'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import CartCard from '../CartCard';
import { useDispatch, useSelector } from 'react-redux';
import { logOutRequest } from '../../redux/thunkActions/actions';
import BagIcon from '../BagIcon';
function Header() {
    let navigate = useNavigate()
    const dispatch=useDispatch()
    const cart = useSelector((state) => state.main.cart)

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElLogout, setAnchorElLogout] = React.useState(null);


    const currentUser = useSelector((state) => state.thunky.currentUser)
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenLogoutMenu = (event) => {
        setAnchorElLogout(event.currentTarget);
    };

    const handleCloseLogoutMenu = () => {
        setAnchorElLogout(null);
    };

    const handleLogout = () => {
        dispatch(logOutRequest())
        handleCloseLogoutMenu();
        navigate(`/`)
    };

    return (<>
        <Box>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar>

                    <img src={Crwns} style={{ width: '30px', height: '30px' }}alt="crown" onClick={() => navigate(`/`)} />


                    <Box sx={{ flexGrow: 1 }} />


                    <Button color="inherit" sx={{ color: 'black' }} onClick={() => navigate(`/shop`)}>Shop</Button>
                    <Button color="inherit" sx={{ color: 'black' }} onClick={() => navigate(`/contact`)}>Contact</Button>
                    {currentUser ? (
                        <>
                            <Tooltip title="User Settings">
                                <Button
                                    color="inherit"
                                    onClick={handleOpenLogoutMenu}
                                    sx={{ color: 'black', textTransform: 'none' }}
                                >
                                    {currentUser}
                                </Button>
                            </Tooltip>

                            <Menu
                                anchorEl={anchorElLogout}
                                open={Boolean(anchorElLogout)}
                                onClose={handleCloseLogoutMenu}
                            >
                                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Button color="inherit" sx={{ color: 'black' }} onClick={() => navigate(`/signup`)}>
                            Sign In
                        </Button>
                    )}
                    <Box sx={{ marginLeft: 5 }} />


                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <BagIcon number={2}/>
                               
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{
                                mt: '45px',
                                width: 300,
                                marginRight: -20,
                            }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            PaperProps={{
                                elevation: 4,
                                sx: {
                                    width: '100%',
                                    borderRadius: '8px',
                                    border: '1.5px solid #ccc', // Set your desired border color and style
                                },
                            }}
                        >


                            {cart.length > 0 &&
                                cart.map((item) => (
                                    <MenuItem sx={{ paddingLeft: 4 }} key={item.count} onClick={handleCloseUserMenu}>
                                        <CartCard item={item} />
                                    </MenuItem>
                                ))
                            }
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    backgroundColor: '#ff4081',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                    padding: '10px 20px',
                                    marginLeft: 45,

                                }}
                                onClick={() => navigate(`/checkout`)}
                            >
                                GO TO CHECKOUT
                            </Button>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    </>);
}

export default Header;
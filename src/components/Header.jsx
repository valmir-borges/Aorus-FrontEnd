import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Logo from '../img/logo aorus.png';
import user from '../img/user.png';
import { AuthContext } from '../context/authProvider';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';

const pages = ['Home', 'Lançamentos', 'Cadastre um Produto'];
const settings = ['Perfil', 'Dashboard', 'Carrinho', 'Logout'];

function Header() {
    const { Logout } = useContext(AuthContext);
    const [userPhoto, setUserPhoto] = useState('');
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch(process.env.REACT_APP_BACKEND + "users/checkuser", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then((resposta) => resposta.json())
        .then((json) => {
            setUserPhoto(json.image);
        })
        .catch(() => { 
            // Consider adding error handling here
        });
    }, []);

    const handleLogout = () => {
        Logout();
        navigate('/login'); // Navega para a página de login após o logout
    };

    return (
        <AppBar position="static" style={{ backgroundColor: '#1c1c1c', borderBottom: '1px solid #FF6400'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, width: "20%" }}>
                        <img 
                            src={Logo} 
                            style={{ width: '100%' }} 
                            alt="Logo"
                            onClick={() => navigate('/')} // Redireciona para a home ao clicar na logo
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem 
                                    key={page} 
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        if (page === 'Home') {
                                            navigate('/');
                                        } 
                                        else if (page === 'Lançamentos') {
                                            navigate('/catalogo');
                                        } 
                                        else if (page === 'Cadastre um Produto') {
                                            navigate('/cadastroProduct');
                                        }
                                    }}
                                >
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', width: '100%' }}>
                        <img 
                            src={Logo} 
                            style={{ width: '50%' }} 
                            alt="Logo" 
                            onClick={() => navigate('/')} // Redireciona para a home ao clicar na logo
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => {
                                    handleCloseNavMenu();
                                    if (page === 'Home') {
                                        navigate('/');
                                    } 
                                    else if (page === 'Lançamentos') {
                                        navigate('/catalogo');
                                    } 
                                    else if (page === 'Cadastre um Produto') {
                                        navigate('/cadastroProduct');
                                    }
                                }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={userPhoto} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem 
                                    key={setting} 
                                    onClick={() => {
                                        handleCloseUserMenu();
                                        if (setting === 'Logout') {
                                            handleLogout();
                                        } 
                                        else if (setting === 'Dashboard') {
                                            navigate('/DashBoardCatalogo');
                                        }
                                    }}
                                >
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;

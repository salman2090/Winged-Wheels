import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg" className="p-2 header-font">
                <Container>
                    <Navbar.Brand className="fs-3" href="#home">Winged Wheels</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-dark fs-5" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#products" className="text-dark fs-5">Products</Nav.Link>
                        <Nav.Link as={Link} to="/explore" className="text-dark fs-5">Explore</Nav.Link>
                        {
                            user.email ?
                            <Nav.Link as={Link} to="/dashboard" className="text-dark fs-5">Dashboard</Nav.Link>
                            :
                            null
                        }
                        <Navbar.Text>
                         <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        {
                            user.email ? 
                            <Button onClick={logOut} variant="light" className="text-dark fs-5">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login" className="text-dark fs-5">Login</Nav.Link>
                        }
                    
                        {/* {user?.email && isLogin ?
                            <Button onClick={logOut} variant="light">Logout</Button>:
                            <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>}
                    <Navbar.Text>
                         <a href="#login">{user?.displayName}</a>
                    </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;<h2>Header</h2>
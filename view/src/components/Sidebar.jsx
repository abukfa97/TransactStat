import MenuOption from "./MenuOption.jsx";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import React from 'react';
import Cookies from 'js-cookie';


const Sidebar = ({ option, menuRoute, urlRoute }) => {

    const menuOptions = [
        "Profile", "Settings"
    ]

    const users = Cookies.get('user');

    return (
        <div>
            <Navbar bg="light" expand="lg" className="sidebar">
                <Container >
                    <Navbar.Brand><Link to="/">TransactStat</Link><Link to={urlRoute}><span className='transparent'>{menuRoute}</span></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <NavDropdown title="Menu" id="basic-nav-dropdown" className=''>
                                // iterate over wallets
                                <ul className='list-group'>
                                    {users.map((user) =>
                                        <NavDropdown.Item href="#action/3.1" data-id={user.id}>{user.name}</NavDropdown.Item>
                                    )}
                                </ul>
                                // iterate over options
                                <ul className='list-group'>
                                    {menuOptions.map((menuOption) =>
                                        <NavDropdown.Item href="#action/3.1">{menuOption}</NavDropdown.Item>
                                    )}
                                </ul>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
        </div>
    )
}

export default Sidebar
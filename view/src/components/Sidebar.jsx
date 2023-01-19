import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import React from 'react';
import Cookies from 'js-cookie';


const Sidebar = ({ menuRoute, urlRoute, wallets, setCurrentWallets }) => {

    const menuOptions = [
        "Profile", "Settings"
    ]
    console.log(wallets)

    const handleClick = (wallet) => {
        setCurrentWallets(wallet);
    }

    // fetch wallets based on userId


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
                                {/*iterate over wallets*/}
                                <ul className='list-group'>
                                    {!wallets ? "Loading..." : wallets.map((wallet) =>
                                        <NavDropdown.Item href={"#" + wallet.title} data-id={wallet.id} onClick={() => handleClick(wallet)}>{wallet.title}</NavDropdown.Item>
                                    )}
                                </ul>
                                {/*iterate over options*/}
                                <ul className='list-group'>
                                    {menuOptions.map((option) =>
                                        <NavDropdown.Item href="#action/3.1"><Link to={"/" + option}>{option}</Link></NavDropdown.Item>
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
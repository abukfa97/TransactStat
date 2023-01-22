import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import React from 'react';
import {AppBar, Avatar, makeStyles, Toolbar, Typography} from "@mui/material";




const NavigationBar = ({ menuRoute, urlRoute, wallets, user }) => {

    const menuOptions = [
        "Profile", "Settings"
    ]
    console.log(wallets)


    // fetch wallets based on userId


    return (
        <div>
                <AppBar style={{ background: '#7B8FA1' }}>
                    <Toolbar>
                        <Typography sx={{
                            flexGrow: 1,
                            color: '#000'
                        }}>
                            TransactStat
                        </Typography>
                            <div className='list-group' style={{ width: '8%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                                {menuOptions.map((option) =>
                                    <Typography style={{ color: '#fff'}}><Link className='black' to={"/" + option.toLowerCase()}>{option}</Link></Typography>
                                )}
                            </div>
                        <Typography style={{
                            color: '#000',
                            marginLeft: '15px',
                            marginRight: '10px'
                        }}>
                            {user}
                        </Typography>
                        <Avatar src='../images/amelie.jpg'  />
                    </Toolbar>
                </AppBar>
        </div>
    )
}

export default NavigationBar
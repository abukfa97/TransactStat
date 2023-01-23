import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import React from 'react';
import {AppBar, Avatar, makeStyles, Toolbar, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';




const NavigationBar = ({ wallets, user  }) => {


    console.log(wallets)


    // fetch wallets based on userId


    return (
        <div>
                <AppBar style={{ background: '#140a38', border: 'none' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'right'}}>
                    <div className='icon-pocket'>
                        <a href="#"><WbSunnyIcon style={{color: 'white', margin: '5px'}}></WbSunnyIcon ></a>
                        <a href='#'><KeyboardDoubleArrowUpIcon style={{color: 'white', margin: '5px'}} className='icon'></KeyboardDoubleArrowUpIcon></a>
                    </div>
                    </Toolbar>
                </AppBar>
        </div>
    )
}

export default NavigationBar
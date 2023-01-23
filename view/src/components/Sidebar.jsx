import {makeStyles} from "@mui/styles";
import {Avatar, Divider, Drawer, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import VillaIcon from '@mui/icons-material/Villa';
import Person4Icon from '@mui/icons-material/Person4';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BarChartIcon from '@mui/icons-material/BarChart';

const useStyles = makeStyles({
    drawer: {
      width: 250,
      background: '#000'
    },
    drawerPaper:{
        width: 250,
        background: '#000'
    }
})

const Sidebar = ({}) => {
    const classes= useStyles();
    const settings = [
        {
            icon: <Person4Icon style={{marginRight: '5%'}} ></Person4Icon> ,
            name: "Profile"
        },
        {
            icon: <SettingsIcon style={{marginRight: '5%'}}></SettingsIcon>,
            name: "Settings"
        },

    ]

    const menuOptions = [
        {
            icon: <AccountBalanceWalletIcon style={{marginRight: '5%'}}></AccountBalanceWalletIcon>,
            name: "Wallets"
        },
        {
            icon: <AccountBalanceIcon style={{marginRight: '5%'}} ></AccountBalanceIcon> ,
            name: "Transactions"
        },
        {
            icon: <BarChartIcon style={{marginRight: '5%'}}></BarChartIcon>,
            name: "Statistics"
        },

    ]

    return (
            <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: "#281f43",
                        color: "white",
                        borderRight: '1px solid black'
                    }
                }}
                className= {classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{paper: classes.drawerPaper}}>
                <div className='ltp-5 text-align'>
                    <h5>Nightingale Co.</h5>
                </div>
                <Avatar style={{margin: '70px auto 10px auto', height: '120px', width:'120px'}} src="images/elon.jpg"></Avatar>
                <h6 style={{
                    color: '#fff',
                    textAlign: 'center'
                }}>
                    Elon
                </h6>

                <div style={{ textAlign: "left", marginTop: '140px'}}>
                    <Typography style={{ color: '#94cdbf', margin: 'auto 17%', marginBottom: '35%' }}><Link style={{ color: '#94cdbf'}} to="/home"><VillaIcon style={{marginRight: '5%'}}></VillaIcon>Dashboard</Link></Typography>
                    <div style={{ marginBottom: '35%'}}>
                    {menuOptions.map((option) =>
                        <Typography style={{ color: '#fff', margin: '17%'}}>{option.icon}<Link className='white' to={"/" + option.name.toLowerCase()}>{option.name}</Link></Typography>
                    )}
                    </div>
                    <div>
                    {settings.map((option) =>
                        <Typography style={{ color: '#fff', margin: '17%'}}>{option.icon}<Link className='white' to={"/" + option.name.toLowerCase()}>{option.name}</Link></Typography>
                    )}
                    </div>
                </div>
            </Drawer>
    )
}

export default Sidebar;
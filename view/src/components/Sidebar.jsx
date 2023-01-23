import {makeStyles} from "@mui/styles";
import {Avatar, Divider, Drawer, Typography} from "@mui/material";
import {Link} from "react-router-dom";

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
    const menuOptions = [
        "Profile", "Settings"
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
                    <h5>TransactStat</h5>
                </div>
                <Avatar style={{margin: '70px auto 10px auto'}}></Avatar>
                <h6 style={{
                    color: '#fff',
                    textAlign: 'center'
                }}>
                    Domi
                </h6>

                <div style={{ textAlign: "left", marginTop: '70px'}}>
                    <p>Dashboard</p>
                    {menuOptions.map((option) =>
                        <Typography style={{ color: '#fff', margin: '8%'}}><Link className='white' to={"/" + option.toLowerCase()}>{option}</Link></Typography>
                    )}
                </div>
            </Drawer>
    )
}

export default Sidebar;
import {Typography} from "@mui/material";

const Header = ({ title, subtitles}) => {


    return (
       <div>
           <Typography variant='h6' style={{
               color: '#fddf4e'
           }}>{title.toUpperCase()}</Typography>
           <Typography style={{
               color: 'white'
           }}>{subtitles}</Typography>

       </div>
    )
}

export default Header;
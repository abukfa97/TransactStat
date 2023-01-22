import {Typography} from "@mui/material";

const Header = ({ title, subtitles}) => {


    return (
       <div>
           <Typography variant='h6'>{title.toUpperCase()}</Typography>
           <Typography >{subtitles}</Typography>

       </div>
    )
}

export default Header;
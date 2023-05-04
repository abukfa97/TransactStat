import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <div className="toolbar-height"></div>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography>Please
                    <Link to="/login"> Log In </Link> or
                    <Link to="/register"> Sign Up </Link>
                    to see more content!
                </Typography>
            </Box>

        </>
    )
}

export default MainPage;
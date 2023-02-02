import {Typography} from "@mui/material";

const Header = ({ title, subtitles, titleSize}) => {
    if (titleSize === 'large'){
        return (
            <div>
                <h4 style={{
                    color: 'white'
                }}>{title.toUpperCase()}</h4>
                <p style={{
                    color: 'white'
                }}>{subtitles}</p>

            </div>
        )
    } else {
        return (
            <div>
                <h6 style={{
                    color: 'white'
                }}>{title.toUpperCase()}</h6>
                <p style={{
                    color: 'white'
                }}>{subtitles}</p>

            </div>
        )
    }


}

export default Header;
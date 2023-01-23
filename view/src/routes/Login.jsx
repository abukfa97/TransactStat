import {useState} from "react";
import {Alert, Typography} from "@mui/material";
import {Link, useHistory} from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {
    const [userName, setUserName] = useState("")
    const [errorDisplay, setErrorDisplay] = useState(null)
    let history = useHistory()

    const handleStatus = async(e) => {
        e.preventDefault();
        const user = {"userName": userName};
        let response = await fetch('/api/users/auth',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            } )
        if (response.status === 202) {
            setErrorDisplay(<Alert severity="success">Yay! You are logged in!</Alert>)
            history.push('/home')
        } else {
            setErrorDisplay(<Alert severity="error">There is something wrong with the password or the name! Please try again!</Alert>)
        }
    }



    return (
        <div>
            <div className="toolbar-height"></div>
            <div className='container-login'>
                <form onSubmit={handleStatus()}></form>
                <h4 style={{color: 'white', margin: '100px auto 50px auto'}}>Sign In</h4>
                    <div className="socials">
                        <Link to='google.com' className='social-button'><GoogleIcon></GoogleIcon></Link>
                        <Link to='google.com' className='social-button'><FacebookIcon></FacebookIcon></Link>
                        <Link to='google.com' className='social-button'><GitHubIcon></GitHubIcon></Link>
                    </div>
                    <div className='email-sign-in-form'>
                        <Typography>
                            Sign In With Email
                        </Typography>
                        <input type="text" placeholder='Name' className='input-field'/>
                        <input type="email" placeholder='Email'  className='input-field'/>
                        <input type="password" placeholder='Password'  className='input-field'/>
                        <Link className='forgot-your-password'>Forgot your password?</Link>
                        <input type="submit" value='Sign In' className='submit-button'/>
                    </div>
                <div className='container-right'></div>
            </div>
        </div>

        // <div className="form">
        //
        //     {errorDisplay}
        //     <form onSubmit={handleStatus}>
        //         <div className="input-container">
        //             <label>Username </label>
        //             <input type="text" name="uname" required value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
        //         </div>
        //         <div className="input-container">
        //             <label>Password </label>
        //             <input type="password" name="password" required/>
        //         </div>
        //         <p>If you are not registered, click <Link to="/register">here</Link></p>
        //         <div className="button-container">
        //             <input value="Login" type="submit" />
        //         </div>
        //     </form>
        // </div>
    )
}

// fetch /auth -> if Response: ACCEPTED -> redirect to homepage

export default Login
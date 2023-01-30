import React, {useState} from "react";
import {Alert} from "@mui/material";
import {Link, redirect, useHistory} from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useNavigate} from "react-router";
import {Home} from "@mui/icons-material";


const Login = () => {
    const [userName, setUserName] = useState("")
    const [errorDisplay, setErrorDisplay] = useState(null)
    let history = useHistory()


    console.log(userName)

    const handleStatus = async(e) => {
        e.preventDefault();
        const user = {"userName": userName};
        let response = await fetch('/api/users/auth',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            })
        if (response.status === 202) {
            setErrorDisplay(<Alert severity="success">Yay! You are logged in!</Alert>);
            return redirect('/home');
        } else {
            setErrorDisplay(<Alert severity="error">There is something wrong with the password or the name! Please try again!</Alert>);
        }
    }



    return (
        <div>
            <div className="toolbar-height"></div>
            {errorDisplay}
            <div className='container-login'>
                <form onSubmit={handleStatus}>
                    <h4 style={{color: 'white', margin: '100px auto 50px auto', textAlign:'center'}}>Sign In</h4>
                        <div className="socials">
                            <Link to='google.com' className='social-button'><GoogleIcon></GoogleIcon></Link>
                            <Link to='google.com' className='social-button'><FacebookIcon></FacebookIcon></Link>
                            <Link to='google.com' className='social-button'><GitHubIcon></GitHubIcon></Link>
                        </div>
                        <div className='email-sign-in-form'>
                            <p className='white-color'>
                                Sign In With Email
                            </p>
                            <input type="text" placeholder='Name' className='input-field' name="uname" required value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
                            <input type="email" placeholder='Email'  className='input-field'/>
                            <input type="password" placeholder='Password'  className='input-field'/>
                            <Link to='gmail.com' className='forgot-your-password'>Forgot your password?</Link>
                            <p className='sign-up'>Don't have and account? Sign Up <Link to='/register' className='sign-up-sign'>here</Link>!</p>
                            <input type="submit" value='Sign In' className='submit-button'/>
                        </div>
                    <div className='container-right'></div>
                </form>
            </div>
        </div>
    )
}

export default Login
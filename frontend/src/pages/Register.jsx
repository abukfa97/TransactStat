import {useState} from "react";
import {Link} from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google.js";
import FacebookIcon from "@mui/icons-material/Facebook.js";
import GitHubIcon from "@mui/icons-material/GitHub.js";

const Register = () => {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    const createNewUser = async (e) => {
        e.preventDefault();
        const user = {
            "userName": username,
            "firstName": firstName,
            "lastName": lastName,
            "password": password
        }; 
        await fetch('api/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
    }

    // send post request with username, firstname, lastname

    return (
        <div>
            <div className="toolbar-height">
            </div>
            <div className='container-login'>
                <form onSubmit={createNewUser}>
                    <h4 style={{color: 'white', margin: '100px auto 50px auto', textAlign: 'center'}}>
                        Sign Up
                    </h4>
                    <div className="socials">
                        <Link to='google.com' className='social-button'><GoogleIcon></GoogleIcon></Link>
                        <Link to='google.com' className='social-button'><FacebookIcon></FacebookIcon></Link>
                        <Link to='google.com' className='social-button'><GitHubIcon></GitHubIcon></Link>
                    </div>
                    <div className='email-sign-in-form'>
                        <p className='white-color'>
                            Sign Up With Email
                        </p>
                        <input type="text"
                               placeholder='User Name'
                               className='input-field'
                               name="uname"
                               required
                               onChange={(event) => setUsername(event.target.value)} value={username}/>
                        <input type="email"
                               placeholder='Email'
                               className='input-field'
                               name="email"
                               required/>
                        <input type="text"
                               placeholder='First Name'
                               className='input-field'
                               required
                               onChange={(event) => setFirstName(event.target.value)}
                               value={firstName}/>
                        <input type="text"
                               placeholder='Last Name'
                               className='input-field'
                               required
                               onChange={(event) => setLastName(event.target.value)}
                               value={lastName}/>
                        <input type="password"
                               placeholder='****'
                               className='input-field'
                               required
                               onChange={(event) => setPassword((event.target.value))}
                               value={password}/>
                        <p className='sign-up'>
                            Already have an account? Sign In
                            <Link to='/login' className='sign-up-sign'> here </Link>!
                        </p>
                        <input type="submit" value='Sign Up' className='submit-button'/>
                    </div>
                    <div className='container-right'></div>
                </form>
            </div>
        </div>
    )
}

export default Register;
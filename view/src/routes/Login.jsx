import {useEffect, useState} from "react";
import {Link, Redirect} from 'react-router-dom';

const Login = ({  }) => {
    const [userName, setUserName] = useState("")
    const [error, setError] = useState("")
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
            setError("Login Successful")
        } else {
            setError("There is something wrong!")
        }
    }

    return (

        <div className="form">
            <p className="error">{error}</p>
            <form onSubmit={handleStatus}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required/>
                </div>
                <p>If you are not registered, click <Link to="/register">here</Link></p>
                <div className="button-container">
                    <input value="Login" type="submit" />
                </div>
            </form>
        </div>
    )
}

// fetch /auth -> if Response: ACCEPTED -> redirect to homepage

export default Login
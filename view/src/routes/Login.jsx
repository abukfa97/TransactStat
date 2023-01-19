import {useEffect, useState} from "react";
import { browserHistory } from 'react-router';
const Login = ({  }) => {
    const [userName, setUserName] = useState("")
    const [error, setError] = useState("")
    const handleStatus = async(e) => {
        e.preventDefault();
        const user = {"userName": userName};
        let response = await fetch('/api/wallet/transactions',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(user)
            } )
        if (response.status === 202) {
            browserHistory.push("/");
        } else if (response.status === 403) {
            setError("There is something wrong!")
        }
            //reponse.status ==403 or 202

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
                    <input type="password" name="password" required value={}/>
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

// fetch /auth -> if Response: ACCEPTED -> redirect to homepage

export default Login